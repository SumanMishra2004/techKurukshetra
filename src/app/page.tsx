"use client";
import Tilt from "react-parallax-tilt";

import RetroGrid from "@/components/compitition/techKurukshetra/components/magicui/retro-grid";
// import ParticlesContainer from "@/components/compitition/techKurukshetra/components/particle/ParticleComponents";
import { AnimatedPinDemo } from "@/components/compitition/techKurukshetra/components/ui/AnimatedPinPointer";
import Countdown from "@/components/compitition/techKurukshetra/components/ui/DatePicker";
import { StickyScroll } from "@/components/compitition/techKurukshetra/components/ui/FileStickyTimeline";
import { OrbitingCirclesDemo } from "@/components/compitition/techKurukshetra/components/ui/iconRadius";
import NavBar from "@/components/compitition/techKurukshetra/components/ui/LGNavBar";
import PartnerShip from "@/components/compitition/techKurukshetra/components/ui/PartnerShip";
import SMNavbar from "@/components/compitition/techKurukshetra/components/ui/SMNavbar";

import { Fade } from "react-awesome-reveal";
import { timelineData } from "@/components/compitition/techKurukshetra/components/timelineComponents";

import Rules from "@/components/compitition/techKurukshetra/components/ui/rules";
import Faq from "@/components/compitition/techKurukshetra/components/ui/faq";

import Footer from "@/components/compitition/techKurukshetra/components/ui/Footer";
import { TabsDemo } from "@/components/compitition/techKurukshetra/components/ui/TabsDemo.Team";
import HomeDevfoliobutton from "@/components/compitition/techKurukshetra/components/ui/HomeDevfoliobutton";
import HomeDiscordButton from "@/components/compitition/techKurukshetra/components/ui/HomeDiscordButton";
import { useEffect, useState } from "react";
import Loader from "@/components/compitition/techKurukshetra/components/ui/Loader";
import TypingAnimation from "@/components/compitition/techKurukshetra/components/magicui/typing-animation";
import { ArrowBigDownDash, DownloadCloudIcon, Facebook, InstagramIcon, LinkedinIcon, Twitter } from "lucide-react";

