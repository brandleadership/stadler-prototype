'use client';
import { storyblokEditable, StoryblokComponent } from '@storyblok/react/rsc';
import ContentWidth from '../layouts/ContentWidth';
import H2 from '../typography/H2';
import H4 from '../typography/H4';
import Text from '../typography/Text';

const QualityFeatureGridExtended = ({ blok }) => {
    return (
        <section
            className="bg-stadlergradient py-8 lg:py-24"
            {...storyblokEditable(blok)}
        >
            <ContentWidth>
                <div className="col-span-12 max-w-full">
                    <div className="item-start text-white">
                        <H2>{blok?.title}</H2>
                    </div>
                    <div className="mt-8 lg:mt-16">
                        <div
                            className="grid grid-cols-1 gap-10 sm:gap-12 lg:grid-cols-2 lg:gap-24"
                            {...storyblokEditable(blok)}
                        >
                            {blok.feature_item.map((nestedBlok) => (
                                <StoryblokComponent
                                    blok={nestedBlok}
                                    key={nestedBlok?._uid}
                                />
                            ))}
                        </div>
                        <div className="grid grid-cols-1 gap-4 pt-12 lg:pt-24 md:grid-cols-2 md:gap-12 lg:gap-24">
                            <div className="flex flex-col items-start gap-4 sm:flex-row sm:gap-5">
                                {/* <div className="flex h-16 w-16 shrink-0 items-center justify-start lg:h-24 lg:w-24"></div> */}
                                <div>
                                    <div className="text-white">
                                        <H4>
                                            {blok?.subtitleOne ??
                                                'Flexibles Kastensystem'}
                                        </H4>
                                    </div>
                                    <div className="mt-2 text-xl text-white sm:text-lg">
                                        <Text>
                                            {blok?.textOne ??
                                                '  Es stehen zwei Wagenkastenlängen und -breiten zur Wahl, sowie verschiedene Lichtraumprofile. Der FLIRT hat einen hohen Niederfluranteil und ist barrierefrei über die Wagengänge begehbar.'}
                                        </Text>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-8 sm:mt-0">
                                <img
                                    src={blok?.assetOne.filename}
                                    alt={
                                        blok?.assetOne.filename.alt ??
                                        'Quality Feature Train image'
                                    }
                                />
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-4 pt-12 lg:pt-24 sm:flex-row sm:gap-5">
                            {/* <div className="flex h-16 w-16 shrink-0 items-center justify-start lg:h-24 lg:w-24"></div> */}
                            <div>
                                <div className="text-white">
                                    <H4>
                                        {blok?.subtitleTwo ??
                                            'Kapazität à la carte'}
                                    </H4>
                                </div>
                                <div className="mt-2 text-xl font-normal text-white sm:text-lg">
                                    <Text>
                                        {blok?.textTwo ??
                                            '  Die Modularität der FLIRT-Typen ermöglicht flexible Passagierkapazitäten. Triebzüge von 2 bis 8 Teilen bieten Platz für 100 bis 500 Passagiere. Kleinere Formationen sind erweiterbar, um mehr Fahrgäste aufzunehmen, und bis zu vier Züge können in Vielfachtraktion verkehren.'}
                                    </Text>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-4 pt-4 sm:flex-row sm:gap-5">
                            {/* <div className="flex h-16 w-16 shrink-0 items-center justify-start lg:h-24 lg:w-24"></div> */}
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
