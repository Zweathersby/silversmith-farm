import Image from "next/image";
import Subtitle from "@/app/ui/components/subtitle";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto">
        <Subtitle className="text-center">About Us</Subtitle>
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <Image
            className="rounded-lg lg:col-span-2"
            src="/dog.jpg"
            alt="Picture of a dog"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="flex flex-col justify-center gap-9 lg:col-span-3">
            <p>
              The owners and Manager both live on the premises, which is gated
              with video surveillance. It is heated and air conditioned. The
              kennel building is a charming little cottage next to our home.
            </p>
            <p>
              Silversmith Farm Boarding Kennel, LLC is a small (20
              indoor/outdoor runs), private, upscale, unique, family owned and
              operated kennel on Silversmith Farm, Johns Island, SC. It is
              located 15 min from Charleston on a 28 acre farm, protected by an
              electric gate.
            </p>
          </div>
          <Image
            className="rounded-lg lg:order-last lg:col-span-2"
            src="/hero-dog.jpg"
            alt="Picture of a dog"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="flex flex-col justify-center gap-9 lg:col-span-3">
            <p>
              It is basically a small kennel in a doggy park! We are open 365
              days a year from 7:00 AM - 9:00 PM. We are open on all Holidays as
              well. Since we are not open to the public, prospective clients are
              required to make an appointment for a visit & tour so that they
              may become familiar with the services we offer.
            </p>
            <p>
              Our kennel is unique - because it is a show kennel! We want our
              show dogs to exercise and never feel anxious about being confined
              or locked up. And, this is how our boarding clients are treated -
              like our show dogs!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
