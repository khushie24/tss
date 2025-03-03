import './index.css';
import { useEffect } from 'react'
import { useState } from 'react';
import { useRef } from 'react';
import Canvas from './Canvas';
import data from './data';
import LocomotiveScroll from 'locomotive-scroll';
import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import { Circ } from 'gsap';
import { Expo } from 'gsap';
import './Bgm';


function App(){

    const [showCanvas,setShowCanvas] = useState(false);
    const headingref = useRef(null);
    const growingSpan = useRef(null);

  useEffect(() => {
    const locomotiveScroll = new LocomotiveScroll();
  },[]);

useEffect(() => {
  const handleClick = (e) => {
    setShowCanvas((prevShowCanvas) => {
      if(!prevShowCanvas){
        gsap.set(growingSpan.current, {
          top: e.clientY,
          left: e.clientX,
        });
        gsap.to("body",{
          color: "#000",
       // backgroundColor: "#fd2c2a",
          backgroundColor: "lightblue",
          duration: 1.2,
          ease: "power2.inOut",
        });
        gsap.to(growingSpan.current, {
          scale: 1000,
          duration:1.2,
          ease: "power2.inOut",
          onComplete: () => {
            gsap.set(growingSpan.current,{
              scale:0,
              clearProps: "all",
            });
          },
        });
      } else {
        gsap.to("body",{
          color: "#fff",
          backgroundColor: "#000",
          duration: 1.2,
          ease: "power2.inOut",
        });
      }
      return !prevShowCanvas;
    });
  };
  const headingElement = headingref.current;
  headingElement.addEventListener("click",handleClick);
  //clean up event on unmount
   return() => headingElement.removeEventListener("click", handleClick);
}, []);
{/*}
  useGSAP(() => {
    headingref.current.addEventListener("click", (e) => {
      setShowCanvas(!showCanvas);
      gsap.set(growingSpan.current, {
        top: e.clientY,
        left: e.clientX,
     });
      gsap.to(growingSpan.current, {
        scale: 1000,
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
          gsap.set(growingSpan.current, {
            scale: 0,
            clearProps: "all",
          });
        },
      });
    });
  }, [showCanvas]);
*/}
  return (
  <>
  
<div>
  
  <span ref={growingSpan} className="growing block fixed top-0 left-0 w-15 h-15"></span>
    </div>
    
  <div className="w-full relative min-h-screen overflow-x-hidden font-['Helvetica_Now_Display'] " >
    {showCanvas && 
    data[0].map((canvasdets, index) => 
      <Canvas details={canvasdets}/> )} 
   <div className='dd w-full relative z-[1] h-screen'> {/*zIndex hata denge to canvas upr aa jayenge text ke*/}
     <nav className='navb top-0 left-0 w-full  flex justify-between gap-10 z-50'>
<div className='brand text-2xl font-regular'>
<img src="Dp.png"
 className='w-[80%] mt-10' alt="" />
</div>
<div className='links flex gap-10'>
  {["home","About","Projects", "Contact"].map((link,index) => (
    <a href={`#${link.toLowerCase()}`} key={index} className='text-md hover:text-gray-300'>
  {link}
  </a>
  ))}
<hr/>
</div>
</nav>

<div className="textcontainer  w-full px-[10%]">
            <div className="text w-[50%]">
              <h3 className="text-4xl leading-[1.1]">
              Bringing the authentic taste of traditional Punjabi achaars to every home with handcrafted recipes, rich flavors, and premium ingredients.
              </h3>

              <p className="text-lg w-[80%] mt-10 font-normal">
              Driven by passion and tradition, our team works tirelessly to preserve the true essence of Punjabi achaars, delivering handcrafted flavors straight from our kitchen to your home.
              </p>
            </div>
            <div ref={headingref} className='rightside'>
            <img src="circle1.png"
 className='w-[80%] mt-10 ' alt="" />
            </div>
</div>
{/*<div className='banner w-full absolute bottom-0 left-10'>
<h1 ref={headingref} className='text-[10rem] font-normal tracking-tight leading-none'><img src="pagwbg.png"
 className='w-[80%] mt-10' alt="" /></h1>
  </div>*/}
</div>
</div>
<div className='page2 w-full relative h-screen mt-32 px-10'>
{showCanvas &&
          data[1].map((canvasdets, index) => <Canvas details={canvasdets} />)}
 <div className='page2header'><h1 className='text-6xl tracking-tighter'>Sade Achaar 🌶 </h1>
 
 </div>
  <p className='minor text-xl w-[100%] mt-1 font-light'> 
  Welcome to Swaad Pind Da, where great flavors meet fresh ingredients! Our menu offers a perfect blend of authentic recipes and modern delights, crafted with passion. Enjoy a delicious dining experience with warm hospitality and mouthwatering dishes! 🍽️✨
  </p>
<div className='cardss mt-11'>
<div className='c w-[30%] rounded-3xl h-[32rem] border-2 border-orange-500 cardbody'>
<img src='download.jpeg' className='rounded-tl-3xl rounded-tr-3xl w-[22rem] h-[12rem]' alt="" />
<div className='cardbody p-6'>
<h3 className='m-1 cardtitle'>Mix Pickle</h3>
<p>
Our Mixed Pickle is a flavorful blend of seasonal vegetables, marinated in mustard oil with aromatic spices for a perfect balance of tangy, spicy, and savory flavors. A delicious accompaniment to any meal! 🌶️🍋
</p>
<button className='bg-orange-500 p-2 rounded-xl'>
  view menu
</button>
</div>
</div>

<div className='c w-[30%] rounded-3xl h-[32rem] border-2 border-orange-500 cardbody'>
<img src='bharimirch.jpeg' className='rounded-tl-3xl rounded-tr-3xl w-[22rem] h-[12rem]' alt="" />
<div className='cardbody p-6'>
<h3 className='m-1 cardtitle'>Stuffed Chilli Pickle</h3>
<p>
Spicy green chilies stuffed with flavorful masalas and preserved in mustard oil, delivering a bold and zesty Punjabi taste. A perfect fiery accompaniment!
</p>
<button className='bg-orange-500 p-2 rounded-xl'>
  view menu
</button>
</div>
</div>

<div className='c w-[30%] mt-10 rounded-3xl h-[32rem] border-2 border-orange-500 cardbody'>
<img src='aam.jpeg' className='rounded-tl-3xl rounded-tr-3xl w-[22rem] h-[12rem]' alt="" />
<div className='cardbody p-6'>
<h3 className='m-1 cardtitle'>Aam Da Achaar</h3>
<p>
Traditional Punjabi mango pickle, bursting with bold spices and preserved in mustard oil for an authentic, tangy, and spicy flavor. A perfect desi delight!
</p>
<button className='bg-orange-500 p-2 rounded-xl'>
  view menu
</button>
</div>
</div>

<div className='c w-[30%] mt-10 rounded-3xl h-[32rem] border-2 border-orange-500 cardbody'>
<img src='lehsun.jpeg' className='rounded-tl-3xl rounded-tr-3xl w-[22rem] h-[12rem]' alt="" />
<div className='cardbody p-6'>
<h3 className='m-1 cardtitle'>Lassan da Achaar</h3>
<p>
Tangy and spicy garlic pickle, infused with aromatic spices and mustard oil for a bold, flavorful kick. Perfect accompaniment to any meal.
</p>
<button className='bg-orange-500 p-2 rounded-xl'>
  view menu
</button>
</div>
</div>
  </div>
</div>


<div className='footer w-full'>
  <div className='footlogo'>
    <img className='fl' src="Dp.png" alt="" />
    
  <div className='contactlinks'>

    <img src="fb.png" className='rounded-full' alt="" />
    <img src="wp.jpeg" className='rounded-full' alt="" />
    <img src="downloa.png" className='rounded-full' alt="" />
    
   
    
  </div>
  <h4>Follow us on</h4>
</div>
<div className='footrightpart'>
  <ul>
    <li>Accessibility</li>
    <li>Privacy Policy</li>
    <li>Contacts</li>
    <li>Complaints</li>
  </ul>
</div>
<div className='footmidpart'>
  <p>
  "© 2025 Swaad Pind Da. All Rights Reserved. 
  | <br />Bringing You the Authentic Taste of Punjab,
   One Jar at a time. <br /> | Contact: info@swaadpindda.com 
   | Designed with ❤️ for Pickle Lovers.
  </p>
</div>

</div>
  </>
  );
}

export default App;
