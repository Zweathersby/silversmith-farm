"use client";

import Subtitle from "@/app/ui/components/subtitle";
import FadeInWhenVisible from "@/app/ui/fade-in";

export default function Mission() {
  return (
    <section id="mission">
      <FadeInWhenVisible>
        <div className="container mx-auto">
          <Subtitle className="text-center">Our Mission</Subtitle>
          <p className="text-2xl">
            Our mission is to provide the very best boarding facility possible
            so that our clients will be happy while away from home. We
            accomplish this by giving them lots of individual attention, care
            and of course … exercise!
          </p>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
