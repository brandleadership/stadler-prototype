'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ButtonPrimary from '../elements/ButtonPrimary';
import H2 from '../typography/H2';
import Text from '../typography/Text';
import SmallWidth from '../layouts/SmallWidth';

const TeaserImageRight = ({ blok }) => {
    return (
        <section {...storyblokEditable(blok)} className="antialiased py-12">
            <SmallWidth>
                <div className="grid grid-cols-1 gap-8 lg:gap-16 lg:grid-cols-2 items-center">
                    <div>
                        <div className="">
                            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
                                <div>
                                    <H2 styles="text-black">{blok?.title}</H2>
                                    <Text styles="mt-4 text-xl font-normal text-gray-800 text-black">
                                        {blok?.text}
                                    </Text>
                                </div>
                                <ButtonPrimary
                                    position="left"
                                    buttonText={blok?.cta_button_text}
                                    href={blok?.cta_button_link}
                                />
                            </div>
                        </div>
                    </div>

                    <img
                        src={blok?.image.filename}
                        className="object-cover object-center w-full"
                        alt=""
                    />
                </div>
            </SmallWidth>
        </section>
    );
};

export default TeaserImageRight;
