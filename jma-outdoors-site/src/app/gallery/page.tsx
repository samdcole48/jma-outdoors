import NavBar from "@/components/nav-bar";
import { Toaster } from "@/components/ui/sonner";
import Image from "next/image";

export default function Gallery() {
  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <NavBar />
      <Toaster />
      <div className="h-screen flex flex-col">
        <div className="flex flex-col bg-gray-500 text-white text-left p-4">
          <h1 className="text-4xl text-center font-bold mb-4">
            Completed Projects
          </h1>
          <div className="grid grid-cols-4 gap-4 mt-4">
            <div className="flex justify-center items-center">
              <Image
                src="/projects/projects1.jpg"
                alt="Project Image"
                width={312.5}
                height={187.5}
                className="p-2"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/projects/projects2.jpg"
                alt="Project Image"
                width={312.5}
                height={187.5}
                className="p-2"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/projects/projects3.jpg"
                alt="Project Image"
                width={312.5}
                height={187.5}
                className="p-2"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/projects/projects4.jpg"
                alt="Project Image"
                width={312.5}
                height={187.5}
                className="p-2"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/projects/projects5.jpg"
                alt="Project Image"
                width={312.5}
                height={187.5}
                className="p-2"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/projects/projects6.jpg"
                alt="Project Image"
                width={312.5}
                height={187.5}
                className="p-2"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/projects/projects7.jpg"
                alt="Project Image"
                width={312.5}
                height={187.5}
                className="p-2"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/projects/projects8.jpg"
                alt="Project Image"
                width={312.5}
                height={187.5}
                className="p-2"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gray-700 text-white text-left p-4">
          <h1 className="text-4xl text-center font-bold mb-4">
            Before & After
          </h1>
          <div className="grid grid-cols-2 grid-rows-2 gap-4 mt-4 w-full">
            <div className="flex justify-center items-center">
              <Image
                src="/before/before2.jpg"
                alt="Before renovation"
                width={312.5}
                height={187.5}
                className="p-2"
              />
              <Image
                src="/after/after2.jpg"
                alt="After renovation"
                width={312.5}
                height={187.5}
                className="p-2"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/before/before1.jpg"
                alt="Before renovation"
                width={312.5}
                height={187.5}
                className="p-2"
              />
              <Image
                src="/after/after1.jpg"
                alt="After renovation"
                width={312.5}
                height={187.5}
                className="p-2"
              />
            </div>
            <div className="flex justify-center items-center">
              <Image
                src="/before/before3.jpg"
                alt="Before renovation"
                width={312.5}
                height={187.5}
                className="p-2"
              />
              <Image
                src="/after/after3.jpg"
                alt="After renovation"
                width={312.5}
                height={187.5}
                className="p-2"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
