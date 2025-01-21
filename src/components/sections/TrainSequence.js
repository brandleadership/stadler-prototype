'use client';

import { useState, useMemo, useRef, useCallback, useEffect } from 'react';
const images = [
    '/carousel_final_1728_webp/Stadler_Carousel_000.png',
    '/carousel_final_1728_webp/Stadler_Carousel_001.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_002.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_003.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_004.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_005.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_006.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_007.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_008.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_009.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_010.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_011.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_012.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_013.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_014.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_015.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_016.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_017.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_018.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_019.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_020.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_021.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_022.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_023.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_024.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_025.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_026.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_027.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_028.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_029.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_030.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_031.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_032.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_033.png',
    '/carousel_final_1728_webp/Stadler_Carousel_034.png',
    '/carousel_final_1728_webp/Stadler_Carousel_035.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_036.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_037.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_038.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_039.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_040.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_041.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_042.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_043.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_044.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_045.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_046.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_047.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_048.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_049.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_050.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_051.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_052.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_053.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_054.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_055.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_056.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_057.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_058.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_059.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_060.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_061.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_062.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_063.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_064.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_065.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_066.png',
    '/carousel_final_1728_webp/Stadler_Carousel_067.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_068.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_069.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_070.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_071.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_072.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_073.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_074.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_075.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_076.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_077.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_078.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_079.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_080.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_081.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_082.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_083.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_084.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_085.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_086.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_087.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_088.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_089.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_090.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_091.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_092.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_093.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_094.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_095.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_096.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_097.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_098.webp',
    '/carousel_final_1728_webp/Stadler_Carousel_099.png',
];

