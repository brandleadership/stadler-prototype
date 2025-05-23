import { storyblokEditable } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H1 from '../typography/H1';
import SmallWidth from '../layouts/SmallWidth';
import Lead from '../typography/Lead';
import TextSection from './TextSection';
import Image from 'next/image';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const SuccessStoryContent = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <section className="bg-white py-8 pt-14 dark:bg-greySolid-800 lg:py-24">
                <SmallWidth>
                    <H1>{blok?.title}</H1>
                    <Lead className="richtext">{blok?.teaser}</Lead>
                </SmallWidth>
            </section>
            <section className="relative min-w-[100%] md:flex-row lg:min-w-[43%]">
                <ContentWidth>
                    <div className="col-span-12">
                        <Image
                            width={1376}
                            height={600}
                            className="h-auto w-full max-w-full object-right"
                            src={ButtonUrlRenderer(blok?.image)}
                            alt={blok?.image.filename.alt ?? blok?.title}
                        />
                    </div>
                </ContentWidth>
            </section>
            <TextSection blok={blok} />
        </div>
    );
};

export default SuccessStoryContent;
