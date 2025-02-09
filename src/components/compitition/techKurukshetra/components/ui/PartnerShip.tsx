import Image from "next/image";
import React from "react";
import { Fade } from "react-awesome-reveal";

function PartnerShip() {
  return (
    <>
      <div className="flex h-fit w-[90vw] flex-col justify-between items-start">
        {/* <Fade direction="left" duration={1000} triggerOnce>
          <h1 className="text-white text-[2rem] font-bold">Premium Partners</h1>
        </Fade> */}

        <div className="md:h-fit h-fit w-full flex flex-wrap justify-center gap-16 items-center ">
          <div className="flex flex-col gap-7 md:flex-row md:gap-7 items-center justify-between w-full">

          
          <Fade direction="right" triggerOnce>
            <div className="elements1 justify-center h-[10rem] w-[18rem] rounded-tl-xl rounded-br-xl border-2 flex flex-col items-center overflow-hidden shadow-2xl shadow-white">
              {/* <h1 className="text-[1.7rem] font-bold text-white">Collaboration with</h1> */}
              <div className="w-full h-[8rem]  rounded-lg flex justify-center items-center">
              <img src="/iedclogo.png" className="h-full w-auto "/>
              </div>
            </div>
          </Fade>
          <Fade direction="left" triggerOnce>
            <div className="elements1 justify-center h-[10rem] w-[18rem] rounded-tl-xl rounded-br-xl border-2 flex flex-col items-center overflow-hidden  shadow-2xl shadow-white">
              {/* <h1 className="text-[2rem] font-bold h-fit text-white">IIC</h1> */}
              <img src={'/iic.png'} alt="devfolio" className="bg-white  max-w-full  rounded-sm w-full h-auto aspect-[20/8]"/>
              
            </div>
          </Fade>
           <Fade direction="right" triggerOnce>
            <div className="elements1 justify-center h-[10rem] w-[18rem] rounded-tl-xl rounded-br-xl border-2 flex flex-col items-center  shadow-2xl shadow-white">
              {/* <h1 className="text-white text-[2rem] font-bold">GFG</h1> */}
              <img src={'/GFG.png'} alt="gfg" className="  max-w-full h-[10rem] w-auto"/>
            </div>
          </Fade></div><div className="flex flex-col gap-7 md:flex-row md:gap-7 justify-around w-full items-center">
          <Fade direction="down" triggerOnce>
            <div className="elements1 h-[10rem] w-[18rem] rounded-tl-xl rounded-br-xl border-2 flex flex-col items-center justify-center  shadow-2xl shadow-white">
             
              <img src={'/ieee.png'} alt="gfg" className=" h- scale object-center"/>
            </div>
          </Fade>
          <Fade direction="up" triggerOnce>
            <a href="https://chat.whatsapp.com/IBSwLrewTFNE60s6jpAL1w" className="elements1 h-fit overflow-hidden w-[18rem] rounded-tl-xl rounded-br-xl border-2 flex flex-col items-center shadow-2xl shadow-white">
              
              <img src={'/hackx.jpg'} alt="hackx" className=" object-contain bg-no-repeat scale-100"/>
            </a>
          </Fade></div>
        </div>
      </div>
     
      {/* <div className="flex h-fit w-[90vw] flex-col justify-between items-start">
        <Fade direction="left" duration={1000} triggerOnce>
          <h1 className="text-white text-[2rem] font-bold"> Partners</h1>
        </Fade>

        <div className="md:h-fit h-fit w-full flex flex-wrap justify-start gap-7 items-center ">
          <Fade direction="right" triggerOnce>
            <div className="elements1 h-[10rem] w-[18rem] rounded-tl-xl rounded-br-xl border-2 flex flex-col items-center">
              <h1 className="text-[1.5rem] font-bold">IEDC</h1>
              <div className="w-full h-[7rem] rounded-lg bg-green-400"></div>
            </div>
          </Fade>
          <Fade direction="down" triggerOnce>
            <div className="elements1 h-[10rem] w-[18rem] rounded-tl-xl rounded-br-xl border-2 flex flex-col items-center">
              <h1 className="text-[1.5rem] font-bold">IEDC</h1>
              <div className="w-full h-[7rem] rounded-lg bg-green-400"></div>
            </div>
          </Fade>{" "}
          <Fade direction="left" triggerOnce>
            <div className="elements1 h-[10rem] w-[18rem] rounded-tl-xl rounded-br-xl border-2 flex flex-col items-center">
              <h1 className="text-[1.5rem] font-bold">IEDC</h1>
              <div className="w-full h-[7rem] rounded-lg bg-green-400"></div>
            </div>
          </Fade>
        </div>
      </div> */}
    </>
  );
}

export default PartnerShip;
