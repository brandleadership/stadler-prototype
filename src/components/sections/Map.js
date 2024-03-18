import { storyblokEditable } from '@storyblok/react/rsc';
import ButtonPrimary from '../elements/ButtonPrimary';
import MapTextTitle from './MapTextTitle';
import FullWidth from '../layouts/FullWidth';
import ContentWidth from '../layouts/ContentWidth';
import Stats from './Stats';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

const countries = [
    'Schweiz',
    'Deutschland',
    'Spanien',
    'Polen',
    'Ungarn',
    'USA',
    'Weissrussland',
    'Österreich',
    'Kazachstan',
    'Tschechien',
    'Vereinigtes Königsreich',
    'Schweden',
    'Norwegen',
];

export default function Map({ blok }) {
    return (
        <section {...storyblokEditable(blok)}>
            <FullWidth>
                <div className="col-span-12 w-full bg-white py-24">
                    <MapTextTitle />
                    {/* <Stats data={statsData} backgroundColor="bg-white" /> */}
                    <ContentWidth>
                        <div className="mt-16 mb-24 col-span-12 max-w-full  bg-white">
                            <div className="px-6 lg:px-8">
                                <dl className="grid grid-cols-1 gap-x-8 gap-y-12 lg:gap-y-24 text-center lg:grid-cols-4">
                                    <div className="mx-auto flex max-w-[250px] flex-col gap-y-4">
                                        <dt className="text-xl leading-7 text-primary">
                                            Produktionsstandorte
                                        </dt>
                                        <dd className="order-first text-6xl font-bold tracking-tight text-black sm:text-5xl">
                                            <CountUp
                                                end={7}
                                                suffix=""
                                                enableScrollSpy
                                            />
                                        </dd>
                                    </div>

                                    <div className="mx-auto flex max-w-[250px] flex-col gap-y-4">
                                        <dt className="text-xl leading-7 text-primary">
                                            Komponentenwerke
                                        </dt>
                                        <dd className="order-first text-6xl font-bold tracking-tight text-black sm:text-5xl">
                                            <CountUp
                                                end={7}
                                                suffix=""
                                                enableScrollSpy
                                            />
                                        </dd>
                                    </div>

                                    <div className="mx-auto flex max-w-[250px] flex-col gap-y-4">
                                        <dt className="text-xl leading-7 text-primary">
                                            Signalling-Kompetenzcenter
                                        </dt>
                                        <dd className="order-first text-6xl font-bold tracking-tight text-black sm:text-5xl">
                                            <CountUp
                                                end={5}
                                                suffix=""
                                                enableScrollSpy
                                            />
                                        </dd>
                                    </div>

                                    <div className="mx-auto flex max-w-[250px] flex-col gap-y-4">
                                        <dt className="text-xl leading-7 text-primary">
                                            Service-Standorte
                                        </dt>
                                        <dd className="order-first text-6xl font-bold tracking-tight text-black sm:text-5xl">
                                            <CountUp
                                                end={80}
                                                suffix=""
                                                enableScrollSpy
                                            />
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </ContentWidth>
                    <div className="relative flex flex-col-reverse lg:flex-none">
                        <div className="pl-6 lg:pl-20 py-8 relative w-full lg:w-[24%] z-10">
                            <div className="relative">
                                <ul className="text-primary grid grid-cols-2 lg:grid-cols-1 ">
                                    {countries.map((country, index) => (
                                        <li
                                            className="mb-3 whitespace-no-wrap mr-16 lg:mr-0"
                                            key={index}
                                        >
                                            <a href="#">{country}</a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="mt-8">
                                <ButtonPrimary
                                    position="left"
                                    href="/standorte"
                                >
                                    Alle Standorte
                                </ButtonPrimary>
                            </div>
                        </div>
                        <div className="pl-6 static lg:absolute top-0 w-[84%] left-[16%] h-full">
                            <img
                                className="w-full h-auto"
                                src="/stadler-world-map-home.svg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </FullWidth>
        </section>
    );
}
