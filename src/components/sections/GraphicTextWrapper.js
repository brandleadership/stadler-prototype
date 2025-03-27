'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';
import RichTextRenderer from '../helpers/RichTextRenderer';
import H4 from '../typography/H4';

const GraphicTextWrapper = ({ blok }) => {
    return (
        <section {...storyblokEditable(blok)}>
            <ContentWidth>
                <div className="col-span-12 mx-auto py-8 lg:py-16">
                    <div>
                        <H2>{blok?.title}</H2>
                        <p className="mx-auto mb-6 font-light text-greySolid-600 md:text-lg lg:mx-0 xl:mb-8 xl:text-xl">
                            {blok?.lead}
                        </p>
                    </div>
                    <div className="grid gap-8 sm:gap-12 md:grid-cols-3">
                        <div className="flex justify-center">
                            <img
                                className="mr-3 mt-0.5 h-6 w-6"
                                src={blok?.step_one_icon.filename}
                                alt={
                                    blok.step_one_icon.filename?.alt ??
                                    `Icon for ${blok?.title}`
                                }
                            />
                            <div>
                                <H4>{blok?.step_one_title}</H4>
                                <div className="richtext font-light text-greySolid-600">
                                    <RichTextRenderer
                                        text={blok?.step_one_text}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img
                                className="mr-3 mt-0.5 h-6 w-6"
                                src={blok?.step_two_icon.filename}
                                alt={
                                    blok.step_two_icon?.filename?.alt ??
                                    `Icon for ${blok?.title}`
                                }
                            />
                            <div>
                                <H4>{blok?.step_two_title}</H4>
                                <div className="richtext font-light text-greySolid-600">
                                    <RichTextRenderer
                                        text={blok?.step_two_text}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-center">
                            <img
                                className="mr-3 mt-0.5 h-6 w-6"
                                src={blok?.step_three_icon.filename}
                                alt={
                                    blok.step_three_icon?.filename?.alt ??
                                    `Icon for ${blok?.title}`
                                }
                            />
                            <div>
                                <H4>{blok?.step_three_title}</H4>
                                <div className="richtext font-light text-greySolid-600">
                                    <RichTextRenderer
                                        text={blok?.step_three_text}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};

export default GraphicTextWrapper;
