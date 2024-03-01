import ButtonPrimary from "@/components/elements/ButtonPrimary";
import H2 from "@/components/typography/H2";
import ContentWidth from "../layouts/ContentWidth";
import React, { useRef, useEffect } from "react";

export default function Career() {
  const careerRef = useRef<HTMLAnchorElement>(null);

  // useEffect(() => {
  //   let carrerEl = careerRef.current;

  //   carrerEl?.addEventListener("click", () => {
  //     console.log("carrerEl", carrerEl);
  //     var _paq = (window._paq = window._paq || []);
  //     _paq.push(["trackEvent", "Career", "Visit Career Page", "TestValue"]);
  //   });
  // });

  return (
    <section className="bg-white py-5 lg:py-16">
      <ContentWidth>
        <div className="col-span-12 w-full  py-20 bg-primarySolid-50">
          <div className="mb-4 text-center tracking-tight dark:text-white ">
            <H2>Karriere bei Stadler</H2>
          </div>
          <p className="mb-10 text-center text-base font-normal text-gray-500 dark:text-gray-500 md:max-w-3xl md:mx-auto sm:text-xl">
            Wer die besten Züge der Welt baut,
            <br /> braucht die besten Fachkräfte der Welt.
          </p>
          <div className="flex justify-center">
            <ButtonPrimary ref={careerRef} href="/career" />
          </div>
        </div>
      </ContentWidth>
    </section>
  );
}
