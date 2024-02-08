"use client"

import H3 from "../typography/H3";
import Link from "next/link";
import Text from "../typography/Text";
import H2 from "../typography/H2";
import { MotionConfig, motion, MotionProps } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import FullWidth from "../layouts/FullWidth";
import ButtonPrimary from "../elements/ButtonPrimary";
import ContentWidth from "../layouts/ContentWidth";

interface Cards {
  title: string;
  text: string;
  img: string;
  date?: string;
}

interface TestimonialMotionProps extends MotionProps {
  className?: string;
  ref?: any;
}

interface CarouselProps {
  items: Cards[];
  carouselTitle: string;
  showButton?: boolean;
  showDate?: boolean;
  h2Styles?: string;
}

const TestimonialMotionDiv: React.FC<TestimonialMotionProps> = motion.div;

const HomePageCaroucel: React.FC<CarouselProps> = ({
  items,
  carouselTitle,
  h2Styles,
  showButton = true,
}) => {
  const [current, setCurrent] = useState(0);
  const [startX, setStartX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [showDate, setShowDate] = useState(true);

  //Show dots on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const onPrevClick = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const onNextClick = () => {
    if (current < items.length - 1) {
      setCurrent(current + 1);
    }
  };

  return (
    <section className="pb-5 lg:pb-24 bg-white overflow-hidden">
      <ContentWidth>
        <div className="col-span-12">
          <div className="relative">
            <div className="lg:pl-20 2xl:pl-0 mb-10">
              <H2 styles={h2Styles}>{carouselTitle}</H2>
            </div>
            {isMobile && (
              <div className="absolute top-[60px] left-[50%] transform translate-x-[-50%] translate-y-[-50%]  z-10 ">
                <div className="flex gap-3 px-3 py-2 rounded-full opacity-80">
                  {items.map((_, idx) => (
                    <button key={idx} onClick={() => setCurrent(idx)}>
                      <div
                        className={` w-8 h-1 ${
                          idx === current ? "bg-primary" : "bg-greyDarken-100"
                        }`}
                      ></div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
          <div className="flex lg:pl-20 flex-col items-center justify-between 2xl:pl-0">
            <MotionConfig
              transition={{ duration: 0.7, ease: [0.32, 0.72, 0, 1] }}
            >
              <div className="relative w-full max-w-[100%] flex items-center">
                <motion.div className="flex items-stretch gap-8 flex-nowrap overflow-hidden  ml-[-2px] pl-[2px] my-[-32px] py-[32px] pr-[2px] mr-[-2px]">
                  {items.map((card, idx) => (
                    <TestimonialMotionDiv
                      key={idx}
                      className="min-w-[100%] relative lg:min-w-[43%] md:flex-row  testimonial-motion-div shadow-md shadow-greyDarken-300"
                      animate={{
                        translateX: `calc(-${current * 100}% - ${
                          current * 2
                        }rem)`,

                        opacity:
                          idx === current || idx === current + 1 ? 1 : 0.3,
                      }}
                    >
                      <img
                        className="w-full max-h-[430px] object-cover"
                        src={card.img}
                        alt=""
                      />

                      <div className="p-5 ">
                        <div className="mb-4">
                          <H3>{card.title}</H3>
                        </div>
                        {showDate && (
                          <div className="mb-4 text-primary">
                            <p>{card.date}</p>
                          </div>
                        )}

                        <div className="mb-14">
                          <Text>{card.text}</Text>
                        </div>
                        <Link
                          href="#"
                          className="absolute bottom-[20px] left-[22px] inline-flex items-center py-2 text-sm font-medium text-center"
                        >
                          <img
                            className="w-5 h-5"
                            src="/icons/ohne-box/arrow_forward_FILL0_wght400_GRAD0_opsz24_blue.svg"
                            alt=""
                          />
                        </Link>
                      </div>
                    </TestimonialMotionDiv>
                  ))}
                </motion.div>
              </div>
            </MotionConfig>
          </div>
          <div className="relative lg:pl-20  flex flex-row w-full mt-8 justify-beetween items-center ">
            <div className=" flex flex-row gap-4 justify-center items-center w-full">
              <motion.div
                className=" flex flex-row gap-4 z-10 "
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <button onClick={onPrevClick}>
                  <img
                    className="w-5 h-5"
                    src="/icons/ohne-box/chevron_left_FILL0_wght400_GRAD0_opsz24_blue.svg"
                    alt=""
                  />
                </button>
                <button onClick={onNextClick}>
                  <img
                    className="w-5 h-5"
                    src="/icons/ohne-box/chevron_right_FILL0_wght400_GRAD0_opsz24_blue.svg"
                    alt=""
                  />
                </button>
              </motion.div>
            </div>
          </div>
          {showButton && (
            <div className="mt-10 lg:pl-20 2xl:pl-0">
              <ButtonPrimary position="left">
                Alle News{" "}
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_5650_6261)">
                    <path
                      d="M0.500001 8.33153L11.9366 8.33153L8.15071 13.5408L9.41267 14.5176L14.5 7.51758L9.41267 0.517578L8.15072 1.49432L11.9366 6.70362L0.500001 6.70362L0.500001 8.33153Z"
                      fill="white"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5650_6261">
                      <rect
                        width="14"
                        height="14"
                        fill="white"
                        transform="translate(0.5 0.517578)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </ButtonPrimary>
            </div>
          )}
        </div>
      </ContentWidth>
    </section>
  );
};

export default HomePageCaroucel;
