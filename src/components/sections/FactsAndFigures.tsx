import H2 from "../typography/H2";

import CountUp from "react-countup";
import ContentWidth from "../layouts/ContentWidth";

interface StatsProps {
  data1: {
    text?: string;
    start?: number;
    end: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    separator?: string;
    decimals?: number;
    decimal?: string;
  }[];
  data2: {
    text?: string;
    start?: number;
    end: number;
    suffix?: string;
    prefix?: string;
    duration?: number;
    separator?: string;
    decimals?: number;
    decimal?: string;
  }[];
  backgroundColor?: string;
  title?: string;
  showTwoRows?: boolean;
}


const FactsAndFigures: React.FC<StatsProps> = ({ data1, data2, title, showTwoRows = true, backgroundColor }) => {
  const renderData = showTwoRows ? [...data1, ...data2] : data1;
  return (
    <section className="bg-primarySolid-50 dark:bg-gray-900 antialiased">
      <ContentWidth>
        <div className="col-span-12 px-4 py-8 mx-auto lg:px-20 sm:py-16 lg:py-20">
          <div className="text-center mb-4">
            <H2>{title}</H2>
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
                      className="mx-auto flex max-w-[400]  flex-col gap-y-2"
                      key={index}
                    >
                      <dt className="text-xl leading-7 text-black">
                        {stat.text}
                      </dt>
                      <dd className="order-first text-6xl font-bold tracking-tight text-primary sm:text-5xl">
                        <CountUp
                          start={stat.start}
                          end={stat.end}
                          suffix={stat.suffix}
                          prefix={stat.prefix}
                          duration={stat.duration}
                          separator={stat.separator}
                          decimals={stat.decimals}
                          decimal={stat.decimal}
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
