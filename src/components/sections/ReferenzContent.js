import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import SuperSmallWidth from '../layouts/SuperSmallWidth';
import H1 from '../typography/H1';
import Text from '../typography/Text';
import Breadcrumbs from './Breadcrumbs';
import RichTextRenderer from '../helpers/RichTextRenderer';

function ReferenzContent({ blok }) {
    return (
        <section {...storyblokEditable(blok)} className="mb-24">
            <SuperSmallWidth>
                <div className="mt-20 flex font-normal text-gray-600">
                    <Breadcrumbs />
                </div>
                <H1 styles="mb-8">{blok?.title}</H1>
                <div className="mb-6 grid grid-cols-12 gap-6">
                    <div className="col-span-6">
                        {blok?.categories?.map((category, index) => (
                            <span
                                key={index}
                                className="mb-2 mr-4 inline whitespace-nowrap border border-gray-400 px-4 py-2 text-xs text-gray-700 last-of-type:mr-0"
                            >
                                {category.content.category}
                            </span>
                        ))}
                    </div>
                </div>
            </SuperSmallWidth>
            <SuperSmallWidth>
                <div className="w-full">
                    {blok.downloads.map((nestedBlok) => (
                        <StoryblokComponent
                            blok={nestedBlok}
                            key={nestedBlok._uid}
                        />
                    ))}
                </div>
            </SuperSmallWidth>
            <SuperSmallWidth>
                <Text styles="text-lg mt-12">{blok?.lead}</Text>
                <img
                    src={blok?.image.filename}
                    className="my-8 w-full"
                    alt="Full service image"
                />
            </SuperSmallWidth>
            <SuperSmallWidth>
                <div>
                    <RichTextRenderer text={blok?.text} />
                </div>
            </SuperSmallWidth>
            {blok.news_blocks.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </section>
    );
}

export default ReferenzContent;
