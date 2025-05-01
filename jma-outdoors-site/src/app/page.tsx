import NavBar from "@/components/nav-bar";
import { Toaster } from "@/components/ui/sonner"

export default function Home() {
  return (
    <div className="min-h-screen p-4 font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <Toaster />
    </div>
  );
}
