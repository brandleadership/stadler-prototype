'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';
import H4 from '../typography/H4';
import Text from '../typography/Text';

const QualityFeatureGridExtended = ({ blok }) => {
    return (
        <section
            className="py-24 bg-stadlergradient"
            {...storyblokEditable(blok)}
        >
            <ContentWidth>
                <div className="col-span-12 max-w-full">
                    <H2 styles="text-white item-start">{blok?.title}</H2>
                    <div className="mt-8 lg:mt-16">
                        <div
                            className="grid grid-cols-1 gap-16 sm:gap-12 lg:grid-cols-2 lg:gap-24"
                            {...storyblokEditable(blok)}
                        >
                            {blok.feature_item.map((nestedBlok) => (
                                <StoryblokComponent
                                    blok={nestedBlok}
                                    key={nestedBlok?._uid}
                                />
                            ))}
                        </div>
                        <div className="pt-24 grid grid-cols-1 gap-16 sm:gap-12 lg:grid-cols-2 lg:gap-24 ">
                            <div className=" flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                                <div className="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-start shrink-0"></div>
                                <div>
                                    <H4 textColor="white">
                                        {blok?.subtitleOne ??
                                            'Flexibles Kastensystem'}
                                    </H4>
                                    <Text styles="mt-2 text-xl font-normal text-white sm:text-lg dark:text-gray-400">
                                        {blok?.textOne ??
                                            '  Es stehen zwei Wagenkastenlängen und -breiten zur Wahl, sowie verschiedene Lichtraumprofile. Der FLIRT hat einen hohen Niederfluranteil und ist barrierefrei über die Wagengänge begehbar.'}
                                    </Text>
                                </div>
                            </div>
                            <div className=" mt-8 sm:mt-0">
                                <img
                                    src={blok?.assetOne.filename}
                                    alt="Sizes"
                                />
                            </div>
                        </div>
                        <div className="pt-24 flex flex-col items-start gap-4 sm:gap-5 sm:flex-row ">
                            <div className="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-start shrink-0"></div>
                            <div>
                                <H4 textColor="white">
                                    {blok?.subtitleTwo ??
                                        'Kapazität à la carte'}
                                </H4>
                                <Text styles="mt-2 text-xl font-normal text-white sm:text-lg dark:text-gray-400">
                                    {blok?.textTwo ??
                                        '  Die Modularität der FLIRT-Typen ermöglicht flexible Passagierkapazitäten. Triebzüge von 2 bis 8 Teilen bieten Platz für 100 bis 500 Passagiere. Kleinere Formationen sind erweiterbar, um mehr Fahrgäste aufzunehmen, und bis zu vier Züge können in Vielfachtraktion verkehren.'}
                                </Text>
                            </div>
                        </div>
                        <div className="pt-14 flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                            <div className="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-start shrink-0"></div>
                            <div>
                                <img
                                    src={blok?.imageGIF.filename}
                                    alt="GIF Image train"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};

export default QualityFeatureGridExtended;
