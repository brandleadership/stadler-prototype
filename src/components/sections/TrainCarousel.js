"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import DoubleCard from "./DoubleCard";
import ContentWidth from "../layouts/ContentWidth";
import FullWidth from "../layouts/FullWidth";
import TeaserMobilitySolutions from "./TeaserMobilitySolutions";
import H3 from "../typography/H3";
import Text from "../typography/Text";
import Link from "../typography/Link";
import TrainSequence from "./TrainSequence";

const tabs = {
    categories: [
        {
            title: 'Vollbahnen',
            image: '/trains-1-narrow.png',
            trains: [
                {
                    img: '/train-models/mainline/smile.jpeg',
                    category: 'Highspeed',
                    name: 'Smile',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/mainline/flirt200.jpeg',
                    category: 'Intercity',
                    name: 'Flirt 200',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/mainline/kiss200.jpeg',
                    category: 'Intercity',
                    name: 'Kiss 200',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/mainline/flirt160.jpeg',
                    category: 'Regional',
                    name: 'Flirt 160',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/mainline/kiss160.jpeg',
                    category: 'Regional',
                    name: 'Kiss 160',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/mainline/wink.jpeg',
                    category: 'Regional',
                    name: 'Wink',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/mainline/gtw.jpeg',
                    category: 'Regional',
                    name: 'GTW',
                    href: '/solutions/schienenfahrzeuge/product',
                },
            ],
        },
        {
            title: 'Urban',
            image: '/trains-narrow.png',
            trains: [
                {
                    img: '/train-models/urban/tina.jpeg',
                    category: 'Highspeed',
                    name: 'Tina',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/urban/tango.jpeg',
                    category: 'Intercity',
                    name: 'Tango',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/urban/tramlink.jpeg',
                    category: 'Tram',
                    name: 'Tramlink',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/urban/variobahn.jpeg',
                    category: 'Regional',
                    name: 'Variobahn',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/urban/metelitsa.jpeg',
                    category: 'Regional',
                    name: 'Metelitsa',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/urban/citylink.jpeg',
                    category: 'Regional',
                    name: 'Citylink',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/urban/metro.jpeg',
                    category: 'Regional',
                    name: 'Metro',
                    href: '/solutions/schienenfahrzeuge/product',
                },
            ],
        },
        {
            title: 'Lokomotiven',
            image: '/trains-2-narrow.png',
            trains: [
                {
                    img: '/train-models/locomotive/euro9000.jpeg',
                    category: 'Highspeed',
                    name: 'EURO9000',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/locomotive/eurodual.jpeg',
                    category: 'EURODUAL',
                    name: 'Smile',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/locomotive/euro6000.jpeg',
                    category: 'Highspeed',
                    name: 'EURO6000',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/locomotive/euro4001.jpeg',
                    category: 'Highspeed',
                    name: 'EURO4001',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/locomotive/eurolight.jpeg',
                    category: 'Highspeed',
                    name: 'EUROLIGHT',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/locomotive/sali.jpeg',
                    category: 'Highspeed',
                    name: 'SALI',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/locomotive/central-cab.jpeg',
                    category: 'Highspeed',
                    name: 'Central Cab',
                    href: '/solutions/schienenfahrzeuge/product',
                },
            ],
        },
        {
            title: 'Tailor Made',
            image: '/trains-3-narrow.png',
            trains: [
                {
                    img: '/train-models/tailormade/triebzug.jpeg',
                    category: 'Highspeed',
                    name: 'Triebzüge',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/tailormade/zahnradbahn.jpeg',
                    category: 'Highspeed',
                    name: 'Zahnradbahnen',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/tailormade/schlafwagen.jpeg',
                    category: 'Highspeed',
                    name: 'Schlafwagen',
                    href: '/solutions/schienenfahrzeuge/product',
                },
                {
                    img: '/train-models/tailormade/rangierlok.jpeg',
                    category: 'Highspeed',
                    name: 'Lokomotiven',
                    href: '/solutions/schienenfahrzeuge/product',
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
    open: { transform: 'rotate(45deg)' },
    close: { transform: 'rotate(0deg)' },
};

const TrainCarousel = (props) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(0);

  return (
    <section className="bg-stadlergradient">
      <TeaserMobilitySolutions></TeaserMobilitySolutions>
      <ContentWidth>
        <div className="col-span-12 lg:col-span-6 lg:ml-8 text-white">
          <H3>Schienenfahrzeuge</H3>
          <Text>
            Höchste Qualität und Zuverlässigkeit sind bei unseren
            Schienenfahrzeugen Standard. Alles andere wird projekt-spezifisch
            massgeschneidert.
          </Text>
          <a className="flex mt-4" href="/solutions/schienenfahrzeuge">
            <img className="h-5" src="/stadler-arrow-foreward.svg" />
          </a>
        </div>
      </ContentWidth>
      {/* <FullWidth>
        <img
          src={tabs.categories[selectedCategory].image}
          className="col-span-12 w-full"
        />
      </FullWidth> */}
       <div className="w-full">
        <TrainSequence selectedCategory={selectedCategory}></TrainSequence>
      </div>
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
                    selectedCategory === key && isOpen === false ? true : false
                  ),
                  setSelectedCategory(key)
                )}
              >
                <p>{item.title}</p>
                <motion.img
                  className={`${selectedCategory === key ? "w-4" : "w-0"} mt-2`}
                  src="/plus-light.svg"
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
            <div key={item.name} className="bg-white text-black flexflex-row lg:flex-col">
              <img className="w-full" src={item.img} />
              <div className="p-6">
                <small className="text-greySolid-600 flex mb-2">
                  {item.category}
                </small>
                <div className="flex flex-row items-center justify-between">
                  <H3 styles="mb-0">{item.name}</H3>
                  <a href="#">
                    <img src="/icons/arrow-blue.svg" />
                  </a>
                  </div>
              </div>
            </div>
          ))}
          <div className="bg-transparent text-white border-solid border-2 border-white grid p-6">
            <div className="self-center">
              <small>Übersicht</small>
              <H3>{tabs.categories[selectedCategory].title}</H3>
            </div>
            <div className="justify-self-end place-self-end">
              <a href="#">
                <img className="w-5" src="/icons/arrow-white.svg" />
              </a>
            </div>
          </div>
        </motion.div>
      </ContentWidth>
      <DoubleCard />
    </section>
    )
}

export default TrainCarousel;
