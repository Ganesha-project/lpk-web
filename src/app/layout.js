import { Inter, Lato, Poppins } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/Components/Navbar";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const lato = Poppins({
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <section>
          <Navbar />
          {children}
        </section>
      </body>
    </html>
  );
}
