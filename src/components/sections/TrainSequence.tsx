
import { motion, useTransform } from 'framer-motion';
import { useMemo, useRef } from 'react';

import { useScrollImageSequenceFramerCanvas } from '../../hooks';

const createImage = (src: string) => {
  const img = document.createElement('img');
  img.src = src;
  return img;
};

const handleDrawCanvas = (
  img: HTMLImageElement,
  ctx: CanvasRenderingContext2D,
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
    img.height * ratio,
  );
};

const ImageSequence = () => {
  const keyframes = useMemo(
    () =>
      [...new Array(215)].map((_, i) =>
        createImage(
          `https://www.polestar.com/www-images/home-car-carousel/car-sequence/desktop/ps2-ps1-precept-o2/${i
            .toString()
            .padStart(3, '0')}.jpg`,
        ),
      ),
    [],
  );

  const containerRef = useRef<HTMLElement>(null);
  const [progress, canvasRef] = useScrollImageSequenceFramerCanvas({
    onDraw: handleDrawCanvas,
    keyframes: keyframes,
    scrollOptions: {
      target: containerRef,
      offset: ['start', 'end'],
    },
  });

  // the animation goes across 4 screen height
  // try out to sequence text with 3 states
  const opacity1 = useTransform(progress, [0, 0.5, 1], [1, 0, 0]);
  const opacity2 = useTransform(progress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <section ref={containerRef} className="h-[400vh]">
      <div className="sticky top-0">
        <motion.div
          style={{ scaleX: progress }}
          className="absolute top-0 z-10 h-2 w-full origin-left bg-white"
        />
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
        </div>
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
