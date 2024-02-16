import {
  motion,
  useTransform,
  useMotionValueEvent,
  useMotionValue,
} from "framer-motion";
import { useState, useMemo, useRef } from "react";

import { useScrollImageSequenceFramerCanvas } from "../../hooks";

const createImage = (src: string) => {
  const img = document.createElement("img");
  img.src = src;
  return img;
};

const handleDrawCanvas = (
  img: HTMLImageElement,
  ctx: CanvasRenderingContext2D
) => {
  const canvas = ctx.canvas;
  const widthRatio = canvas.width / img.width;
  const heightRatio = canvas.height / img.height;
  const ratio = Math.max(widthRatio, heightRatio);
  const centerX = (canvas.width - img.width * ratio) / 2;
  const centerY = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerX,
    centerY,
    img.width * ratio,
    img.height * ratio
  );
};

const ImageSequence = () => {
  const keyframes = useMemo(
    () =>
      [...new Array(299)].map((_, i) =>
        createImage(
          `/PNG_Sequenz_1920x1080/Stadler_Carousel_${i
            .toString()
            .padStart(3, "0")}.png`
        )
      ),
    []
  );

  const containerRef = useRef<HTMLElement>(null);
  const [categoryNumber, categoryNumberChange] = useState(0);
  const [progress, canvasRef, renderImage] = useScrollImageSequenceFramerCanvas(
    {
      onDraw: handleDrawCanvas,
      keyframes: keyframes,
      // scrollOptions: {
      //   target: containerRef,
      //   offset: ["start", "end"],
      // },
      categoryNumber: categoryNumber,
    }
  );
  // const x = useMotionValue(0);
  const handleClick = (curState = 0, nextState = 1) => {
    categoryNumberChange(nextState);
    setInterval(
      (function() {
        let x = curState;

        return function() {
          // ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
          // ctx.drawImage(img, x, y);
          if (curState < nextState) {
            x += 0.005;
            if (x <= nextState) {
              renderImage(x);
            }
          }
          if (curState > nextState) {
            x -= 0.005;
            if (x >= nextState) {
              renderImage(x);
            }
          }
        };
      })(),
      20
    );
    // x.set(0.5);
    // useMotionValueEvent(0.5, "change", renderImage);
    // categoryNumberChange(0.5);
    // renderImage(0.5);
    console.log(categoryNumber);
  };
  // the animation goes across 4 screen height
  // try out to sequence text with 3 states
  // const opacity1 = useTransform(progress, [0, 0.33, 0.66, 1], [1, 0, 0, 0]);
  // const opacity2 = useTransform(progress, [0, 0.33, 0.66, 1], [0, 1, 0, 0]);
  // const opacity3 = useTransform(progress, [0, 0.33, 0.66, 1], [0, 0, 1, 0]);
  // const opacity4 = useTransform(progress, [0, 0.33, 0.66, 1], [0, 0, 0, 1]);

  return (
    <section>
      <div>
        {/* <motion.div
          style={{ scaleX: progress }}
          className="absolute top-0 z-10 h-2 w-full origin-left bg-white"
        /> */}
        <canvas ref={canvasRef} className="block" />
        {/* <div className="mx-auto flex h-screen max-w-6xl items-center justify-center px-12">
          <motion.h1
            style={{ opacity: opacity1 }}
            className="text-center text-4xl font-semibold text-black md:text-7xl"
          >
            Train 1
          </motion.h1>
          <motion.h1
            style={{ opacity: opacity2 }}
            className="text-center text-4xl font-semibold text-black md:text-7xl"
          >
            Train 2
          </motion.h1>
          <motion.h1
            style={{ opacity: opacity3 }}
            className="text-center text-4xl font-semibold text-black md:text-7xl"
          >
            Train 3
          </motion.h1>
          <motion.h1
            style={{ opacity: opacity4 }}
            className="text-center text-4xl font-semibold text-black md:text-7xl"
          >
            Train 4
          </motion.h1>
        </div> */}
        <div onClick={() => handleClick(categoryNumber, 0)}>Category 1</div>
        <div onClick={() => handleClick(categoryNumber, 0.33)}>Category 2</div>
        <div onClick={() => handleClick(categoryNumber, 0.66)}>Category 3</div>
        <div onClick={() => handleClick(categoryNumber, 1)}>Category 4</div>
      </div>
    </section>
  );
};

const TrainSequence = () => (
  <div className="overflow-clip">
    <ImageSequence />
  </div>
);

export default TrainSequence;
