import { useCallback, useEffect, useRef } from 'react';

const useScrollImageSequenceFramerCanvas = ({ onDraw, keyframes }) => {
    const canvasRef = useRef(null);
    const progress = 0;

    const resizeCanvas = useCallback(() => {
        const canvas = canvasRef.current;
        canvas.width = window.innerWidth;
        canvas.height =
            window.innerWidth / 2.35 <
            window.innerHeight - window.innerHeight / 4
                ? window.innerWidth / 2.35
                : window.innerHeight - window.innerHeight / 4;
    }, []);

    const renderImage = useCallback(
        (progress) => {
            const constraint = (n, min = 0, max = keyframes.length - 1) =>
                Math.min(Math.max(n, min), max);
            onDraw(
                keyframes[constraint(Math.round(keyframes.length * progress))],
                canvasRef.current.getContext('2d')
            );
        },
        [keyframes, onDraw]
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

    useEffect(() => {
        onDraw(keyframes[0], canvasRef.current.getContext('2d'));
    }, []);

    //  useMotionValueEvent(progress, 'change', renderImage);

    return [progress, canvasRef, renderImage];
};

export default useScrollImageSequenceFramerCanvas;
