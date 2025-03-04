import React, { useRef } from 'react'
import canvasimages from './canvasimages.js'
import { useEffect, useState } from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';

function Canvas({ details }) {
    const [index, setIndex] = useState({ value: details.startIndex });
   const {startIndex, numImages, duration, size, top, left,zIndex} = details;
    const canvasRef = useRef(null);

useGSAP(() => {
    gsap.to(index, {
        value: details.startIndex + details.numImages-1,
        duration: details.duration,
        repeat: -1,
        ease: "linear",
        onUpdate: () => {
          setIndex({value: Math.round(index.value) });
        },
    });
    gsap.from(canvasRef.current,{
      opacity:0,
      duration:1,
      ease:"power2,inOut",
    });
});

    useEffect(() => {
        const scale = window.devicePixelRatio;
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");
        const img = new Image();
        img.src = canvasimages[index.value];
        img.onload = () => {
            canvas.width = canvas.offsetWidth * scale;
            canvas.height = canvas.offsetHeight * scale;
            canvas.style.width = canvas.offsetWidth + "px";
            canvas.style.height = canvas.offsetHeight + "px";
            ctx.scale(scale,scale)
            ctx.drawImage(img, 0,0, canvas.offsetWidth, canvas.offsetHeight);
        };
    });
  return (
  <canvas 
  data-scroll
  data-scroll-speed={Math.random().toFixed(2)}
  ref={canvasRef} 
  className='absolute'
  style={{
    width: `${size * 1.2}px`,
    height: `${size * 1.3}px`,
    top: `${top}%`,
    left: `${left}%`,
    zIndex: `${zIndex}`,
  }}
  id="canvas">

  </canvas>
  );
}


export default Canvas