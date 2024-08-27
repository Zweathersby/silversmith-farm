import Image from "next/image";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto">
        <h2 className="text-center">About Us</h2>
        <div className="grid grid-cols-5 gap-12">
          <Image
            className="rounded-lg col-span-2"
            src="/dog.jpg"
            alt="Picture of a dog"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="col-span-3 flex flex-col justify-center gap-9">
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
          <div className="col-span-3 flex flex-col justify-center gap-9">
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
          <Image
            className="rounded-lg col-span-2"
            src="/hero-dog.jpg"
            alt="Picture of a dog"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        </div>
      </div>
    </section>
  );
}
