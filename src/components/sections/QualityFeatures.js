import H2 from '../../components/typography/H2';
import H4 from '../../components/typography/H4';
import Text from '../typography/Text';
import ContentWidth from '../layouts/ContentWidth';

const QualityFeatures = ({ features, mainTitle }) => {
    return (
        <>
            <section className="py-24 bg-stadlergradient">
                <ContentWidth>
                    <div className="col-span-12 max-w-full mx-auto">
                        <H2 styles="text-white">{mainTitle}</H2>
                        <div className="mt-8 lg:mt-16">
                            <div className="grid grid-cols-1 gap-16 sm:gap-12 lg:grid-cols-2 lg:gap-24">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-start gap-4 sm:gap-5 sm:flex-row"
                                    >
                                        <div className="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-start shrink-0">
                                            {feature?.svg}
                                        </div>
                                        <div>
                                            <H4 textColor="white">
                                                {feature?.title}
                                            </H4>
                                            <Text styles="mt-2 text-xl font-normal text-white sm:text-lg dark:text-gray-400">
                                                {feature?.text}
                                            </Text>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="pt-24 grid grid-cols-1 gap-16 sm:gap-12 lg:grid-cols-2 lg:gap-24 ">
                                <div className=" flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                                    <div className="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-start shrink-0"></div>
                                    <div>
                                        <H4 textColor="white">
                                            Flexibles Kastensystem
                                        </H4>
                                        <Text styles="mt-2 text-xl font-normal text-white sm:text-lg dark:text-gray-400">
                                            Es stehen zwei Wagenkastenlängen und
                                            -breiten zur Wahl, sowie
                                            verschiedene Lichtraumprofile. Der
                                            FLIRT hat einen hohen
                                            Niederfluranteil und ist
                                            barrierefrei über die Wagengänge
                                            begehbar.
                                        </Text>
                                    </div>
                                </div>
                                <div className=" mt-8 sm:mt-0">
                                    <img
                                        src="/stadler-flit-kompositionen-sizes.png"
                                        alt="Sizes"
                                    />
                                </div>
                            </div>
                            <div className="pt-24 flex flex-col items-start gap-4 sm:gap-5 sm:flex-row">
                                <div className="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-start shrink-0"></div>
                                <div>
                                    <img
                                        src="/stadler-flit-kompositionen-1-8-Wagen.gif"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="pt-24 flex flex-col items-start gap-4 sm:gap-5 sm:flex-row ">
                                <div className="w-16 h-16 lg:w-24 lg:h-24 flex items-center justify-start shrink-0"></div>
                                <div>
                                    <H4 textColor="white">
                                        Kapazität à la carte
                                    </H4>
                                    <Text styles="mt-2 text-xl font-normal text-white sm:text-lg dark:text-gray-400">
                                        Die Modularität der FLIRT-Typen
                                        ermöglicht flexible
                                        Passagierkapazitäten. Triebzüge von 2
                                        bis 8 Teilen bieten Platz für 100 bis
                                        500 Passagiere. Kleinere Formationen
                                        sind erweiterbar, um mehr Fahrgäste
                                        aufzunehmen, und bis zu vier Züge können
                                        in Vielfachtraktion verkehren.
                                    </Text>
                                </div>
                            </div>
                        </div>
                    </div>
                </ContentWidth>
            </section>
        </>
    );
};

export default QualityFeatures;
