import "./globals.css";
import Script from "next/script";
import { Poppins } from "next/font/google";
import { Navbar } from "@/Components/Navbar";
import { Footer } from "@/Components/Footer";
import { FloatingButtonContainer } from "@/Components/FloatingBtnContainer";
import { Buttons } from "@/Components/Reusable/Buttons";
import { Analytics } from "@vercel/analytics/react"

export const metadata = {
  title: "LPK Hidamari",
  description: "LPK Hidamari Kenshu Senta Raih Mimpimu Dan Berkarir Di Jepang Besama Kami!",
};

const lato = Poppins({
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  subsets: ["latin"]
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" type="image/png" sizes="16x16" href="icon.png" />
      </head>
      <body className={lato.className}>
        <Navbar />
        <FloatingButtonContainer>
          <Buttons />
        </FloatingButtonContainer>
        {children}
        <Analytics />
        <Footer />
        <Script id="google-translate-script" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" />
        <Script id="google-translate-initializer">
          {`
            function googleTranslateElementInit() {
              new google.translate.TranslateElement(
                { pageLanguage: 'id' },
                'google_translate_element'
              );
            }
          `}
        </Script>
      </body>
    </html>
  );
}
