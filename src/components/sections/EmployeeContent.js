import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import H1 from '../typography/H1';
import SmallWidth from '../layouts/SmallWidth';
import Lead from '../typography/Lead';
import TextSection from './TextSection';
import Image from 'next/image';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';

const EmployeeContent = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <section className="bg-white py-8 pt-24 lg:py-24">
                <SmallWidth>
                    <H1>{blok?.title}</H1>
                    <Lead className="richtext">{blok?.teaser}</Lead>
                </SmallWidth>
            </section>

            <TextSection blok={blok} className="lg:py-8" />

            <SmallWidth>
                <div className="relative flex items-center justify-center justify-items-center">
                    <Image
                        className="object-cover"
                        src={ButtonUrlRenderer(blok?.image)}
                        sizes="(min-width: 1280px) 400px, 100vw"
                        alt={
                            blok?.image?.filename?.alt ??
                            `Image for ${blok?.title}`
                        }
                    />
                </div>
            </SmallWidth>

            {blok.career_block.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </div>
    );
};

export default EmployeeContent;
