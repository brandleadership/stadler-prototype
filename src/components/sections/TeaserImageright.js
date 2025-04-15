import { storyblokEditable } from '@storyblok/react/rsc';
import ButtonPrimary from '../elements/ButtonPrimary';
import H2 from '../typography/H2';
import Text from '../typography/Text';
import SmallWidth from '../layouts/SmallWidth';
import ButtonUrlRenderer from '../helpers/ButtonUrlRenderer';
import Image from 'next/image';

const TeaserImageRight = ({ blok }) => {
    return (
        <section {...storyblokEditable(blok)} className="py-8 lg:py-24">
            <SmallWidth>
                <div className="flex grid-cols-1 flex-col-reverse items-center gap-8 lg:grid lg:grid-cols-2 lg:gap-16">
                    <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                        <H2>{blok?.title}</H2>
                        <div className="mt-4 text-xl">
                            <Text>{blok?.text}</Text>
                        </div>
                        <ButtonPrimary
                            position="left"
                            buttonText={blok?.cta_button_text}
                            href={ButtonUrlRenderer(blok?.cta_button_link)}
                        />
                    </div>

                    <div className="relative aspect-[16/9] w-full">
                        <Image
                            fill={true}
                            sizes="(max-width: 768px) 100vw,  50vw"
                            src={ButtonUrlRenderer(blok?.image)}
                            className="object-cover object-center"
                            alt={blok?.image.filename.alt ?? blok?.title}
                        />
                    </div>
                </div>
            </SmallWidth>
        </section>
    );
};

export default TeaserImageRight;
