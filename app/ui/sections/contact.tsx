import Subtitle from "@/app/ui/components/subtitle";
import Input from "@/app/ui/components/input/input";

import "../contact.module.css";

export default function Contact() {
  return (
    <section id="contact">
      <div className="container mx-auto">
        <Subtitle>Contact Us</Subtitle>
        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm mb-5 lg:max-w-md">
              Don&apos;t hesitate to email or call us if you&apos;d like to
              schedule a tour or need more information!
            </p>
            <Subtitle className="text-3xl font-normal flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                strokeWidth={0.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              (843) 559-3938
            </Subtitle>
          </div>
          <form action="" className="flex flex-col gap-6">
            <h5>Send an Email</h5>
            <Input type="email" label="email" />
            <Input type="text" label="name" />
            <div>
              <label htmlFor="message" className="text-sm mb-3 block">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                placeholder="Let us know what you think."
                className="peer block w-full rounded-md border border-gray-200 p-3 text-sm outline-2"
              />
            </div>
            <button
              type="submit"
              className="flex h-[48px] self-end items-center justify-center gap-3 rounded-md px-6 text-sm font-medium"
            >
              Send
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
