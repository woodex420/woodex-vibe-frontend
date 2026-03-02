import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CreditCard, RotateCcw, Truck } from "lucide-react";

const ProductPolicies = () => {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="payment" className="border border-border rounded-lg px-6 mb-3 bg-background">
        <AccordionTrigger className="text-left font-semibold hover:text-accent">
          <span className="flex items-center gap-3">
            <CreditCard className="h-5 w-5 text-accent" />
            Payment Method
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-sm leading-relaxed space-y-2">
          <p>We accept the following payment methods:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Bank Transfer (HBL, Meezan, UBL, Allied Bank)</li>
            <li>JazzCash / EasyPaisa</li>
            <li>Cash on Delivery (Lahore only)</li>
            <li>Cheque Payment (corporate orders)</li>
          </ul>
          <p className="font-medium">50% to 75% advance payment is required to confirm your order. Remaining balance is due before delivery.</p>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="return" className="border border-border rounded-lg px-6 mb-3 bg-background">
        <AccordionTrigger className="text-left font-semibold hover:text-accent">
          <span className="flex items-center gap-3">
            <RotateCcw className="h-5 w-5 text-accent" />
            Return and Refund Policy
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-sm leading-relaxed space-y-2">
          <p>We stand behind the quality of every product we manufacture:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>7-day return policy for manufacturing defects</li>
            <li>Products must be in original packaging and unused condition</li>
            <li>Custom-made orders are non-refundable</li>
            <li>Refunds are processed within 7-10 business days</li>
            <li>Exchange available for size/color mismatches</li>
          </ul>
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="delivery" className="border border-border rounded-lg px-6 mb-3 bg-background">
        <AccordionTrigger className="text-left font-semibold hover:text-accent">
          <span className="flex items-center gap-3">
            <Truck className="h-5 w-5 text-accent" />
            Delivery Details
          </span>
        </AccordionTrigger>
        <AccordionContent className="text-muted-foreground text-sm leading-relaxed space-y-2">
          <p>We deliver nationwide across Pakistan:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li><strong>Lahore:</strong> 3-5 business days (free delivery)</li>
            <li><strong>Islamabad / Rawalpindi:</strong> 5-7 business days</li>
            <li><strong>Karachi / Other cities:</strong> 7-10 business days</li>
            <li>Professional assembly & installation included</li>
            <li>Tracking details shared after dispatch</li>
          </ul>
          <p className="font-medium">Bulk orders (10+ units) qualify for priority delivery.</p>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ProductPolicies;
