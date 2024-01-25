import { motion, useTransform } from "framer-motion";
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
      [...new Array(300)].map((_, i) =>
        createImage(`/trainsequence/${i.toString().padStart(4, "0")}.png`)
      ),
    []
  );

  const containerRef = useRef<HTMLElement>(null);
  const [categoryNumber, categoryNumberChange] = useState(0);
  const [
    progress,
    canvasRef,
    trainCategoryRef,
    renderImage,
  ] = useScrollImageSequenceFramerCanvas({
    onDraw: handleDrawCanvas,
    keyframes: keyframes,
    scrollOptions: {
      target: containerRef,
      offset: ["start", "end"],
    },
    categoryNumber: categoryNumber,
  });

  const handleClick = () => {
    categoryNumberChange(0.5);
    renderImage(0.5);
    console.log(categoryNumber);
  };
  console.log(progress);
  // the animation goes across 4 screen height
  // try out to sequence text with 3 states
  const opacity1 = useTransform(progress, [0, 0.33, 0.66, 1], [1, 0, 0, 0]);
  const opacity2 = useTransform(progress, [0, 0.33, 0.66, 1], [0, 1, 0, 0]);
  const opacity3 = useTransform(progress, [0, 0.33, 0.66, 1], [0, 0, 1, 0]);
  const opacity4 = useTransform(progress, [0, 0.33, 0.66, 1], [0, 0, 0, 1]);

  return (
    <section ref={containerRef} className="h-[400vh]">
      <div className="sticky top-0">
        {/* <motion.div
          style={{ scaleX: progress }}
          className="absolute top-0 z-10 h-2 w-full origin-left bg-white"
        /> */}
        <canvas ref={canvasRef} className="absolute inset-0 block" />
        <div className="mx-auto flex h-screen max-w-6xl items-center justify-center px-12">
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
        </div>
        <div onClick={handleClick}>Jump to the last carousel element</div>
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
