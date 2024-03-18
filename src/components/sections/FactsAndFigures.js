import { storyblokEditable } from '@storyblok/react/rsc';
import H2 from '../typography/H2';
import CountUp from 'react-countup';
import ContentWidth from '../layouts/ContentWidth';

const FactsAndFigures = ({
    data1,
    data2,
    title,
    showTwoRows = true,
    backgroundColor,
    blok,
}) => {
    const dataArray1 = Array.isArray(data1) ? data1 : [];
    const dataArray2 = Array.isArray(data2) ? data2 : [];
    const renderData = showTwoRows
        ? [...dataArray1, ...dataArray2]
        : dataArray1;
    return (
        <section
            {...storyblokEditable(blok)}
            className="bg-primarySolid-50 dark:bg-gray-900 py-24"
        >
            <ContentWidth>
                <div className="col-span-12 my-auto  ">
                    <div className="text-center mb-4">
                        <H2>{blok?.title}</H2>
                    </div>
                    <div className="first-level">
                        {/* <div className="border-b border-black border-solid">
            <H3 titleH3="Wirtschaftliche Kennzahlen"></H3>
          </div> */}
                        <div className="bg-secondaryBgcGray py-8 sm:py-10">
                            <div className="mx-auto max-w-full">
                                <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
                                    {renderData.map((stat, index) => (
                                        <div
                                            className="flex flex-col gap-y-2 col-span-1 max-w-[400px]"
                                            key={index}
                                        >
                                            <dt className="text-xl leading-7 text-black">
                                                {stat?.text}
                                            </dt>
                                            <dd className="order-first text-6xl font-bold tracking-tight text-primary sm:text-5xl">
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