const imagesMobile = [
    '/carousel_final_600_png/Stadler_Carousel_000.png',
    '/carousel_final_600_png/Stadler_Carousel_001.png',
    '/carousel_final_600_png/Stadler_Carousel_002.png',
    '/carousel_final_600_png/Stadler_Carousel_003.png',
    '/carousel_final_600_png/Stadler_Carousel_004.png',
    '/carousel_final_600_png/Stadler_Carousel_005.png',
    '/carousel_final_600_png/Stadler_Carousel_006.png',
    '/carousel_final_600_png/Stadler_Carousel_007.png',
    '/carousel_final_600_png/Stadler_Carousel_008.png',
    '/carousel_final_600_png/Stadler_Carousel_009.png',
    '/carousel_final_600_png/Stadler_Carousel_010.png',
    '/carousel_final_600_png/Stadler_Carousel_011.png',
    '/carousel_final_600_png/Stadler_Carousel_012.png',
    '/carousel_final_600_png/Stadler_Carousel_013.png',
    '/carousel_final_600_png/Stadler_Carousel_014.png',
    '/carousel_final_600_png/Stadler_Carousel_015.png',
    '/carousel_final_600_png/Stadler_Carousel_016.png',
    '/carousel_final_600_png/Stadler_Carousel_017.png',
    '/carousel_final_600_png/Stadler_Carousel_018.png',
    '/carousel_final_600_png/Stadler_Carousel_019.png',
    '/carousel_final_600_png/Stadler_Carousel_020.png',
    '/carousel_final_600_png/Stadler_Carousel_021.png',
    '/carousel_final_600_png/Stadler_Carousel_022.png',
    '/carousel_final_600_png/Stadler_Carousel_023.png',
    '/carousel_final_600_png/Stadler_Carousel_024.png',
    '/carousel_final_600_png/Stadler_Carousel_025.png',
    '/carousel_final_600_png/Stadler_Carousel_026.png',
    '/carousel_final_600_png/Stadler_Carousel_027.png',
    '/carousel_final_600_png/Stadler_Carousel_028.png',
    '/carousel_final_600_png/Stadler_Carousel_029.png',
    '/carousel_final_600_png/Stadler_Carousel_030.png',
    '/carousel_final_600_png/Stadler_Carousel_031.png',
    '/carousel_final_600_png/Stadler_Carousel_032.png',
    '/carousel_final_600_png/Stadler_Carousel_033.png',
    '/carousel_final_600_png/Stadler_Carousel_034.png',
    '/carousel_final_600_png/Stadler_Carousel_035.png',
    '/carousel_final_600_png/Stadler_Carousel_036.png',
    '/carousel_final_600_png/Stadler_Carousel_037.png',
    '/carousel_final_600_png/Stadler_Carousel_038.png',
    '/carousel_final_600_png/Stadler_Carousel_039.png',
    '/carousel_final_600_png/Stadler_Carousel_040.png',
    '/carousel_final_600_png/Stadler_Carousel_041.png',
    '/carousel_final_600_png/Stadler_Carousel_042.png',
    '/carousel_final_600_png/Stadler_Carousel_043.png',
    '/carousel_final_600_png/Stadler_Carousel_044.png',
    '/carousel_final_600_png/Stadler_Carousel_045.png',
    '/carousel_final_600_png/Stadler_Carousel_046.png',
    '/carousel_final_600_png/Stadler_Carousel_047.png',
    '/carousel_final_600_png/Stadler_Carousel_048.png',
    '/carousel_final_600_png/Stadler_Carousel_049.png',
    '/carousel_final_600_png/Stadler_Carousel_050.png',
    '/carousel_final_600_png/Stadler_Carousel_051.png',
    '/carousel_final_600_png/Stadler_Carousel_052.png',
    '/carousel_final_600_png/Stadler_Carousel_053.png',
    '/carousel_final_600_png/Stadler_Carousel_054.png',
    '/carousel_final_600_png/Stadler_Carousel_055.png',
    '/carousel_final_600_png/Stadler_Carousel_056.png',
    '/carousel_final_600_png/Stadler_Carousel_057.png',
    '/carousel_final_600_png/Stadler_Carousel_058.png',
    '/carousel_final_600_png/Stadler_Carousel_059.png',
    '/carousel_final_600_png/Stadler_Carousel_060.png',
    '/carousel_final_600_png/Stadler_Carousel_061.png',
    '/carousel_final_600_png/Stadler_Carousel_062.png',
    '/carousel_final_600_png/Stadler_Carousel_063.png',
    '/carousel_final_600_png/Stadler_Carousel_064.png',
    '/carousel_final_600_png/Stadler_Carousel_065.png',
    '/carousel_final_600_png/Stadler_Carousel_066.png',
    '/carousel_final_600_png/Stadler_Carousel_067.png',
    '/carousel_final_600_png/Stadler_Carousel_068.png',
    '/carousel_final_600_png/Stadler_Carousel_069.png',
    '/carousel_final_600_png/Stadler_Carousel_070.png',
    '/carousel_final_600_png/Stadler_Carousel_071.png',
    '/carousel_final_600_png/Stadler_Carousel_072.png',
    '/carousel_final_600_png/Stadler_Carousel_073.png',
    '/carousel_final_600_png/Stadler_Carousel_074.png',
    '/carousel_final_600_png/Stadler_Carousel_075.png',
    '/carousel_final_600_png/Stadler_Carousel_076.png',
    '/carousel_final_600_png/Stadler_Carousel_077.png',
    '/carousel_final_600_png/Stadler_Carousel_078.png',
    '/carousel_final_600_png/Stadler_Carousel_079.png',
    '/carousel_final_600_png/Stadler_Carousel_080.png',
    '/carousel_final_600_png/Stadler_Carousel_081.png',
    '/carousel_final_600_png/Stadler_Carousel_082.png',
    '/carousel_final_600_png/Stadler_Carousel_083.png',
    '/carousel_final_600_png/Stadler_Carousel_084.png',
    '/carousel_final_600_png/Stadler_Carousel_085.png',
    '/carousel_final_600_png/Stadler_Carousel_086.png',
    '/carousel_final_600_png/Stadler_Carousel_087.png',
    '/carousel_final_600_png/Stadler_Carousel_088.png',
    '/carousel_final_600_png/Stadler_Carousel_089.png',
    '/carousel_final_600_png/Stadler_Carousel_090.png',
    '/carousel_final_600_png/Stadler_Carousel_091.png',
    '/carousel_final_600_png/Stadler_Carousel_092.png',
    '/carousel_final_600_png/Stadler_Carousel_093.png',
    '/carousel_final_600_png/Stadler_Carousel_094.png',
    '/carousel_final_600_png/Stadler_Carousel_095.png',
    '/carousel_final_600_png/Stadler_Carousel_096.png',
    '/carousel_final_600_png/Stadler_Carousel_097.png',
    '/carousel_final_600_png/Stadler_Carousel_098.png',
    '/carousel_final_600_png/Stadler_Carousel_099.png',
];

