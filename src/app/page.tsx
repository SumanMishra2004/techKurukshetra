"use client";

import { AnimatedPinDemo } from "@/components/compitition/techKurukshetra/components/ui/AnimatedPinPointer";
import Countdown from "@/components/compitition/techKurukshetra/components/ui/DatePicker";
import { StickyScroll } from "@/components/compitition/techKurukshetra/components/ui/FileStickyTimeline";

import NavBar from "@/components/compitition/techKurukshetra/components/ui/LGNavBar";
import PartnerShip from "@/components/compitition/techKurukshetra/components/ui/PartnerShip";
import SMNavbar from "@/components/compitition/techKurukshetra/components/ui/SMNavbar";
import { Fade } from "react-awesome-reveal";
import { timelineData } from "@/components/compitition/techKurukshetra/components/timelineComponents";

import Rules from "@/components/compitition/techKurukshetra/components/ui/rules";
import IconCloudDemo from "@/components/compitition/techKurukshetra/components/ui/IconCloud";
import Faq from "@/components/compitition/techKurukshetra/components/ui/faq";

import Footer from "@/components/compitition/techKurukshetra/components/ui/Footer";
import { TabsDemo } from "@/components/compitition/techKurukshetra/components/ui/TabsDemo.Team";
import HomeDevfoliobutton from "@/components/compitition/techKurukshetra/components/ui/HomeDevfoliobutton";
import HomeDiscordButton from "@/components/compitition/techKurukshetra/components/ui/HomeDiscordButton";
import { useEffect, useRef, useState } from "react";
import Loader from "@/components/compitition/techKurukshetra/components/ui/Loader";
import TypingAnimation from "@/components/compitition/techKurukshetra/components/magicui/typing-animation";
import {
  ArrowBigDownDash,
  DownloadCloudIcon,
  Facebook,
  InstagramIcon,
  LinkedinIcon,
  Twitter,
  Wheat,
} from "lucide-react";
import Events from '@/components/compitition/techKurukshetra/components/ui/Events'
import Event from "@/components/ui/Event";

