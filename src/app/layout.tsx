"use client"; 

import "./globals.css";

import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NavBar from "../components/sections/NavBar";
import Header from "@/components/sections/Header";
import Footer from "../components/sections/Footer";
import StoryblokProvider from "../components/StoryblockProvider";

import { storyblokInit, apiPlugin } from "@storyblok/react";

storyblokInit({
  accessToken: "r9bj1EQKQ2RBQpmI0LRxWQtt",
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
});


const fontFamily = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});
// To Do metadata 
//  const metadata: Metadata = {
//   title: "Stadler Website Prototype",
//   description: "Technical analysis phase",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={fontFamily.className}>
          <Header />
          <main>{children}</main>
          <Footer />
          <script
            src="../../node_modules/flowbite/dist/flowbite.min.js"
            async
          />
        </body>
      </html>
    </StoryblokProvider>
  );
}
