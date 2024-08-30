"use server";
import { z } from "zod";

const FormSchema = z.object({
  id: z.string(),
  email: z.string({
    invalid_type_error: "Please add your email.",
  }),
  name: z.string({
    invalid_type_error: "Please enter your name.",
  }),
  message: z.string({
    invalid_type_error: "Please enter a message to send.",
  }),
  date: z.string(),
});

export type State = {
  errors?: {
    email?: string[];
    name?: string[];
    message?: string[];
  };
  message?: string | null;
};

const CreateContact = FormSchema.omit({ id: true, date: true });
export async function createContact(prevState: State, formData: FormData) {
  // Validate form using Zod
  const validatedFields = CreateContact.safeParse({
    email: formData.get("email"),
    name: formData.get("name"),
    message: formData.get("message"),
  });
  console.log("Validated fields: ", validatedFields, formData);

  // If form validation fails, return errors early. Otherwise, continue.
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to Send Email.",
    };
  }

  // Prepare data for insertion into the database
  const { email, name, message } = validatedFields.data;
  const date = new Date().toISOString().split("T")[0];

  try {
    console.log("Send contact info: ", validatedFields.data);
    //   await sql`
    //       INSERT INTO invoices (customer_id, amount, status, date)
    //       VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
    //   `;
  } catch (error) {
    return {
      message: "Database Error: Failed to Send Email.",
    };
  }
}
