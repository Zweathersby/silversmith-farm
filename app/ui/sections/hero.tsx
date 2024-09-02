import Image from "next/image";
import Header from "@/app/ui/components/header/header";
import styles from "@/app/ui/hero.module.css";
import Panel from "@/app/ui/components/panel/panel";
import Link from "next/link";

const { heroSection, heroContent, imageWrapper } = styles;

export default function Hero() {
  return (
    <section id="hero" className={heroSection}>
      <div className="container mx-auto grow-[1]">
        <div className={imageWrapper}>
          <Image
            src="/hero-dog.jpg"
            alt="Picture of a dog"
            layout="fill"
            objectFit="cover"
            objectPosition="center"
          />
        </div>
        <Header title="Silversmith Farm" subtitle="Boarding Kennel" />
        <div className={heroContent}>
          <h1 className="mb-5">
            A country resort
            <br /> for dogs.
          </h1>
          <p className="text-lg mb-12">
            The most fun your dog will have away from home!
          </p>
          <Link
            href="#contact"
            className="flex h-[48px] items-center justify-center rounded-md bg-white p-3 text-md text-black font-medium hover:opacity-50"
            scroll={true}
          >
            <p>Contact Us</p>
          </Link>
        </div>
      </div>

      <Panel />
    </section>
  );
}
