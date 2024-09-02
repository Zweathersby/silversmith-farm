"use client";

import Image from "next/image";
import Subtitle from "@/app/ui/components/subtitle";
import FadeInWhenVisible from "@/app/ui/fade-in";
import { card, cardContainer, servicePug } from "@/app/ui/services.module.css";

const serviceList = [
  {
    title: "Boarding",
    description: `
      We offer long term boarding (1 month or more) for owners who
      are building homes, moving or on extended vacations. There is
      a reduced fee for monthly boarding (see Fees & Services page)
    `,
  },
  {
    title: "Day Care",
    description: `
      A number of our clients work long hours and don't have time to
      exercise their dogs during the week. So they bring them over
      here for us to play and exercise. Some are once a week and
      others come 2-3 days a week.
    `,
  },
  {
    title: "Adoption",
    description: `
      If you are interested in our Weimaraner puppies please
      contact us via email or phone show below.
    `,
  },
];

export default function Services() {
  return (
    <section id="services">
      <FadeInWhenVisible>
        <div className="container mx-auto relative">
          <Image
            className={servicePug}
            src="/pug.jpg"
            alt="Pug headshot picture"
            width={150}
            height={150}
          />
          <div className={cardContainer}>
            <Subtitle className="text-center">Services</Subtitle>
            <div className="grid lg:grid-cols-3 gap-6">
              {serviceList.map(({ title, description }, i) => {
                return (
                  <div key={title + i} className={card}>
                    <div className="flex flex-col justify-center gap-3">
                      <h5>{title}</h5>
                      <p>{description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
