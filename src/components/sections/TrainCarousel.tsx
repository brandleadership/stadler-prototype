import { motion } from "framer-motion";
import { useState } from "react";
import DoubleCard from "./DoubleCard";
import ContentWidth from "../layouts/ContentWidth";
import FullWidth from "../layouts/FullWidth";
import TeaserMobilitySolutions from "./TeaserMobilitySolutions";
import H3 from "../typography/H3";
import Text from "../typography/Text";
import Link from "../typography/Link";
import H2 from "../typography/H2";

const tabs = {
  categories: [
    {
      title: "Vollbahnen",
      image: "/trains-1-narrow.png",
      trains: [
        {
          img: "/images/train-models/mainline/smile.jpeg",
          category: "Highspeed",
          name: "SMILE",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "/images/train-models/mainline/kiss200.jpeg",
          category: "Intercity",
          name: "KISS",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "/images/train-models/mainline/flirt200.jpeg",
          category: "Intercity",
          name: "FLIRT",
          href: "/solutions/schienenfahrzeuge/product",
        },
        // {
        //   img: "/images/train-models/mainline/flirt160.jpeg",
        //   category: "Regional",
        //   name: "Flirt 160",
        //   href: "/solutions/schienenfahrzeuge/product",
        // },
        // {
        //   img: "/images/train-models/mainline/kiss160.jpeg",
        //   category: "Regional",
        //   name: "Kiss 160",
        //   href: "/solutions/schienenfahrzeuge/product",
        // },
        {
          img: "/images/train-models/mainline/wink.jpeg",
          category: "Regional",
          name: "WINK",
          href: "/solutions/schienenfahrzeuge/product",
        },
        // {
        //   img: "/images/train-models/mainline/gtw.jpeg",
        //   category: "Regional",
        //   name: "GTW",
        //   href: "/solutions/schienenfahrzeuge/product",
        // },
      ],
    },
    {
      title: "Urban",
      image: "/trains-narrow.png",
      trains: [
        {
          img: "/images/train-models/urban/tina.jpeg",
          category: "Highspeed",
          name: "TINA",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "/images/train-models/urban/tramlink.jpeg",
          category: "Tram",
          name: "TRAMLINK",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "/images/train-models/urban/tango.jpeg",
          category: "Intercity",
          name: "TANGO",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "/images/train-models/urban/variobahn.jpeg",
          category: "Regional",
          name: "VARIOBAHN",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "/images/train-models/urban/citylink.jpeg",
          category: "Regional",
          name: "CITYLINK",
          href: "/solutions/schienenfahrzeuge/product",
        },

        {
          img: "/images/train-models/urban/metro.jpeg",
          category: "Regional",
          name: "METRO",
          href: "/solutions/schienenfahrzeuge/product",
        },
        // {
        //   img: "/images/train-models/urban/metelitsa.jpeg",
        //   category: "Regional",
        //   name: "Metelitsa",
        //   href: "/solutions/schienenfahrzeuge/product",
        // },
      ],
    },
    {
      title: "Lokomotiven",
      image: "/trains-2-narrow.png",
      trains: [
        {
          img: "/images/train-models/locomotive/euro9000.jpeg",
          category: "Highspeed",
          name: "EURO9000",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "/images/train-models/locomotive/eurodual.jpeg",
          category: "EURODUAL",
          name: "EURODUAL",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "/images/train-models/locomotive/euro6000.jpeg",
          category: "Highspeed",
          name: "EURO6000",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "/images/train-models/locomotive/euro4001.jpeg",
          category: "Highspeed",
          name: "EURO4001",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "/images/train-models/locomotive/eurolight.jpeg",
          category: "Highspeed",
          name: "EUROLIGHT",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "/images/train-models/locomotive/sali.jpeg",
          category: "Highspeed",
          name: "SALI",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "/images/train-models/locomotive/central-cab.jpeg",
          category: "Highspeed",
          name: "CENTRAL CAB",
          href: "/solutions/schienenfahrzeuge/product",
        },
      ],
    },
    {
      title: "Tailor Made",
      image: "/trains-3-narrow.png",
      trains: [
        {
          img: "/images/train-models/tailormade/triebzug.jpeg",
          category: "Highspeed",
          name: "TRIEBZÜGE",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "/images/train-models/tailormade/zahnradbahn.jpeg",
          category: "Highspeed",
          name: "ZAHNRADBAHNEN",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "/images/train-models/tailormade/schlafwagen.jpeg",
          category: "Highspeed",
          name: "SCHLAFWAGEN",
          href: "/solutions/schienenfahrzeuge/product",
        },
        {
          img: "/images/train-models/tailormade/rangierlok.jpeg",
          category: "Highspeed",
          name: "LOKOMOTIVEN",
          href: "/solutions/schienenfahrzeuge/product",
        },
      ],
    },
  ],
};

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: 100 },
};

