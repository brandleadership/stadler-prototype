'use client';
import { storyblokEditable } from '@storyblok/react/rsc';
import H2 from '../typography/H2';
import CountUp from 'react-countup';
import ContentWidth from '../layouts/ContentWidth';

const FactsAndFigures = ({ data1, data2, showTwoRows = true, blok }) => {
    const dataArray1 = Array.isArray(data1) ? data1 : [];
    const dataArray2 = Array.isArray(data2) ? data2 : [];
    const renderData = showTwoRows
        ? [...dataArray1, ...dataArray2]
        : dataArray1;
    return (
        <section
            {...storyblokEditable(blok)}
            className="bg-primarySolid-50 py-8 lg:py-24"
        >
            <ContentWidth>
                <div className="col-span-12 my-auto">
                    <div className="mb-4 text-center">
                        <H2>{blok?.title}</H2>
                    </div>
                    <div className="first-level">
                        <div className="bg-secondaryBgcGray pt-8 sm:pt-10">
                            <div className="mx-auto max-w-full">
                                <dl className="grid grid-cols-1 gap-x-8 gap-y-10 text-center lg:grid-cols-3 lg:gap-y-16">
                                    {renderData.map((stat, index) => (
                                        <div
                                            className="col-span-1 flex max-w-[400px] flex-col gap-y-2"
                                            key={index}
                                        >
                                            <dt className="text-base leading-7 text-black lg:text-xl">
                                                {stat?.text}
                                            </dt>
                                            <dd className="order-first text-3xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                                                <CountUp
                                                    start={stat?.start ?? 0}
                                                    end={stat?.end ?? ''}
                                                    suffix={stat?.suffix ?? ' '}
                                                    prefix={stat?.prefix ?? ' '}
                                                    duration={
                                                        stat?.duration ?? 2
                                                    }
                                                    separator={
                                                        stat?.separator ?? ' '
                                                    }
                                                    decimals={
                                                        stat?.decimals ?? 0
                                                    }
                                                    decimal={
                                                        stat?.decimal ?? "'"
                                                    }
                                                    enableScrollSpy
                                                ></CountUp>
                                            </dd>
                                        </div>
                                    ))}
                                </dl>
                            </div>
                        </div>
                    </div>
                </div>
            </ContentWidth>
        </section>
    );
};

export default FactsAndFigures;
