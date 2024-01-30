import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import ContentWidth from "../layouts/ContentWidth";
import H2 from "../typography/H2";

const QualityFeatureGrid = ({ blok }) => {
    return (
      <section className="py-24 bg-stadlergradient">
        <ContentWidth>
          <div className="col-span-12 max-w-full mx-auto">
            <H2 styles="text-white">Lorem ipsum</H2>
            <div className="mt-8 lg:mt-16">
              <div className="grid grid-cols-1 gap-16 sm:gap-12 lg:grid-cols-2 lg:gap-24"></div>
              <div {...storyblokEditable(blok)}>
                {blok.columns.map((nestedBlok) => (
                  <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
                ))}
              </div>
            </div>
          </div>
        </ContentWidth>
      </section>
    );
};

export default QualityFeatureGrid;
