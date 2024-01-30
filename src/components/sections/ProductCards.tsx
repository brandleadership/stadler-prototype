import React from "react";
import ContentWidth from "../layouts/ContentWidth";
import Text from "../typography/Text";
import H3 from "../typography/H3";
import H4 from "../typography/H4";

interface Product {
  title: string;
  imageSrc: string;
  description: string;
}

interface ProductCardProps extends Product {}

const ProductCard: React.FC<ProductCardProps> = ({
  title,
  imageSrc,
  description,
}) => (
  <li className="w-full md:w-1/2">
    <H4 styles="mb-4">{title}</H4>
    <img
      src={imageSrc}
      alt={`Image for ${title}`}
      className="w-full h-auto object-cover object-center"
    />
    <div className="pr-0">
      <a
        href="#"
        className="flex flex-col items-start  gap-2 text-xl font-bold mt-5 text-white mb-5"
      >
        <Text styles="text-black mb-4">{description}</Text>
      </a>
    </div>
  </li>
);

const ProductCards: React.FC = () => {
  const products: Product[] = [
    {
      title: "FLIRT 160",
      imageSrc: "/flirt-1.jpg",
      description:
        "Der FLIRT 160 ist ein anpassbarer Regionalzug mit 160 km/h Höchstgeschwindigkeit, Leichtbauweise und wartungsfreundlicher Konstruktion.",
    },
    {
      title: "FLIRT 200",
      imageSrc: "/flirt-2.jpg",
      description:
        "Der Intercity-Zug erreicht 200 km/h und kombiniert intelligentes Design mit bewährter Technik, um vielfältige Anforderungen zu erfüllen.",
    },
 
  ];

  return (
    <section className="py-5 lg:py-24">
      <ContentWidth>
        <div className="col-span-12 max-w-full mx-auto">
          <div className="mx-auto max-w-2xl mb-16 lg:mx-0">
            <H3>Der FLIRT – Meister der Flexibilität</H3>
            <Text styles="mt-6 text-lg leading-8 text-lightGray">
              Der elektrische Triebzug KISS überzeugt mit hohem Innovationsgrad
              und großzügigem Raumangebot: die komfortabel gestaltete,
              umweltfreundliche Kapazitätssteigerung für den Schienenverkehr von
              morgen.
            </Text>
          </div>
          <div className=" mb-12 tracking-tight dark:text-white border border-solid border-greyBrighten-300"></div>
          <ul className="flex flex-col md:flex-row justify-center gap-12 md:justify-start md:gap-40  lg:gap-y-40">
            {products.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </ul>
        </div>
      </ContentWidth>
    </section>
  );
};

export default ProductCards;
