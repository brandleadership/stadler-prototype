import { motion } from "framer-motion";
import { useState } from "react";
import { rootCertificates } from "tls";
import DoubleCard from "../DoubleCard";
import ContentWidth from "../layouts/ContentWidth";
import FullWidth from "../layouts/FullWidth";
import TeaserMobilitySolutions from "../TeaserMobilitySolutions";
import H3 from "../typography/H3";
import Text from "../typography/Text";

const tabs = {
  categories: [
    {
      title: "Mainline",
      trains: [
        {
          img: "train-models/smile.png",
          category: "Highspeed",
          name: "Smile",
          href: "#",
        },
        {
          img: "train-models/smile.png",
          category: "Highspeed",
          name: "Smile",
          href: "#",
        },
        {
          img: "train-models/smile.png",
          category: "Highspeed",
          name: "Smile",
          href: "#",
        },
        {
          img: "train-models/smile.png",
          category: "Highspeed",
          name: "Smile",
          href: "#",
        },
        {
          img: "train-models/smile.png",
          category: "Highspeed",
          name: "Smile",
          href: "#",
        },
        {
          img: "train-models/smile.png",
          category: "Highspeed",
          name: "Smile",
          href: "#",
        },
        {
          img: "train-models/smile.png",
          category: "Highspeed",
          name: "Smile",
          href: "#",
        },
      ],
    },
    {
      title: "Urban",
    },
    { title: "Locomotives" },
    {
      title: "Tailor Made",
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
  const [selectedTab, setSelectedTab] = useState(tabs.categories[0]);

  return (
    <section className="bg-stadlergradient">
      <TeaserMobilitySolutions></TeaserMobilitySolutions>
      <ContentWidth>
        <div className="col-span-6 text-white">
          <H3>Schienenfahrzeuge</H3>
          <Text>
            Höchste Qualität und Zuverlässigkeit sind bei unseren
            Schienenfahrzeugen Standard. Alles andere wird projekt-spezifisch
            massgeschneidert.
          </Text>
        </div>
      </ContentWidth>
      <FullWidth>
        <img src="/trains.png" className="col-span-12" />
      </FullWidth>
      <ContentWidth>
        <div className="col-span-8 col-start-3 col-end-11 grid grid-cols-4 my-6">
          {tabs.categories.map((item) => (
            <div
              key={item.title}
              className="text-greyBrighten-600 font-semibold text-center flex flex-col items-center"
              onClick={() => (
                setIsOpen((isOpen) => !isOpen), setSelectedTab(item)
              )}
            >
              <p>{item.title}</p>
              <motion.img
                className="w-4 mt-2"
                src="/plus-light.svg"
                animate={item === selectedTab && isOpen ? "open" : "close"}
                variants={plusAnimation}
              />
            </div>
          ))}
        </div>
      </ContentWidth>
      <ContentWidth>
        <motion.div
          className="col-span-12 grid grid-cols-4 grid-rows-2 gap-2"
          animate={isOpen ? "open" : "closed"}
          variants={variants}
        >
          {tabs.categories[0].trains.map((item) => (
            <div key={item.name} className="bg-white text-black flex flex-col">
              <img className="w-full" src={item.img} />
              <div className="p-6">
                <small className="text-greySolid-600 flex mb-2">
                  {item.category}
                </small>
                <H3>{item.name}</H3>
              </div>
            </div>
          ))}
          <div className="bg-transparent text-white border-solid border-2 border-white flex flex-col justify-center p-6">
            <small>Übersicht</small>
            <H3>Mainline</H3>
          </div>
        </motion.div>
      </ContentWidth>
      <DoubleCard />
    </section>
  );
};

export default TrainCarousel;
