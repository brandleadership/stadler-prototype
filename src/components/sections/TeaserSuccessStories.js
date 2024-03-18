import SmallWidth from '../layouts/SmallWidth';
import H2 from '../typography/H2';

export default function TeaserSuccessStories() {
    return (
        <section className="bg-white antialiased dark:bg-gray-900">
            <SmallWidth>
                <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-16 lg:px-6 lg:py-24">
                    <div className="mx-auto max-w-3xl text-center">
                        <H2>Unsere Mitarbeiter machen uns aus</H2>
                        <p className="mt-4 text-base font-normal text-black dark:text-gray-400 sm:text-xl">
                            Sie haben die Möglichkeit, mit einem Team
                            talentierter Fachleute zusammenzuarbeiten,
                            anspruchsvolle Probleme anzugehen und auf neue und
                            kreative Weise zu denken.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:mt-16 xl:grid-cols-3">
                        <div className="group relative overflow-hidden rounded-lg">
                            <img
                                className="object-cover h-80 scale-100 ease-in duration-300 group-hover:scale-125"
                                src="https://www.stadlerrail.com/media/img/c/elektro_vormontage_berufserfahrene.jpg"
                                alt=""
                            />

                            <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
                                <div className="text-center">
                                    <p className="text-xl font-bold text-white">
                                        Robert Meier
                                    </p>
                                    <p className="text-base font-medium text-gray-300">
                                        30 Jahre bei Stadler
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-lg">
                            <img
                                className="object-cover h-80 scale-100 ease-in duration-300 group-hover:scale-125"
                                src="https://www.stadlerrail.com/media/img/c/produktionslogistik_studenten.jpg"
                                alt=""
                            />
                            <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
                                <div className="text-center">
                                    <p className="text-xl font-bold text-white">
                                        Mario Steiner
                                    </p>
                                    <p className="text-base font-medium text-gray-300">
                                        10 Jahre bei Stadler
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="group relative overflow-hidden rounded-lg">
                            <img
                                className="object-cover h-80 scale-100 ease-in duration-300 group-hover:scale-125"
                                src="https://www.stadlerrail.com/media/img/c/schreiner_berufserfahrene.jpg"
                                alt=""
                            />
                            <div className="absolute inset-0 grid items-end justify-center bg-gradient-to-b from-transparent to-black/60 p-4">
                                <div className="text-center">
                                    <p className="text-xl font-bold text-white">
                                        Kevin Kiehl
                                    </p>
                                    <p className="text-base font-medium text-gray-300">
                                        5 Jahre bei Stadler
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SmallWidth>
        </section>
    );
}
