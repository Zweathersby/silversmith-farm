import { Poppins, Bitter } from "next/font/google";

export const bitter = Bitter({ subsets: ["latin"] });
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
