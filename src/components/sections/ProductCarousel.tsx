import H3 from "../typography/H3";
import Text from "../typography/Text";
import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const data = [
  {
    id: 1,
    image: "/image1product.jpg",
    titleH3: "1Ergonomie am Arbeitsplatz sorgt für Sicherheit",
    text:
      "Für optimale Leistung setzen wir bei Stadler auf ergonomisch gestaltete Führerkabinen. Ein drehbarer, verstellbarer Sessel, gut erreichbare Funktionselemente und klare Sichtverhältnisse sind nicht nur für den Komfort des Zugführers essentiell, sondern tragen auch entscheidend zur Sicherheit der Fahrgäste bei. Unsere Detailorientierung garantiert somit höchste Sicherheitsstandards für alle.",
  },
  {
    id: 2,
    image: "/hero-full-service.jpg",
    titleH3: "2Ergonomie am Arbeitsplatz sorgt für Sicherheit",
    text:
      "2Für optimale Leistung setzen wir bei Stadler auf ergonomisch gestaltete Führerkabinen. Ein drehbarer, verstellbarer Sessel, gut erreichbare Funktionselemente und klare Sichtverhältnisse sind nicht nur für den Komfort des Zugführers essentiell, sondern tragen auch entscheidend zur Sicherheit der Fahrgäste bei.",
  },
  {
    id: 3,
    image: "/hero-snow-train.jpg",
    titleH3: "3Ergonomie am Arbeitsplatz sorgt für Sicherheit",
    text:
      "3Für optimale Leistung setzen wir bei Stadler auf ergonomisch gestaltete Führerkabinen. Ein drehbarer, verstellbarer Sessel, gut erreichbare Funktionselemente und klare Sichtverhältnisse sind nicht nur für den Komfort des Zugführers essentiell,",
  },
];
const variants = {
  enter: (direction: number) => {
    return {
      // x: direction > 0 ? 1000 : -1000,
      scale: 0.9,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    // x: 0,
    scale: 1,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      scale: 0.9,
      // x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const ProductCarousel = () => {
  const [[page, direction], setPage] = useState([0, 0]);

  const imageIndex = wrap(0, data.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <>
      <div className="bg-primarySolid-50 w-full mx-auto min-h-[120vh] md:min-h-[130vh] lg:min-h-[690px] overflow-hidden relative flex justify-center items-center">
        <AnimatePresence initial={false}>
          <motion.div
            className="grid grid-cols-3 items-center justify-center absolute top-0 max-w-full"
            key={imageIndex}
            variants={variants}
          >
            <img
              className="min-h-[690px] grid col-span-2 object-cover w-full h-full"
              src={data[imageIndex].image}
              alt="Carousel Image"
            />
            <div className="grid col-span-1 justify-start items-start grid-rows-4 grid-flow-col gap-4 p-16 h-full">
              <div className="row-span-3 pt-10">
                <H3>{data[imageIndex].titleH3}</H3>
                <Text styles="mb-6 mt-8 md:mb-6 mt-4 md:mt-8">
                  {data[imageIndex].text}
                </Text>
              </div>
              <div className="row-span-1 grid grid-flow-col justify-start content-end">
                <button
                  className="w-10 h-10 md:w-10 md:h-10"
                  onClick={() => paginate(-1)}
                  disabled={page === 0}
                >
                  <img
                    className="w-5 h-5"
                    src="/icons/ohne-box/chevron_left_FILL0_wght400_GRAD0_opsz24_blue.svg"
                    alt=""
                  />
                </button>
                <button
                  className="w-10 h-10 md:w-10 md:h-10"
                  onClick={() => paginate(1)}
                  disabled={page === data.length - 1}
                >
                  <img
                    className="w-5 h-5"
                    src="/icons/ohne-box/chevron_right_FILL0_wght400_GRAD0_opsz24_blue.svg"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default ProductCarousel;
