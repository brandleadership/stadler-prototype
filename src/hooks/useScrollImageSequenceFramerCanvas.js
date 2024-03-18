import { useCallback, useEffect, useRef } from 'react';


  const useScrollImageSequenceFramerCanvas = ({
    onDraw,
    keyframes}) => {
        const canvasRef = useRef(null);


    // const { scrollYProgress } = useScroll(scrollOptions);
    const progress = 0;

    const resizeCanvas = useCallback(() => {
      const canvas = canvasRef.current;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight - (window.innerHeight / 3);
      console.log("window", window.innerHeight - (window.innerHeight / 3), window.innerHeight);
    }, []);

    const renderImage = useCallback(
      (progress) => {
        // console.log("progress", progress, scrollYProgress, canvasRef.current)
        // console.log("progress", progress)
        const constraint = (n, min = 0, max = keyframes.length - 1) =>
          Math.min(Math.max(n, min), max);
        onDraw(
          keyframes[constraint(Math.round(keyframes.length * progress))],
          canvasRef.current.getContext('2d'),
        );
      },
      [keyframes, onDraw],
    );

    useEffect(() => {
      resizeCanvas();
      const resizeCanvasAndRerender = () => {
        resizeCanvas();
        renderImage(progress);
      };
      window.addEventListener('resize', resizeCanvasAndRerender);
      return () => {
        window.removeEventListener('resize', resizeCanvasAndRerender);
      };
    }, [progress, renderImage, resizeCanvas]);

    useEffect(() => {
      keyframes[0].onload = () => {
        onDraw(keyframes[0], canvasRef.current.getContext('2d'));
      };
    }, [keyframes, onDraw]);

    //  useMotionValueEvent(progress, 'change', renderImage);

    return [progress, canvasRef, renderImage];
  };

  export default useScrollImageSequenceFramerCanvas;