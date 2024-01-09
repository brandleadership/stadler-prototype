import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

type Blok = {
  body: any[];
};

const Page: React.FC<{ blok: Blok }> = ({ blok }) => (
  <main {...storyblokEditable(blok)} className="text-center mt-4">
    {blok.body.map((nestedBlok) => (
      <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
    ))}
  </main>
);

export default Page;
