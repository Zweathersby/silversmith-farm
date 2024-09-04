"use client";

import Image from "next/image";
import Subtitle from "@/app/ui/components/subtitle";
import FadeInWhenVisible from "@/app/ui/fade-in";

function Paw() {
  return (
    <svg
      width="36"
      height="34"
      viewBox="0 0 36 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0"
      style={{ left: "calc(50% - 18px)" }}
    >
      <path
        d="M10.929 23.2721C13.4604 18.1382 14.7261 15.5713 16.5479 14.9597C17.4908 14.6431 18.5093 14.6431 19.4521 14.9597C21.2739 15.5713 22.5397 18.1382 25.0711 23.2721L26.4739 26.1172C27.1278 27.4433 27.4547 28.1064 27.5322 28.5582C27.8533 30.4327 26.4613 32.1604 24.5858 32.2148C24.1337 32.228 23.4278 32.0352 22.0159 31.6498C21.209 31.4295 20.8056 31.3193 20.4021 31.238C18.8163 30.9182 17.1838 30.9182 15.5979 31.238C15.1945 31.3193 14.7911 31.4295 13.9842 31.6498C12.5723 32.0352 11.8663 32.228 11.4142 32.2148C9.53879 32.1604 8.14666 30.4327 8.46786 28.5582C8.54529 28.1064 8.87224 27.4433 9.52616 26.1172L10.929 23.2721Z"
        stroke="#AEBFFF"
        strokeWidth="3"
      />
      <path
        d="M8.65274 7.60967C9.31017 10.203 11.1691 11.9298 12.8048 11.4666C14.4405 11.0033 15.2335 8.52542 14.5761 5.93205C13.9187 3.33867 12.0597 1.61188 10.4241 2.07514C8.78837 2.53841 7.99533 5.0163 8.65274 7.60967Z"
        stroke="#AEBFFF"
        strokeWidth="3"
      />
      <path
        d="M27.3473 7.60967C26.6899 10.203 24.831 11.9298 23.1952 11.4666C21.5595 11.0033 20.7666 8.52542 21.424 5.93205C22.0814 3.33867 23.9402 1.61188 25.5761 2.07514C27.2117 2.53841 28.0047 5.0163 27.3473 7.60967Z"
        stroke="#AEBFFF"
        strokeWidth="3"
      />
      <path
        d="M2.35794 18.3753C3.07632 20.2916 4.76534 21.4557 6.13046 20.9751C7.49559 20.4947 8.01986 18.5515 7.30148 16.6352C6.5831 14.7188 4.89408 13.5549 3.52896 14.0354C2.16383 14.5159 1.63956 16.459 2.35794 18.3753Z"
        stroke="#AEBFFF"
        strokeWidth="3"
      />
      <path
        d="M33.6421 18.3753C32.9237 20.2916 31.2347 21.4557 29.8696 20.9751C28.5045 20.4947 27.9803 18.5515 28.6986 16.6352C29.417 14.7188 31.106 13.5549 32.4711 14.0354C33.8362 14.5159 34.3604 16.459 33.6421 18.3753Z"
        stroke="#AEBFFF"
        strokeWidth="3"
      />
    </svg>
  );
}

export default function About() {
  return (
    <section id="about" className="relative">
      <Paw />
      <FadeInWhenVisible>
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
                located 15 min from Charleston on a 28 acre farm, protected by
                an electric gate.
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
                days a year from 7:00 AM - 9:00 PM. We are open on all Holidays
                as well. Since we are not open to the public, prospective
                clients are required to make an appointment for a visit & tour
                so that they may become familiar with the services we offer.
              </p>
              <p>
                Our kennel is unique - because it is a show kennel! We want our
                show dogs to exercise and never feel anxious about being
                confined or locked up. And, this is how our boarding clients are
                treated - like our show dogs!
              </p>
            </div>
          </div>
        </div>
      </FadeInWhenVisible>
    </section>
  );
}
