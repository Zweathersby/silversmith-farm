import type { Metadata } from "next";
import { bitter, poppins } from "@/app/ui/fonts";
import "@/app/ui/globals.css";

export const metadata: Metadata = {
  title: "Silversmith Farm",
  description: "Boarding Kennel, Day Care, and Adoption",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.className} ${bitter.className}`}>
        {children}
      </body>
    </html>
  );
}