export default function Home() {
  let dt = new Date().getTime();
  let main_dt = new Date("Septembar 27, 2024,9:30:00").getTime();
  const days_difference = Math.abs(main_dt - dt) / (1000 * 60 * 60 * 24);

  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay
    
  }, []);

  if (loading) {
    return <Loader />;
  }
  
  return (
    <div className="h-screen w-screen bg-[conic-gradient(at_bottom_right,_var(--tw-gradient-stops))] from-blue-700 via-blue-800 to-gray-900 overflow-auto scrollbar-hide dark overflow-x-hidden scroll-smooth">
      <div className="w-full max-w-screen h-20 bg-gray-500/20 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70   top-0 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]   border-b-2 border-black z-[999] fixed">
        <div className="h-full w-full justify-center items-center lg:flex hidden ">
          <NavBar />
        </div>
        <div className="h-full w-full justify-center items-center lg:hidden flex ">
          <SMNavbar />
        </div>
      </div>
      <div className=" w-screen h-[100vh]">
        <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden bg-[url('/trynew2.jpg')]  bg-cover bg-no-repeat   bg-bottom">
          {/* <RetroGrid /> */}
          {/* <span className="  -left-[10.5rem] animate-spin duration-700 h-[50%] -bottom-20 w-[20rem] overflow-hidden z-20 fixed"> 
            <img src="/cogwheel.png" alt="" className="w-full h-auto"/>
          </span>
          <span className="  -right-[10.5rem] animate-spin duration-700 top-0 h-[50%] w-[20rem] overflow-hidden z-20 fixed"> 
            <img src="/cogwheel.png" alt="" className="w-full h-auto"/>
          </span> */}
          <div className="h-full w-full  flex justify-center  items-center flex-col pt-36 sm:pt-0">
           <img src="/techKurukshetra/logo.png" className="h-[12rem] w-fit overflow-hidden  lg:h-[13rem] "/>
           <HomeDevfoliobutton/>
           <HomeDiscordButton/>
           <ArrowBigDownDash className="h-[5rem] w-fit overflow-hidden text-white absolute right-0 bottom-0 animate-bounce"/>
           <div className="bg-gray-500/25 border border-black h-full w-[5rem] md:flex justify-center items-center  absolute left-5 top-0 hidden rounded-md">
            <div className="h-fit rounded-3xl w-full  flex items-center py-7 justify-center">
            <TypingAnimation text="A war like never before " className="rotate-180 vertical-rl text-5xl text-white text-end text-nowrap pb-3 bg-gradient-to-br from-sky-500 via-violet-600 to-cyan-300 bg-clip-text text-transparent"/>
                 
             
            </div>

           </div>
           <div className="w-full h-[5rem] bg-gray-500/20 absolute bottom-5 border border-black rounded-md flex justify-center items-center gap-5">
           <a target="_blank" href="" className="h-[2rem] w-[2rem] md:size-[3rem] rounded-md flex justify-center items-center border-blue-500 border-2 shadow-2xl hover:scale-[1.2] duration-300" >
            <Facebook className="h-[85%] w-auto text-white"/>

           </a>
           <a target="_blank" href="" className="h-[2rem] w-[2rem] md:size-[3rem] rounded-md flex justify-center items-center border-blue-500 border-2 shadow-2xl hover:scale-[1.2] duration-300" >
            <LinkedinIcon className="h-[85%] w-auto text-white"/>

           </a>
           <a target="_blank" href="" className="h-[2rem] w-[2rem] md:size-[3rem] rounded-md flex justify-center items-center border-blue-500 border-2 shadow-2xl hover:scale-[1.2] duration-300" >
            <InstagramIcon className="h-[85%] w-auto text-white"/>

           </a>
           <a target="_blank" href="" className="h-[2rem] w-[2rem] md:size-[3rem] rounded-md flex justify-center items-center border-blue-500 border-2 shadow-2xl hover:scale-[1.2] duration-300" >
            <Twitter className="h-[85%] w-auto text-white"/>

           </a>
           
           </div>
           </div>
        </div>
      </div>
      <Countdown dt={days_difference * 24 * 60 * 60 * 1000} />
      <div className="h-auto w-full relative bg-gradient-to-r from-black via-transparent to-black ">
        <div className=" h-fit w-full relative inset-0 z-[555] ">
          <div
            className=" z-20 md:h-screen h-fit py-7 w-full flex justify-around md:flex-row flex-col items-center   "
            id="about"
          >
            <div className="h-auto md:w-[40%] w-[90%] text-justify text-white flex flex-col justify-center items-center gap-5 py-4">
              <Fade
                direction="down"
                duration={800}
                className="text-5xl font-bold italic"
              >
                About Us
              </Fade>
              <Fade direction="right" duration={800}>
              Tech Kurukshetra is a premier technical project competition organized by the Department of Computer Science and Engineering (IoT, CS, and BT) in collaboration with the Innovation and Entrepreneurship Development Cell (IEDC). 
              </Fade>
              <Fade direction="left" duration={900} delay={500}>
              This event serves as a dynamic platform for students to showcase their innovative projects and technical prowess, encouraging creativity, problem-solving, and real-world application of their skills.
              </Fade>
              <Fade direction="right" duration={1200} delay={100}>
              Tech Kurukshetra brings together aspiring technologists and future entrepreneurs, fostering a spirit of innovation and collaboration in a competitive yet supportive environment.
              </Fade>
            </div>
            <Fade
              direction="down"
              duration={1500}
              className="h-fit md:w-[30%] w-[90%] "
            >
              <OrbitingCirclesDemo />
            </Fade>
          </div>
          {/* <ParticlesContainer /> */}
          <div
            className="relative z-[555] w-full 2xl:h-[120vh] md:h-[200vh] max-h-fit "
            id="domain"
          >
            <div className=" relative z-[555]  h-fit py-14 px-3 md:px-0 ">
              <Fade
                className="w-full  h-auto md:text-[5rem] font-extrabold text-white flex justify-center items-center pb-6 text-5xl"
                direction="up"
                triggerOnce
              >
                Our Domain
              </Fade>
              <div className="flex h-full w-full flex-col flex-wrap justify-around items-center gap-4  lg:flex-row">
                <Fade
                  direction="right"
                  className="md:w-[20rem] w-full h-[22rem]"
                  duration={800}
                  delay={800}
                >
                  <Tilt
                    perspective={500}
                    scale={1.1}
                    className="parent-element h-[20rem] md:w-[18rem] w-full rounded-3xl bg-[url('/techKurukshetra/aimlBG.jpg')] bg-cover bgPositionSetup"
                  >
                    <div className="h-full w-full text-white text-2xl font-bold flex items-center justify-center  inner-element">
                      <h1 className=" bg-black/25 h-fit w-auto rounded-md ">
                        AI/ML
                      </h1>
                    </div>
                  </Tilt>
                </Fade>
                <Fade
                  direction="right"
                  className="md:w-[20rem] w-full h-[22rem]"
                  duration={500}
                  delay={500}
                >
                  <Tilt
                    perspective={500}
                    className="parent-element h-[20rem] md:w-[18rem] w-full rounded-3xl bg-[url('/techKurukshetra/healthTech.jpg')] bg-cover"
                  >
                    <div className="h-full w-full text-white text-xl font-bold flex items-center justify-center inner-element ">
                      <h1 className=" bg-black/25 h-fit w-auto rounded-md">
                        Health Tech
                      </h1>
                    </div>
                  </Tilt>
                  Card
                </Fade>
                <Fade
                  direction="left"
                  className="md:w-[20rem] w-full h-[22rem]"
                  duration={500}
                  delay={500}
                >
                  {" "}
                  <Tilt
                    perspective={500}
                    className="parent-element h-[20rem] md:w-[18rem] w-full rounded-3xl bg-[url('/techKurukshetra/security.jpg')] bg-cover"
                  >
                    <div className="h-full w-full text-white text-xl font-bold flex items-center justify-center inner-element ">
                      <h1 className="text-lg  bg-black/25 h-fit w-auto rounded-md">
                        SECURITY
                      </h1>
                    </div>
                  </Tilt>
                </Fade>
                <Fade
                  direction="left"
                  className="md:w-[20rem] w-full h-[22rem]"
                  duration={800}
                  delay={800}
                >
                  <Tilt
                    perspective={500}
                    className="parent-element h-[20rem] md:w-[18rem] w-full rounded-3xl bg-[url('/techKurukshetra/fintech.jpg')] bg-cover"
                  >
                    <div className="h-full w-full text-white text-xl font-bold flex items-center justify-center inner-element ">
                      <h1 className="  bg-black/25 h-fit w-auto rounded-md">
                        FINTECH
                      </h1>
                    </div>
                  </Tilt>
                </Fade>
                <Fade
                  direction="right"
                  className="md:w-[20rem] w-full h-[22rem]"
                  duration={800}
                  delay={500}
                >
                  <Tilt
                    perspective={500}
                    className="parent-element h-[20rem] md:w-[18rem] w-full rounded-3xl bg-[url('/techKurukshetra/websitetech.jpg')] bg-cover"
                  >
                    <div className="h-full w-full text-white text-xl font-bold flex items-center justify-center inner-element ">
                      <h1 className="  bg-black/25 h-fit w-auto rounded-md">
                        WEB TECH
                      </h1>
                    </div>
                  </Tilt>
                </Fade>
                <Fade
                  direction="left"
                  className="md:w-[20rem] w-full h-[22rem]"
                  duration={800}
                  delay={800}
                >
                  <Tilt
                    perspective={500}
                    className="parent-element h-[20rem] md:w-[18rem] w-full rounded-3xl bg-[url('/techKurukshetra/appDev.jpg')] bg-cover"
                  >
                    <div className="h-full w-full text-white text-xl font-bold flex items-center justify-center inner-element ">
                      <h1 className="  bg-black/25 h-fit w-auto rounded-md">
                        APP TECH
                      </h1>
                    </div>
                  </Tilt>
                </Fade>
                <Fade
                  direction="right"
                  className="md:w-[20rem] w-full h-[22rem]"
                  duration={800}
                  delay={500}
                >
                  <Tilt
                    perspective={500}
                    className="parent-element h-[20rem] md:w-[18rem] w-full rounded-3xl bg-[url('/techKurukshetra/openToAll.jpg')] bg-cover"
                  >
                    <div className="h-full w-full text-white text-xl font-bold flex items-center justify-center inner-element ">
                      <h1 className="  bg-black/25 h-fit w-auto rounded-md">
                        OPEN PROJECTS
                      </h1>
                    </div>
                  </Tilt>
                </Fade>
              </div>
            </div>
          </div>
          <div
            className="PrizeArea h-fit py-24 w-full flex justify-around items-center flex-col relative z-[555]"
            id="prize"
          >
            <Fade
              className="w-full  h-auto md:text-[5rem] font-extrabold text-white flex justify-center items-center pb-6 text-5xl"
              direction="down"
              duration={1300}
            >
              Our Prizes
            </Fade>
            <div className="h-fit w-full flex justify-around items-center flex-wrap flex-row ">
              <Fade direction="right" duration={800} delay={500} triggerOnce>
                <AnimatedPinDemo
                  className="w-[20rem] h-[25rem]"
                  title="20000 Rs"
                  position="second"
                  image="/techKurukshetra/secondPrize.jpg"
                />
              </Fade>
              <Fade direction="left" duration={800} delay={500} triggerOnce>
                <AnimatedPinDemo
                  className="w-[20rem] h-[25rem]"
                  title="30000 Rs"
                  position="First"
                  image="/techKurukshetra/firstPrize.jpg"
                />
              </Fade>
              <Fade direction="right" duration={800} delay={500} triggerOnce>
                <AnimatedPinDemo
                  className="w-[20rem] h-[25rem]"
                  title="10000 Rs"
                  position="Third"
                  image="/techKurukshetra/thirdPrize.png"
                />
              </Fade>
            </div>
          </div>
          <div
            className="paartnearArea w-screen h-fit flex items-center justify-between flex-col relative z-[555]"
            id="partner"
          >
            <Fade direction="down">
              <div className="md:text-[5rem] text-[2.5rem] font-extrabold text-white italic h-auto w-full">
                Our Partners
              </div>
            </Fade>
            <div className="h-full  w-[90%] flex flex-col gap-8">
              <PartnerShip />
            </div>
          </div>
          <div
            className="relative z-[555] h-fit w-screen  flex flex-col justify-center items-center py-10 md:py-5 "
            id="timeline"
          >
            <Fade direction="down" triggerOnce>
              <h1 className="md:text-6xl  text-4xl py-6 font-bold text-white">
                Timeline
              </h1>
            </Fade>
            <div className="md:h-[75%] h-full w-full box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;">
              <StickyScroll content={timelineData} />
            </div>
          </div>
          <div
            className="h-fit w-full flex flex-col gap-3 items-center justify-center"
            id="team"
          >
            <div className="w-full h-fit text-white text-6xl font-extrabold text-center">
              Our Teams
            </div>
            <div className="w-full h-fit flex">
              <TabsDemo />
            </div>
          </div>
          <Rules />
          <Faq />
          <Footer />
        </div>{" "}
      </div>
    </div>
  );
}