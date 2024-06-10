import { Inter } from "next/font/google";
import "./globals.css";
import { Header, SmoothScrolling } from "@/components";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aqua Ideal",
  // description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pl">
      <head>
        {/* <link rel="icon" type="image/svg+xml" href="./icon.svg" /> */}
        {/* <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.5/dist/ScrollTrigger.min.js" /> */}
        {/* <Script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js" /> */}
      </head>
      <body className={inter.className}>
        <SmoothScrolling>
          {/* <LoadingScreen> */}
          <Header />
          {children}
          {/* <Footer /> */}
          {/* </LoadingScreen> */}
        </SmoothScrolling>
      </body>
    </html>
  );
}
