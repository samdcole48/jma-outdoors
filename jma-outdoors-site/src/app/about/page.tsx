import NavBar from "@/components/nav-bar";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import ContactUsDialog from "@/components/contact-us-dialog";
import Link from "next/link";

export default function About() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <Toaster />
      <div
        className="flex flex-col h-screen justify-center items-start text-white text-left p-4"
        style={{
          backgroundImage: "url('/background/background1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-3/4">
          <h1 className="text-4xl font-bold mb-4">
            Your Dream Yard, Done Right
          </h1>
          <p className="text-lg mb-4">
            We believe you shouldn’t have to settle when it comes to your
            outdoor space. Our team works closely with you to design and
            maintain a yard that’s both beautiful and practical. From simple
            clean-ups to full-scale transformations, we handle every project
            with care, precision, and a commitment to quality.
          </p>
          <ul className="list-disc pl-5 text-lg font-bold mb-4">
            <li>Certified Landscaping Professionals</li>
            <li>Reliable, Skilled Crew</li>
            <li>Budget-Friendly Solutions</li>
            <li>Efficient Service That Saves You Time & Money</li>
          </ul>
          <div className="flex gap-4 mt-4">
            <Link href="/services">
              <Button variant="secondary">Our Services</Button>
            </Link>
            <ContactUsDialog variant="home" />
          </div>
        </div>
      </div>
    </div>
  );
}
