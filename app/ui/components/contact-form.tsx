"use client";

// import { useActionState } from "react";
import Input from "@/app/ui/components/input/input";
import { createContact, State } from "@/app/lib/actions";

export default function ContactForm() {
  //   const initialState: State = { message: null, errors: {} };
  //   const [state, formAction] = useState(createContact);

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements as typeof form.elements & {
      email: HTMLInputElement;
      name: HTMLInputElement;
      message: HTMLTextAreaElement;
    };

    const parsed = {
      email: formElements.email.value,
      name: formElements.name.value,
      message: formElements.message.value,
    };
    console.log("form: ", parsed);
    // onSubmitUsername(formElements.usernameInput.value)
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <h5>Send an Email</h5>
      <fieldset>
        <Input
          type="email"
          label="email"
          aria-describedby="email-error"
          required
        />
        {/* <div id="email-error" aria-live="polite" aria-atomic="true">
          {state.errors?.email &&
            state.errors.email.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div> */}
      </fieldset>
      <fieldset>
        <Input
          type="text"
          label="name"
          aria-describedby="name-error"
          required
        />
        {/* <div id="name-error" aria-live="polite" aria-atomic="true">
          {state.errors?.name &&
            state.errors.name.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div> */}
      </fieldset>
      <fieldset>
        <div>
          <label htmlFor="message" className="text-sm mb-2 block">
            Message
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder="Let us know what you think."
            className="peer block w-full rounded-md border border-gray-200 p-3 text-sm outline-2"
            aria-describedby="message-error"
            required
          />
        </div>
        {/* <div id="message-error" aria-live="polite" aria-atomic="true">
          {state.errors?.message &&
            state.errors.message.map((error: string) => (
              <p className="mt-2 text-sm text-red-500" key={error}>
                {error}
              </p>
            ))}
        </div> */}
      </fieldset>
      {/* <div id="message-error" aria-live="polite" aria-atomic="true">
        {state.message && (
          <p className="mt-2 text-sm text-red-500" key={state.message}>
            {state.message}
          </p>
        )}
      </div> */}

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
  );
}