export default function Home() {
  
  let dt = new Date().getTime();
  let main_dt = new Date("October 26, 2024,9:30:00").getTime();
  const days_difference = Math.abs(main_dt - dt) / (1000 * 60 * 60 * 24);

  const [loading, setLoading] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Simulate a data fetch
    setTimeout(() => {
      setLoading(false);
    }, 2000); // 2 seconds delay
  }, []);

  //  if (loading) {
  //    return <Loader />;
  //  }


  return (
    <div className="h-screen w-screen overflow-auto scrollbar-hide dark overflow-x-hidden scroll-smooth bg-black">
      <div className="w-full max-w-screen h-20 bg-gray-500/20  rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-70   top-0 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)]   border-b-2 border-black z-[999] fixed">
        <div className="h-full w-full justify-center items-center lg:flex hidden ">
          <NavBar />
        </div>
        <div className="h-full w-full justify-center items-center lg:hidden flex ">
          <SMNavbar />
        </div>
      </div>
      {loading && <Loader />}
      <div className={`w-full h-auto ${loading ? "hidden" : "block"} `}>


        <div className=" w-screen h-[100vh] relative ">

          <video
            src="/tryvideo.mp4"
            className="z-0 absolute top-0 left-0 w-full h-full object-cover"
            loop
            muted
            autoPlay
          />

          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden ">
            {/* <RetroGrid />  */}
            {/* <span className="  -left-[10.5rem] animate-spin duration-700 h-[50%] -bottom-20 w-[20rem] overflow-hidden z-20 fixed"> 
  <img src="/cogwheel.png" alt="" className="w-full h-auto"/>
</span>
<span className="  -right-[10.5rem] animate-spin duration-700 top-0 h-[50%] w-[20rem] overflow-hidden z-20 fixed"> 
  <img src="/cogwheel.png" alt="" className="w-full h-auto"/>
</span> */}

            <div className="h-full w-full  flex justify-center md:justify-center  items-center flex-col sm:pt-0 gap-9" id="first">
              <img
                src="/techKurukshetra/logo.png"
                className="h-[12rem] w-fit overflow-hidden  lg:h-[13rem] z-50"
              />



              <TypingAnimation text="Welcome to Tech Kurukshetra" className=" md:text-6xl text-2xl font-semibold shadow-2xl personalText " />

              <Fade className="absolute bottom-0 right-0 h-full w-fit " direction="right" duration={600} >

                <img
                  src="/manAi.png"
                  className="h-full w-fit overflow-hidden text-white relative  -right-28 -bottom-28  z-0 hidden lg:block -rotate-12 mix-blend-screen"
                />
              </Fade>

              <div className="bg-gray-500/25 border border-black h-full w-[5rem] md:flex justify-center items-center  absolute left-5 top-0 hidden rounded-md">
                <div className="h-fit rounded-3xl w-full  flex items-center py-7 justify-center">
                  <TypingAnimation
                    text="A war like never before "
                    className="rotate-180 vertical-rl text-[7vh] text-white text-end text-nowrap pb-3 bg-gradient-to-br from-sky-500 via-violet-600 to-cyan-300 bg-clip-text text-transparent"
                  />
                </div>
              </div>
              <div className="w-full h-[5rem] bg-gray-500/20 absolute bottom-5 border border-black rounded-md flex justify-center items-center gap-5 z-10">
                <a
                  target="_blank"
                  href="https://www.facebook.com/profile.php?id=61565313783147&mibextid=ZbWKwL"
                  className="h-[2rem] w-[2rem] md:size-[3rem] rounded-md flex justify-center items-center border-blue-500 border-2 shadow-2xl hover:scale-[1.2] duration-300"
                >
                  <Facebook className="h-[85%] w-auto text-white" />
                </a>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/tech-kurukshetra-8623a5327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  className="h-[2rem] w-[2rem] md:size-[3rem] rounded-md flex justify-center items-center border-blue-500 border-2 shadow-2xl hover:scale-[1.2] duration-300"
                >
                  <LinkedinIcon className="h-[85%] w-auto text-white" />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/tech.kurukshetra?igsh=dXo0OGEyNWFvOGly"
                  className="h-[2rem] w-[2rem] md:size-[3rem] rounded-md flex justify-center items-center border-blue-500 border-2 shadow-2xl hover:scale-[1.2] duration-300"
                >
                  <InstagramIcon className="h-[85%] w-auto text-white" />
                </a>

              </div>
            </div>
          </div>
        </div>


        <div className="w-full h-auto bg-gradient-to-t from-black via-blue-950 to-blue-900/65">
          <div className="w-full h-[25rem] sm:min-h-fit flex justify-center items-center relative ">


            <Countdown dt={days_difference * 24 * 60 * 60 * 1000} />
          </div>
          <div className="h-auto w-full relative ">

            <div className=" h-fit w-full relative inset-0 z-[555] ">
              <div
                className=" z-20 md:h-screen h-fit py-7 w-full flex justify-around md:flex-row flex-col items-center   "
                id="about"
              >
                <div className="h-auto md:w-[40%] w-[90%] text-justify text-white flex flex-col justify-center items-center gap-5 py-4 text-xl">
                  <Fade
                    direction="down"
                    duration={800}
                    className="text-5xl font-bold "
                  >
                    About Us
                  </Fade>
                  <Fade direction="right" duration={800}>
                    Tech Kurukshetra is a premier technical fest where innovation meets competition! Scheduled for 26th October 2024, Tech Kurukshetra offers a dynamic platform for tech enthusiasts to showcase their talents across a variety of domains, including project competitions, coding challenges, technical writing, and poster design.
                  </Fade>
                  <Fade direction="left" duration={900} delay={500}>
                    Whether you are a coder, creator, or communicator. this event promises a thrilling experience of learning, collaboration, and recognition. Join us for a day of creativity and competition, where bright minds come together to shape the future of technology!
                  </Fade>
                  <Fade direction="right" duration={1200} delay={100}>
                    Tech Kurukshetra brings together aspiring technologists and
                    future entrepreneurs, fostering a spirit of innovation and
                    collaboration in a competitive yet supportive environment.
                  </Fade>
                </div>
                <Fade
                  direction="down"
                  duration={1500}
                  className="h-fit md:w-[30%] w-[90%] overflow-hidden "
                >
                  <IconCloudDemo />
                </Fade>
              </div>
              {/* <ParticlesContainer /> */}
              {/* <div
                className="relative z-[555] w-full h-fit flex justify-between items-center md:flex-row-reverse flex-col"
                id="domain"
              >
                <div className="writtenArea flex flex-col h-full w-full md:w-[50%] px-7 justify-between items-center ">
                  <Fade
                    direction="down"
                    triggerOnce
                    className="w-full text-center text-4xl text-white font-bold py-3"
                  >
                    Domain for Projects
                  </Fade>
                  <div className="w-full h-fit">
                    <Fade
                      direction="left"
                      triggerOnce
                      className="w-full text-justify text-xl text-white py-3"
                    >
                     We are excited to announce our upcoming Project Competition, an excellent opportunity for innovators and problem-solvers to showcase their talent. The event features an Open Project Session, where participants can present their projects to a wide audience, including industry experts, mentors, and fellow enthusiasts. This session allows participants to engage directly with attendees, gather feedback, and network with peers.


                    </Fade>
                    <Fade
                      direction="right"
                      triggerOnce
                      className="w-full text-justify text-xl text-white  py-3"
                    >
                      Whether you are working on cutting-edge technology, innovative solutions, or impactful community projects, this competition is the perfect platform to highlight your work and take it to the next level. We encourage all participants to come prepared to explain their ideas, demonstrate their projects, and inspire others with their creativity and hard work.


                    </Fade>
                  </div>
                </div>
                <Fade
                  className="h-fit md:w-[40%] w-full"
                  direction="left"
                  triggerOnce
                >
                  <img src="/alldomain.png" className="h-auto w-full" />
                </Fade>
              </div> */}
           <Event/>
              <div
                className="paartnearArea w-screen h-fit flex items-center justify-between flex-col relative z-[555]"
                id="partner"
              >
                <Fade direction="down">
                  <div className="md:text-[5rem] text-[2.5rem] font-extrabold text-white  h-auto w-full">
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
                <div className="w-full h-fit flex flex-col gap-9 md:items-center items-start my-8" >
                  <Fade direction='down' triggerOnce className="w-[80%] lg:w-[70%] ">

                    <div className="items w-[100%] h-auto py-5 bg-blue-100 border-purple-200 border-2 rounded-lg pl-9 relative  hover:translate-x-[2rem] duration-1000 ease-in-out ml-5 lg:ml-0 hover:rotate-image cursor-pointer shadow-lg shadow-white">
                      <span className='h-fit w-auto rounded-2xl bg-black absolute -left-14 -top-7 text-white text-center py-2 px-4'>
                        <img
                          src='rombosWhite.png'
                          className='inline text-white pr-3 transition-transform duration-300 ease-in-out h-6 w-10'
                        />
                        28.09.2024
                      </span>
                      <p className='px-9 w-full mx-auto font-[300] text-xl'>
                        Tech Kurukshetra is live now. Dive into the world of innovation cutting-edge projects and explore limitless possibilities !
                      </p>
                    </div>

                  </Fade>

                  <Fade direction='left' triggerOnce className="w-[80%] lg:w-[70%] ">

                    <div className="items w-[100%] h-auto py-5 bg-blue-200 border-purple-300 border-2 rounded-lg pl-9 relative  hover:translate-x-[2rem] duration-1000 ease-in-out ml-5 lg:ml-0 hover:rotate-image cursor-pointer shadow-lg shadow-white">
                      <span className='h-fit w-auto rounded-2xl bg-black absolute -left-14 -top-7 text-white text-center py-2 px-4'>
                        <img
                          src='rombosWhite.png'
                          className='inline text-white pr-3 transition-transform duration-300 ease-in-out h-6 w-10'
                        />
                        28.09.2024
                      </span>
                      <p className='px-9 w-full mx-auto font-[400] text-xl'>
                        We are thrilled to announce that the registration has started already. So what are you waiting for ? Go and  Register !
                      </p>
                    </div>

                  </Fade>

                  <Fade direction='right' triggerOnce className="w-[80%] lg:w-[70%] ">

                    <div className="items w-[100%] h-auto py-5 bg-blue-300 border-blue-400 border-2 rounded-lg pl-9 relative hover:translate-x-[2rem] duration-1000 ease-in-out ml-5 lg:ml-0 hover:rotate-image cursor-pointer shadow-lg shadow-white">
                      <span className='h-fit w-auto rounded-2xl bg-black absolute -left-14 -top-7 text-white text-center py-2 px-4'>
                        <img
                          src='rombosWhite.png'
                          className='inline text-white pr-3 transition-transform duration-300 ease-in-out h-6 w-10'
                        />
                        15.10.2024
                      </span>
                      <p className='px-9 w-full mx-auto font-[500] text-xl'>
                        The  registration for Tech Kurukshetra is now closed. Get reay to witness ground breaking innovation. Stay tuned!
                      </p>
                    </div>

                  </Fade>

                  <Fade direction='up' triggerOnce className="w-[80%] lg:w-[70%]">

                    <div className="items w-[100%] h-auto py-5 bg-blue-400 border-blue-500 border-2 rounded-lg pl-9 relative shadow-lg hover:translate-x-[2rem] duration-1000 ease-in-out ml-5 lg:ml-0 hover:rotate-image cursor-pointer shadow-white">
                      <span className='h-fit w-auto rounded-2xl bg-black absolute -left-14 -top-7 text-white text-center py-2 px-4'>
                        <img
                          src='rombosWhite.png'
                          className='inline text-white pr-3 transition-transform duration-300 ease-in-out h-6 w-10'
                        />
                        20.10.2024
                      </span>
                      <p className='px-9 w-full mx-auto font-[600] text-xl'>
                        The selected teams for project competition will be declared.
                      </p>
                    </div>

                  </Fade>

                  <Fade direction='down' triggerOnce className="w-[80%] lg:w-[70%]">

                    <div className="items w-[100%] h-auto py-5 bg-blue-500 border-blue-600 border-2 rounded-lg pl-9 relative shadow-lg hover:translate-x-[2rem] duration-1000 ease-in-out ml-5 lg:ml-0 hover:rotate-image cursor-pointer shadow-white">
                      <span className='h-fit w-auto rounded-2xl bg-black absolute -left-14 -top-7 text-white text-center py-2 px-4'>
                        <img
                          src='rombosWhite.png'
                          className='inline text-white pr-3 transition-transform duration-300 ease-in-out h-6 w-10'
                        />
                        26.10.2024
                      </span>
                      <p className='px-9 w-full mx-auto font-[700] text-xl'>
                        The event will start from 11:00 am sharp. Lets join together to make the event successful.
                      </p>
                    </div>

                  </Fade>

                  <Fade direction='down' triggerOnce className="w-[80%] lg:w-[70%]">

                    <div className="items w-[100%] h-auto py-5 bg-blue-600 border-blue-950 border-2 rounded-lg pl-9 relative shadow-lg hover:translate-x-[2rem] duration-1000 ease-in-out ml-5 lg:ml-0 hover:rotate-image cursor-pointer shadow-white">
                      <span className='h-fit w-auto rounded-2xl bg-black absolute -left-14 -top-7 text-white text-center py-2 px-4'>
                        <img
                          src='rombosWhite.png'
                          className='inline text-white pr-3 transition-transform duration-300 ease-in-out h-6 w-10'
                        />
                        26.10.2024
                      </span>
                      <p className='px-9 w-full mx-auto font-[800] text-xl'>
                        Tech Kurukshetra will end at 5:00pm. We will come back again with much much interesting events in the upcoming days .
                      </p>
                    </div>

                  </Fade>



                </div>
              </div>
              <div
                className="h-fit w-full flex flex-col gap-3 items-center justify-center"
                id="team"
              >
                <div className="w-full h-fit text-white text-6xl font-extrabold text-center">
                  Our Teams
                </div>
                <div className="w-full  h-fit flex">
                  <TabsDemo />
                </div>
              </div>
              <Faq />
              <Footer />
              
            
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
