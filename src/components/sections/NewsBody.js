
import { storyblokEditable, StoryblokComponent } from "@storyblok/react/rsc";
import { render } from 'storyblok-rich-text-react-renderer';

import SuperSmallWidth from '../layouts/SuperSmallWidth'
import ArticleHero from './ArticleHero'

function NewsBody({ blok }) {
    
  return (
    <section {...storyblokEditable(blok)} className="mb-32">
      <ArticleHero block={blok} />
     
      <SuperSmallWidth>
        <div className="col-span-12 w-full mb-32">
          <div className="text-md richtext">
            {render(blok.text)}
          </div>
        </div>
      </SuperSmallWidth>
      {blok.news_blocks.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
      {blok.contact_block.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
     
    </section>
  );
}

export default NewsBody;
