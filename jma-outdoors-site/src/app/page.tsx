import NavBar from "@/components/nav-bar";
import { Toaster } from "@/components/ui/sonner";
import { Button } from "@/components/ui/button";
import ContactUsDialog from "@/components/contact-us-dialog";
import Link from "next/link";

export default function Home() {
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
            Bring Your Yard to Life with JMA Outdoors — Leander's Trusted
            Landscaping & Lawn Care Pros
          </h1>
          <p className="text-lg">
            At JMA Outdoors, we specialize in high-quality lawn maintenance and
            landscape design for both homes and businesses. Our experienced,
            reliable team is committed to delivering beautiful results and
            outstanding service across the Leander area.
          </p>
          <p className="text-lg font-bold">
            Whether you're looking for routine care or a complete outdoor
            makeover, we're here to make your vision a reality.
          </p>
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
