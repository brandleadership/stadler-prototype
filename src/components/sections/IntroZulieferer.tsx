import ContentWidth from "../layouts/ContentWidth";
import H2 from "../typography/H2";
import ButtonPrimary from "@/components/elements/ButtonPrimary";
import React from "react";

interface ListProps {
  title: string;
  buttonLink?: string;
  buttonTitle?: string;
}

const IntroZulieferer: React.FC<ListProps> = ({
  title,
  buttonLink,
  buttonTitle,
}) => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <ContentWidth>
        <div className="col-span-12">
          <div className="gap-16 items-center mb-8 lg:grid lg:grid-cols-2 lg:mb-24">
            <div className="font-normal sm:text-lg">
              <H2>{title}</H2>
              <p className="mb-4 mt-6">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor.
              </p>
              <p className="mb-4 mt-6">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
                diam nonumy eirmod tempor. Lorem ipsum dolor sit amet,
                consetetur sadipscing elitr.
              </p>
              <ButtonPrimary
                position="left"
                buttonText={buttonTitle}
                href={buttonLink}
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <img
                className="object-cover object-left h-96 scale-100"
                src="https://www.stadlerrail.com/media/img/c/industrielackierer_lernende.jpg"
                alt="office content 1"
              />
              <img
                className="object-cover object-center h-96 scale-100 mt-4 h-full lg:mt-10"
                src="https://www.stadlerrail.com/media/img/c/schreiner_azubi_lernende.jpg"
                alt="office content 2"
              />
            </div>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default IntroZulieferer;