const plusAnimation = {
  open: { transform: "rotate(45deg)" },
  close: { transform: "rotate(0deg)" },
};

const TrainCarousel = (props?: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <div className="pb-5 lg:pb-24">
      <section className="bg-stadlergradient ">
        <TeaserMobilitySolutions></TeaserMobilitySolutions>
        <ContentWidth>
          <div className="col-span-12 lg:col-span-6 lg:ml-8 text-white">
            <H2 resetStyles={true} styles="mb-4 text-4xl font-bold">
              Schienenfahrzeuge
            </H2>
            <Text>
              Höchste Qualität und Zuverlässigkeit sind bei unseren
              Schienenfahrzeugen Standard. Alles andere wird projekt-spezifisch
              massgeschneidert.
            </Text>
            <a className="flex mt-4" href="/solutions/schienenfahrzeuge">
              <img
                className="w-5 h-5"
                src="/icons/ohne-box/arrow_forward_FILL0_wght400_GRAD0_opsz24_white.svg"
                alt=""
              />
            </a>
          </div>
        </ContentWidth>
        <FullWidth>
          <img
            src={tabs.categories[selectedCategory].image}
            className="col-span-12 w-full"
          />
        </FullWidth>
        <ContentWidth>
          <div className="col-span-8 col-start-4 col-end-10 grid grid-cols-1 my-6">
            <div className="flex flex-row items-start justify-center">
              {tabs.categories.map((item, key) => (
                <div
                  key={item.title}
                  className={`${
                    selectedCategory === key
                      ? "text-white"
                      : "text-greyBrighten-600"
                  } font-semibold text-center px-4 flex flex-col items-center cursor-pointer`}
                  onClick={() => (
                    setIsOpen(
                      selectedCategory === key && isOpen === false
                        ? true
                        : false
                    ),
                    setSelectedCategory(key)
                  )}
                >
                  <p>{item.title}</p>
                  <motion.img
                    className={`${
                      selectedCategory === key ? "w-4" : "w-0"
                    } mt-2`}
                    src="/icons/plus-light.svg"
                    animate={
                      selectedCategory === key && isOpen ? "open" : "close"
                    }
                    variants={plusAnimation}
                  />
                </div>
              ))}
            </div>
          </div>
        </ContentWidth>
        <ContentWidth>
          <motion.div
            className={`${
              isOpen ? "grid" : "hidden"
            } col-span-12 lg:grid-cols-4 lg:grid-rows-2 gap-2`}
            animate={isOpen ? "open" : "closed"}
            variants={variants}
          >
            {tabs.categories[selectedCategory].trains.map((item) => (
              <div
                key={item.name}
                className="bg-white text-black flexflex-row lg:flex-col"
              >
                <img className="w-full" src={item.img} />
                <div className="p-6">
                  <small className="text-greySolid-600 flex mb-2">
                    {item.category}
                  </small>
                  <div className="flex flex-row items-center justify-between">
                    <H3 styles="mb-0">{item.name}</H3>
                    <a href={item.href}>
                      <img
                        className="w-5 h-5"
                        src="/icons/ohne-box/arrow_forward_FILL0_wght400_GRAD0_opsz24_blue.svg"
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div>
            ))}
            {/* <div className="bg-transparent text-white border-solid border-2 border-white grid p-6">
              <div className="self-center">
                <small>Übersicht</small>
                <H3>{tabs.categories[selectedCategory].title}</H3>
              </div>
              <div className="justify-self-end place-self-end">
                <a href="#">
                  <img className="w-5" src="/icons/arrow-white.svg" />
                </a>
              </div>
            </div> */}
          </motion.div>
        </ContentWidth>
        <DoubleCard />
      </section>
    </div>
  );
};

export default TrainCarousel;
