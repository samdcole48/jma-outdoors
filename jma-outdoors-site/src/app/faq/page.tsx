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
              We offer a full range of residential and commercial landscaping
              solutions — including custom design, routine lawn care, irrigation
              systems, hardscape features, tree and plant installation, and
              high-quality artificial turf.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>
              Do you offer landscape design services?
            </AccordionTrigger>
            <AccordionContent>
              Yes! We specialize in personalized landscape design based on your
              goals and property layout. We can provide detailed 2D plans and
              realistic 3D renderings to help you visualize the final look
              before we get started.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>
              Can you help with plant selection?
            </AccordionTrigger>
            <AccordionContent>
              Definitely. We partner with trusted local nurseries to source
              healthy, climate-appropriate plants and trees. We'll help you
              choose the perfect mix to suit your space and style.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>
              Do you offer maintenance services after installation?
            </AccordionTrigger>
            <AccordionContent>
              Yes — we provide ongoing maintenance to keep your landscape
              looking its best. From regular mulching and trimming to algae
              removal and turf care, our team has your yard covered. Select
              services also include warranty options for added peace of mind.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>
              Can you fix drainage issues in my yard?
            </AccordionTrigger>
            <AccordionContent>
              Absolutely. Drainage challenges are common in the Austin area, but
              most can be solved with a tailored approach. We offer solutions
              like French drains, catch basins, and regrading to keep water
              moving where it should.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>
              What makes your company different?
            </AccordionTrigger>
            <AccordionContent>
              We combine hands-on experience with a genuine passion for outdoor
              design. Our team is known for its reliability, attention to
              detail, and commitment to delivering results that go beyond
              expectations — so you get a yard you'll love without compromise.
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
