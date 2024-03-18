'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import H3 from '../typography/H3';
import Link from 'next/link';
import Text from '../typography/Text';
import ContentWidth from '../layouts/ContentWidth';
import H1 from '../typography/H1';
import { render } from 'storyblok-rich-text-react-renderer';

const SuccessStoryContent = ({ blok }) => {
    return (
        <section
            {...storyblokEditable(blok)}
            className="min-w-[100%] relative lg:min-w-[43%] md:flex-row"
        >
            <ContentWidth>
                <div className="col-span-12">
                    <img
                        className="object-right max-w-full w-full h-auto"
                        src={blok?.image.filename}
                        alt=""
                    />
                    <div className="mb-4">
                        <H1>{blok.title}</H1>
                    </div>
                    <div className="mb-14">
                        <Text>{blok.teaser}</Text>
                    </div>
                    <div className="mb-14 richtext">
                        <Text>{render(blok.text)}</Text>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};

export default SuccessStoryContent;
