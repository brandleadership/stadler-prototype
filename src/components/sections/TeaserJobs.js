'use client';

import ButtonPrimary from '../elements/ButtonPrimary';
import H2 from '../typography/H2';

export default function Jobs() {
    return (
        <section className="bg-white dark:bg-gray-900 antialiased">
            <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
                <div className="flex flex-col gap-8 sm:gap-12 xl:gap-16 xl:flex-row xl:items-start">
                    <div>
                        <H2>Unsere Mitarbeiter machen uns stolz</H2>
                        <p className="mt-4 text-base font-normal text-black sm:text-xl dark:text-gray-400">
                            Wir konzentrieren uns darauf, wie Technologie und
                            Innovation langfristigen Wert schaffen können.
                        </p>
                        <p className="mt-4 text-base font-normal text-black sm:text-xl dark:text-gray-400">
                            Sie haben die Möglichkeit, mit einem Team
                            talentierter Fachleute zusammenzuarbeiten,
                            anspruchsvolle Probleme anzugehen und auf neue und
                            kreative Weise zu denken.
                        </p>
                        <div className="mt-8">
                            <ButtonPrimary
                                position="left"
                                buttonText="Offene Positionen"
                            />
                        </div>
                    </div>

                    <div className="grid w-full grid-cols-1 gap-4 xl:max-w-3xl shrink-0 sm:grid-cols-2 md:grid-cols-3">
                        <div className="relative overflow-hidden rounded-lg group">
                            <img
                                className="object-cover h-80 scale-100 ease-in duration-300 group-hover:scale-125"
                                src="https://www.stadlerrail.com/media/img/c/anlagenbauer_berufserfahrene.jpg"
                                alt=""
                            />
                            <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                                <div className="text-center">
                                    <p className="text-xl font-bold text-white">
                                        Monteur:in
                                    </p>
                                    <p className="text-base font-medium text-gray-300">
                                        Produktion
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-lg group">
                            <img
                                className="object-cover h-80 scale-100 ease-in duration-300 group-hover:scale-125"
                                src="https://www.stadlerrail.com/media/img/c/schweisser_berufserfahrene.jpg"
                                alt=""
                            />
                            <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                                <div className="text-center">
                                    <p className="text-xl font-bold text-white">
                                        Schweisser
                                    </p>
                                    <p className="text-base font-medium text-gray-300">
                                        Produktion
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-lg group">
                            <img
                                className="object-cover h-80 scale-100 ease-in duration-300 group-hover:scale-125"
                                src="https://www.stadlerrail.com/media/img/c/bild_075.jpg"
                                alt=""
                            />
                            <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                                <div className="text-center">
                                    <p className="text-xl font-bold text-white">
                                        Entwicklungsingenieur
                                    </p>
                                    <p className="text-base font-medium text-gray-300">
                                        Engineering
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-lg group">
                            <img
                                className="object-cover h-80 scale-100 ease-in duration-300 group-hover:scale-125"
                                src="https://www.stadlerrail.com/media/img/c/interne_transporte_berufserfahrene.jpg"
                                alt=""
                            />
                            <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                                <div className="text-center">
                                    <p className="text-xl font-bold text-white">
                                        Logistikmitarbeiter
                                    </p>
                                    <p className="text-base font-medium text-gray-300">
                                        Logistik
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-lg group">
                            <img
                                className="object-cover h-80 scale-100 ease-in duration-300 group-hover:scale-125"
                                src="https://www.stadlerrail.com/media/img/c/elektro_vormontage_berufserfahrene.jpg"
                                alt=""
                            />
                            <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                                <div className="text-center">
                                    <p className="text-xl font-bold text-white">
                                        Elektro Vormontage
                                    </p>
                                    <p className="text-base font-medium text-gray-300">
                                        Produktion
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="relative overflow-hidden rounded-lg group">
                            <img
                                className="object-cover h-80 scale-100 ease-in duration-300 group-hover:scale-125"
                                src="https://www.stadlerrail.com/media/img/c/schreiner_berufserfahrene.jpg"
                                alt=""
                            />
                            <div className="absolute inset-0 grid items-end justify-center p-4 bg-gradient-to-b from-transparent to-black/60">
                                <div className="text-center">
                                    <p className="text-xl font-bold text-white">
                                        Schreiner
                                    </p>
                                    <p className="text-base font-medium text-gray-300">
                                        Produktion
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
