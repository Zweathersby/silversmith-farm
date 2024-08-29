import Hero from "@/app/ui/sections/hero";
import Mission from "@/app/ui/sections/mission";
import About from "@/app/ui/sections/about";
import Services from "@/app/ui/sections/services";
import Contact from "@/app/ui/sections/contact";

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Hero />
        <Mission />
        <About />
        <Services />
        <Contact />
      </main>
      <footer className="w-full">
        <div className="container mx-auto">
          <p className="text-xs">
            Silversmith Farm Boarding Kennel, LLC | © 2023 and 2024. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
