import {
  motion,
  useTransform,
  useMotionValueEvent,
  useMotionValue,
} from "framer-motion";
import { useState, useMemo, useRef, useEffect } from "react";

import { useScrollImageSequenceFramerCanvas } from "../../hooks";

const createImage = (src: string) => {
  if (typeof document !== "undefined") {
    const img = document.createElement("img");
    img.src = src;
    return img;
  }
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
  console.log(widthRatio, heightRatio);
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

const ImageSequence = ({ category }: { category: Number }) => {
  const keyframes = useMemo(
    () =>
      [...new Array(299)].map((_, i) =>
        createImage(
          `/png-trains-carousel/Stadler_Carousel_${i
            .toString()
            .padStart(3, "0")}.png`
        )
      ),
    []
  );

  const containerRef = useRef<HTMLElement>(null);
  const [prevCategoryNumber, categoryNumberChange] = useState(category);
  const [animationProgress, animationProgressChange] = useState(false);
  const [progress, canvasRef, renderImage] = useScrollImageSequenceFramerCanvas(
    {
      onDraw: handleDrawCanvas,
      keyframes: keyframes,
    }
  );

  useEffect(() => {
    // console.log(
    //   "counter updated",
    //   animationProgress,
    //   category,
    //   prevCategoryNumber
    // );
    if (!animationProgress) {
      // console.log("first if 1");

      let x = Number(prevCategoryNumber) / 3;
      let c = Number(category) / 3;

      if (x < c) {
        animationProgressChange(true);
        const t = setInterval(function() {
          x += 0.015;
          if (x <= c) {
            renderImage(x);
          } else {
            // console.log("clear interval 1");
            clearInterval(t);
            animationProgressChange(false);
            categoryNumberChange(category);
            console.log("check c", c, category);
          }
        }, 16.7);
      }
      if (x > c) {
        // console.log("second if", x, c);
        animationProgressChange(true);
        const t = setInterval(function() {
          x -= 0.015;
          if (x >= c) {
            renderImage(x);
          } else {
            // console.log("clear interval 2");
            clearInterval(t);
            animationProgressChange(false);

            categoryNumberChange(category);
            console.log("check c", c, category);
          }
        }, 16.7);
      }
    }
  }, [category]);

  const handleClick = (curState = 0, nextState = 1) => {
    // console.log("selectedCategory", selectedCategory);
    if (!animationProgress) {
      animationProgressChange(true);
      categoryNumberChange(nextState);

      let x = curState;

      if (curState < nextState) {
        const t = setInterval(function() {
          x += 0.015;
          if (x <= nextState) {
            renderImage(x);
          } else {
            console.log("clear interval 1");
            clearInterval(t);
            animationProgressChange(false);
          }
        }, 16.7);
      }
      if (curState > nextState) {
        const t = setInterval(function() {
          x -= 0.015;
          if (x >= nextState) {
            renderImage(x);
          } else {
            console.log("clear interval 2");
            clearInterval(t);
            animationProgressChange(false);
          }
        }, 16.7);
      }
    }
    // x.set(0.5);
    // useMotionValueEvent(0.5, "change", renderImage);
    // categoryNumberChange(0.5);
    // renderImage(0.5);
    console.log(
      "categoryNumber",
      prevCategoryNumber,
      typeof prevCategoryNumber
    );
  };

  return (
    <section>
      <div>
        <canvas ref={canvasRef} className="block" />

        {/* <div onClick={() => handleClick(categoryNumber, 0)}>Category 1</div>
        <div onClick={() => handleClick(categoryNumber, 0.33)}>Category 2</div>
        <div onClick={() => handleClick(categoryNumber, 0.66)}>Category 3</div>
        <div onClick={() => handleClick(categoryNumber, 1)}>Category 4</div> */}
      </div>
      {/* <div>
        <img src="/STA0509_Carousel_Reframe_0100_NOS240220.png" alt="" />
      </div> */}
    </section>
  );
};

const TrainSequence = ({ selectedCategory }: { selectedCategory: Number }) => (
  <div className="overflow-clip">
    <ImageSequence category={selectedCategory} />
  </div>
);

export default TrainSequence;
