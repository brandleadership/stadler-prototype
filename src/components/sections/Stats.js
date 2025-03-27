import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import ContentWidth from '../layouts/ContentWidth';

const Stats = ({ data, backgroundColor }) => {
    return (
        <ContentWidth>
            <motion.div className="" />
            <div
                className={`col-span-12 mb-24 mt-16 max-w-full ${backgroundColor}`}
            >
                <div className="px-6 lg:px-8">
                    <dl className="grid grid-cols-1 gap-x-8 gap-y-12 text-center lg:grid-cols-4 lg:gap-y-24">
                        {data.map((stat, index) => (
                            <div
                                className="mx-auto flex max-w-[250px] flex-col gap-y-4"
                                key={index}
                            >
                                <dt className="text-base leading-7 text-primary lg:text-xl">
                                    {stat.text}
                                </dt>
                                <dd className="order-first text-3xl font-bold tracking-tight text-black sm:text-5xl lg:text-6xl">
                                    <CountUp
                                        end={stat.end}
                                        suffix={stat.suffix}
                                        prefix={stat.prefix}
                                        enableScrollSpy
                                    />
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </ContentWidth>
    );
};

export default Stats;
