"use client";

import "./globals.css";

import type { Metadata } from "next";
import Head from "next/head";
import Script from 'next/script'
import { Montserrat } from "next/font/google";
import NavBar from "../components/sections/NavBar";
import Header from "@/components/sections/Header";
import Footer from "../components/sections/Footer";
import StoryblokProvider from "../components/StoryblockProvider";
import H1 from "@/components/typography/H1";


import {
  storyblokInit,
  apiPlugin,
} from "@storyblok/react";


import SubHero from "@/components/sections/SubHero";

storyblokInit({
  accessToken: "r9bj1EQKQ2RBQpmI0LRxWQtt",
  use: [apiPlugin],
  apiOptions: {
    region: "eu",
  },
  components: {

    title_h1: H1,
    subhero: SubHero
  }

});


const fontFamily = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

// export const metadata: Metadata = {
//   title: "Stadler Website Prototype",
//   description: "Technical analysis phase",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  }) {


  return (
    <html lang="en">

      <body className={fontFamily.className + ' ' + 'overflow-x-hidden flex flex-col min-h-screen'}>
      <Script>
       { `
       console.log("Matomo test")
       var _mtm = window._mtm = window._mtm || [];
        _mtm.push({'mtm.startTime': (new Date().getTime()), 'event': 'mtm.Start'});
        (function() {
          var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
          g.async=true; g.src='https://matomo.gateb.com/js/container_9iU2twN3.js'; s.parentNode.insertBefore(g,s);
        })();
        `}
      </Script>
        <Header />
        <main>{children}</main>
        <Footer />
        <script src="../../node_modules/flowbite/dist/flowbite.min.js" async />
      </body>

    </html>
  );
}
