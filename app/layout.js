import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Correct weights
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"], // Correct weight
});

export const metadata = {
  title: "Portfolio - GreatStack",
  description: "A portfolio built with Next.js and styled beautifully.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden dark:bg-darkTheme
      dark:text-white`}>
        {children}
      </body>
    </html>
  );
}
