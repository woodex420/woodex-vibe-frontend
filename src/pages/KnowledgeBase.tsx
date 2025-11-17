import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { Upload, FileText, Trash2 } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const KnowledgeBase = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('general');
  const [uploading, setUploading] = useState(false);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const { data: knowledge } = useQuery({
    queryKey: ['business-knowledge'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('business_knowledge')
        .select('*')
        .order('created_at', { ascending: false });
      if (error) throw error;
      return data;
    },
  });

  const addKnowledge = useMutation({
    mutationFn: async () => {
      const { error } = await supabase.from('business_knowledge').insert({
        title,
        content,
        category,
      });
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['business-knowledge'] });
      setTitle('');
      setContent('');
      toast({ title: 'Success', description: 'Knowledge added successfully' });
    },
    onError: () => {
      toast({ title: 'Error', description: 'Failed to add knowledge', variant: 'destructive' });
    },
  });

  const deleteKnowledge = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase.from('business_knowledge').delete().eq('id', id);
      if (error) throw error;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['business-knowledge'] });
      toast({ title: 'Success', description: 'Knowledge deleted' });
    },
  });

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.type !== 'application/pdf') {
      toast({ title: 'Error', description: 'Only PDF files are supported', variant: 'destructive' });
      return;
    }

    setUploading(true);
    try {
      // Read PDF content (simplified - in production use a proper PDF parser)
      const text = await file.text();
      setContent(text);
      setTitle(file.name.replace('.pdf', ''));
      toast({ title: 'Success', description: 'PDF content extracted' });
    } catch (error) {
      console.error('PDF upload error:', error);
      toast({ title: 'Error', description: 'Failed to process PDF', variant: 'destructive' });
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">AI Training - Knowledge Base</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Add Knowledge Form */}
          <Card>
            <CardHeader>
              <CardTitle>Add Business Knowledge</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="text-sm font-medium mb-2 block">Upload PDF</label>
                <label className="flex items-center gap-2 p-4 border-2 border-dashed rounded-lg cursor-pointer hover:bg-accent">
                  <Upload className="h-5 w-5" />
                  <span className="text-sm">{uploading ? 'Processing...' : 'Upload Business Model PDF'}</span>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                    disabled={uploading}
                  />
                </label>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Title</label>
                <Input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="e.g., WoodEx Product Catalog"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Category</label>
                <Input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="e.g., products, services, policies"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Content</label>
                <Textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Enter knowledge content or upload PDF above"
                  rows={10}
                />
              </div>

              <Button 
                onClick={() => addKnowledge.mutate()}
                disabled={!title || !content || addKnowledge.isPending}
                className="w-full"
              >
                Add Knowledge
              </Button>
            </CardContent>
          </Card>

          {/* Knowledge List */}
          <Card>
            <CardHeader>
              <CardTitle>Existing Knowledge</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3 max-h-[600px] overflow-y-auto">
                {knowledge?.map((item) => (
                  <div key={item.id} className="p-4 border rounded-lg flex justify-between items-start">
                    <div className="flex gap-3 flex-1">
                      <FileText className="h-5 w-5 text-primary mt-1" />
                      <div className="flex-1">
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">Category: {item.category}</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          {item.content.substring(0, 100)}...
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => deleteKnowledge.mutate(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                {!knowledge || knowledge.length === 0 && (
                  <p className="text-center text-muted-foreground py-8">
                    No knowledge added yet. Upload PDFs or add content above.
                  </p>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default KnowledgeBase;