const onDraw = (img, ctx) => {
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

const ImageSequence = ({ category }) => {
    const [prevCategoryNumber, categoryNumberChange] = useState(category);
    const canvasRef = useRef(null);
    let progress;

    const createImage = (src) => {
        if (typeof document !== 'undefined') {
            const img = document.createElement('img');
            img.src = src;
            return img;
        }
    };

    const keyframes = useMemo(() => {
        return [...new Array(100)].map((_, i) => {
            return createImage(
                typeof window !== 'undefined' && window?.innerWidth < 786
                    ? imagesMobile[i]
                    : images[i]
            );
        });
    }, []);

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
        progress = Number(category) / 3;
        const resizeCanvasAndRerender = () => {
            resizeCanvas();
            renderImage(progress);
        };
        window.addEventListener('resize', resizeCanvasAndRerender);
        return () => {
            window.removeEventListener('resize', resizeCanvasAndRerender);
        };
    }, [category, resizeCanvas]);

    useEffect(() => {
        keyframes[0].onload = () => {
            onDraw(keyframes[0], canvasRef.current.getContext('2d'));
        };
    }, [keyframes, onDraw]);

    useEffect(() => {
        onDraw(keyframes[0], canvasRef.current.getContext('2d'));
    }, []);

    useEffect(() => {
        //preloading image
        keyframes.forEach((image) => {
            const img = new Image();
            img.src = image;
        });
    }, []);

    const [animationProgress, animationProgressChange] = useState(false);

    let start;
    let done = false;

    // As Progress Value Goes from 0 to 1, the Progress between Categories Will Be 1/3
    // Previously Chosen Category
    let previousCategory = Number(prevCategoryNumber) / 3;
    // New Chosen Category
    let newCategory = Number(category) / 3;

    // Progress Value Equal to the Progress from Slide 0 to SLide 1
    let singleSlideProgress;
    if (Math.abs(Number(category) - Number(prevCategoryNumber)) > 1) {
        singleSlideProgress = 1 / (100 / 1);
    } else {
        singleSlideProgress =
            1 / (100 / Math.abs(Number(category) - Number(prevCategoryNumber)));
    }

    const changeCarouselPositions = () => {
        let count;
        if (start === undefined) {
            start = Number(prevCategoryNumber) / 3;
        }
        if (newCategory > previousCategory) {
            const categoryDifference =
                Number(category) - Number(prevCategoryNumber);
            const progressDifference =
                categoryDifference / 3 + Number(prevCategoryNumber) / 3;
            count = start + singleSlideProgress;
            renderImage(count);
            start = start + singleSlideProgress;
            if (start >= progressDifference) {
                done = true;
                animationProgressChange(false);
                categoryNumberChange(category);
            } else {
                // If animation is not yet finished, call the animation function again
                if (!done) {
                    window.requestAnimationFrame(changeCarouselPositions);
                }
            }
        }

        if (newCategory < previousCategory) {
            const categoryDifference =
                Number(prevCategoryNumber) - Number(category);
            const progressDifference =
                Number(prevCategoryNumber) / 3 - categoryDifference / 3;
            count = start - singleSlideProgress;
            renderImage(count);
            start = start - singleSlideProgress;
            if (start <= progressDifference) {
                done = true;
                animationProgressChange(false);
                categoryNumberChange(category);
            } else {
                if (!done) {
                    window.requestAnimationFrame(changeCarouselPositions);
                }
            }
        }
    };

    useEffect(() => {
        if (!animationProgress) {
            if (previousCategory != newCategory) {
                animationProgressChange(true);
                window.requestAnimationFrame(changeCarouselPositions);
            }
        }
    }, [category]);

    return (
        <section>
            <div>
                <canvas ref={canvasRef} className="block" />
            </div>
        </section>
    );
};

const TrainSequence = ({ selectedCategory }) => {
    return (
        <div className="overflow-clip">
            <ImageSequence category={selectedCategory} />
        </div>
    );
};

export default TrainSequence;
