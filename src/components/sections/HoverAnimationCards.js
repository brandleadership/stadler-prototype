import { useState } from 'react';
import Link from 'next/link';
import ContentWidth from '../layouts/ContentWidth';
import Text from '../typography/Text';
import H3 from '../typography/H3';
import H2 from '../typography/H2';

const HoverAnimationCards = ({ title, lead, list }) => {
    return (
        <section className="bg-white py-20 z-[10000]">
            <ContentWidth>
                <div className="col-span-12 w-full">
                    <div className="text-start mb-8">
                        <H2>{title}</H2>
                        <Text>{lead}</Text>
                    </div>
                    <div className="w-full mx-auto justify-center items-center grid grid-cols-2 gap-x-4 gap-y-4 lg:max-w-none lg:grid-cols-5">
                        {list.map((item) => (
                            <div
                                key={item.title}
                                className="relative overflow-hidden group max-w-sm bg-white border border-gray-200 "
                            >
                                <a className="" href={item.href}>
                                    <img
                                        className="object-contain max-h-auto w-full"
                                        src={item.image}
                                        alt={item.title}
                                    />
                                </a>
                                <a
                                    href={item.href}
                                    className="transition-all absolute inset-0 grid w-full h-1/2 hover:h-full top-2/3 hover:top-0 items-start justify-center bg-gradient-to-b from-transparent to-black/60 hover:from-black/60 hover:to-black/60 pt-5 px-5"
                                >
                                    <H3 styles="font-normal text-white">
                                        {item.title}
                                    </H3>
                                </a>
                            </div>
                        ))}
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};

export default HoverAnimationCards;
