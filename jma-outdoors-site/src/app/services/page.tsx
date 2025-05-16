import NavBar from "@/components/nav-bar";
import { Toaster } from "@/components/ui/sonner";
import ContactUsDialog from "@/components/contact-us-dialog";

export default function Services() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <Toaster />
      <div className="h-screen flex flex-col">
        {/* Top Section */}
        <div
          className="flex flex-col h-1/2 text-white text-left p-4"
          style={{
            backgroundImage: "url('/background/background1.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="grid grid-cols-3 gap-4 mt-4 w-full">
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Lawn Maintenance & Mowing
              </h1>
              <p className="text-lg mb-4">
                Keep your yard looking its best with routine lawn care tailored
                to your property's needs. From mowing and edging to trimming and
                cleanup, we provide dependable, professional service that keeps
                your grass healthy, neat, and guest-ready all season long.
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">
                Landscaping & Planting
              </h1>
              <p className="text-lg mb-4">
                We help you choose the right plants for your climate and style,
                creating a cohesive look that thrives. We also offer sod
                installation to instantly revitalize your lawn with lush, green
                grass. Our team handles everything from soil prep to final
                placement, ensuring healthy roots and long-lasting results.
              </p>
            </div>
            <div>
              <h1 className="text-4xl font-bold mb-4">Hardscaping</h1>
              <p className="text-lg mb-4">
                Add lasting function and beauty to your yard with custom
                hardscape features like landscaping rock and gravel, paver
                walkways, and garden bed edging — all designed for easy
                maintenance and everyday use.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col h-1/2 bg-gray-300 text-black text-center p-4">
          <h1 className="text-4xl font-bold mb-4">
            Full-Service Landscape Design & Outdoor Living
          </h1>
          <p className="text-lg mb-4 max-w-[60%] mx-auto">
            From initial design to final installation, we make it easy to turn
            your yard into a personalized outdoor retreat. Our team takes care
            of every detail — so you can relax and enjoy the results.
          </p>
          <div className="flex-center gap-4 mt-4">
            <ContactUsDialog variant="home" />
          </div>
        </div>
      </div>
    </div>
  );
}
