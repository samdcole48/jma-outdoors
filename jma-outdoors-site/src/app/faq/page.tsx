import NavBar from "@/components/nav-bar";
import { Toaster } from "@/components/ui/sonner";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import ContactUsDialog from "@/components/contact-us-dialog";

export default function FAQ() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <Toaster />
      <div
        className="flex flex-col h-screen justify-center px-48 py-16"
        style={{
          backgroundImage: "url('/background/background1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl font-bold mb-4 text-white">
          Frequently Asked Questions
        </h1>
        <Accordion
          type="single"
          collapsible
          className="w-full h-fit bg-white rounded-md px-4"
        >
          <AccordionItem value="item-1">
            <AccordionTrigger>
              What landscaping services do you offer?
            </AccordionTrigger>
            <AccordionContent>
              We specialize in a range of landscaping services including
              mulching, top dressing, sod installation, paver walkways, and
              decorative rock placement.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              What's included in basic lawn care services?
            </AccordionTrigger>
            <AccordionContent>
              Our standard lawn service includes mowing, edging along sidewalks
              and driveways, string trimming around hard-to-reach areas, and
              blowing debris back into the yard for a clean, finished look.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Do you offer maintenance after a landscape installation?
            </AccordionTrigger>
            <AccordionContent>
              Yes, depending on the project. Lawn maintenance can be scheduled
              for sod installations if the property lies within our service
              route.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Can you help with plant selection?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely. We'll help you choose plants that thrive in your
              environment and match your aesthetic preferences — making sure
              your landscape looks great and grows strong.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              What makes your company different?
            </AccordionTrigger>
            <AccordionContent>
              We're a locally owned and operated business that takes pride in
              personal service, honest work, and fair prices. We treat every
              yard like it's our own.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <div className="flex-col gap-4 mt-4">
          <p className="text-lg text-white mb-2">
            Need help with something else?
          </p>
          <ContactUsDialog variant="home" />
        </div>
      </div>
    </div>
  );
}
