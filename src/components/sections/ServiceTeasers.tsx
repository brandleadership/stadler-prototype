"use client";

import Button from "@/components/elements/ButtonSecondary";
import ContentWidth from "@/components/layouts/ContentWidth";
import H2 from "@/components/typography/H2";
import Text from "@/components/typography/Text";

interface ServiceItem {
  label?: string;
  description?: string;
  img?: string;
  href?: string;
 
}

interface ServiceTeasersProps {
  services: ServiceItem[];
  mainTitle?: string;
  text?: string;
  imageStyles?: string;
}

const ServiceTeasers: React.FC<ServiceTeasersProps> = ({
  services,
  mainTitle,
  text,
  imageStyles,
}) => {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased pb-24">
      <ContentWidth>
        <div className="col-span-12 mt-12">
          <H2>{mainTitle}</H2>
          <Text>{text}</Text>
        </div>
      </ContentWidth>
      <ContentWidth>
        {services.map((item) => (
          <div
            className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl bg-white border border-gray-200 shadow dark:bg-gray-800 dark:border-gray-700 mb-6 mx-auto"
            key={item.label}
          >
            <a href={item.href}>
              <img className={` ${imageStyles}`} src={item.img} alt="" />
            </a>
            <div className="p-5">
              <a href={item.href}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.label}
                </h5>
                <p>{item.description}</p>
              </a>
            </div>
          </div>
        ))}
      </ContentWidth>
    </section>
  );
};

export default ServiceTeasers;
