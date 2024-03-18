import { useState, useMemo, useEffect } from "react";


import { useScrollImageSequenceFramerCanvas } from "../../hooks";

const createImage = (src) => {
  if (typeof document !== "undefined") {
    const img = document.createElement("img");
    img.src = src;
    return img;
  }
};

const handleDrawCanvas = (
    img,
    ctx
  ) => {
    const canvas = ctx.canvas;
    const widthRatio = canvas.width / img.width;
    const heightRatio = canvas.height / img.height;
    const ratio = Math.max(widthRatio, heightRatio);
    const centerX = (canvas.width - img.width * ratio) / 2;
    const centerY = (canvas.height - img.height * ratio) / 2;
    // console.log(widthRatio, heightRatio);
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
    const keyframes = useMemo(
      () =>
        [...new Array(299)].map((_, i) =>
          createImage(
            `/Carousel_Final_720/Stadler_Carousel_${i
              .toString()
              .padStart(3, "0")}.png`
          )
        ),
      []
    );

    useEffect(() => {
      //preloading image
      keyframes.forEach((image) => {
        const img = new Image();
        img.src = image;
        // console.log("image", image)
      });
    }, []);

    const [prevCategoryNumber, categoryNumberChange] = useState(category);
    const [lastOfClickedCategories, changeLastOfClickedCategories] = useState();

  const [animationProgress, animationProgressChange] = useState(false);
  const [progress, canvasRef, renderImage] = useScrollImageSequenceFramerCanvas(
    {
      onDraw: handleDrawCanvas,
      keyframes: keyframes,
    }
  );

  let start;
  let done = false; 

  // As Progress Value Goes from 0 to 1, the Progress between Categories Will Be 1/3 
  // Previously Chosen Category
  let previousCategory = Number(prevCategoryNumber) / 3;
  // New Chosen Category
  let newCategory = Number(category) / 3;

  // Progress Value Equal to the Progress from Slide 0 to SLide 1
  const singleSlideProgress = 1 / (299 / Math.abs(Number(category) - Number(prevCategoryNumber)));

  const changeCarouselPositions = (timeStamp) => {
    let count;
    if (start === undefined) {
      start = Number(prevCategoryNumber) / 3;
    }
    if (newCategory > previousCategory) {
      const categoryDifference = Number(category) - Number(prevCategoryNumber);
      const progressDifference = categoryDifference / 3 + Number(prevCategoryNumber) / 3;
      count = start + singleSlideProgress; 
      renderImage(count)
      start = start + singleSlideProgress;
      if (start >= progressDifference) {
        done = true;
        animationProgressChange(false)
        categoryNumberChange(category)
        console.log("end of animation", lastOfClickedCategories)
      } else {
        // If animation is not yet finished, call the animation function again
        if (!done) {
          window.requestAnimationFrame(changeCarouselPositions);
        }
      }
    }

    
    if (newCategory < previousCategory) {
      const categoryDifference = Number(prevCategoryNumber) - Number(category);
      const progressDifference = Number(prevCategoryNumber) / 3 - categoryDifference / 3 ;
      count = start - singleSlideProgress; 
      renderImage(count)
      start = start - singleSlideProgress;
      if (start <= progressDifference) {
        done = true;
        animationProgressChange(false)
        categoryNumberChange(category)
        console.log("end of animation", lastOfClickedCategories)
      } else {
        if (!done) {
          window.requestAnimationFrame(changeCarouselPositions);
        }
      }
    }
  }
 
  
  useEffect(() => {
    if (!animationProgress) {
      if (previousCategory != newCategory) {
        animationProgressChange(true)
        window.requestAnimationFrame(changeCarouselPositions);
      } else {
        // console.log(category, listOfClickedCategories)
      }
    } else {
      // Here the logic of 
      changeLastOfClickedCategories(category)
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

const TrainSequence = ({ selectedCategory }) => (
    <div className="overflow-clip">
      <ImageSequence category={selectedCategory} />
    </div>
  );
  
  export default TrainSequence;