import NavBar from "@/components/nav-bar";
import { Toaster } from "@/components/ui/sonner";

export default function Gallery() {
  return (
    <div className="min-h-screen p-4 font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <Toaster />
      <div className="flex h-screen justify-center items-center">
        <h1 className="text-2xl font-bold text-center">Gallery</h1>
      </div>
    </div>
  );
}
