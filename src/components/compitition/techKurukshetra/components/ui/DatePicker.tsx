import React, { useState, useEffect } from "react";

import { Fade } from "react-awesome-reveal";
import TypingAnimation from "../magicui/typing-animation";

interface CountdownProps {
  dt: number;
}

const Countdown: React.FC<CountdownProps> = ({ dt }) => {
  const [time, setTime] = useState<number>(dt);
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const interval = setInterval(() => {
        setTime(prevTime => {
          if (prevTime <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prevTime - 1000;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [mounted]);

  if (!mounted) return null; // Render nothing until the component is mounted

  const formattedTimedays = (milliseconds: number): string => {
    let seconds = Math.floor(milliseconds / 1000);
    let days = Math.floor(seconds / (60 * 60 * 24));
    return days < 10 ? `0${days}` : `${days}`;
  };

  const formattedTimehr = (milliseconds: number): string => {
    let seconds = Math.floor(milliseconds / 1000);
    let hours = Math.floor((seconds % (60 * 60 * 24)) / (60 * 60));
    return hours < 10 ? `0${hours}` : `${hours}`;
  };

  const formattedTimemint = (milliseconds: number): string => {
    let seconds = Math.floor(milliseconds / 1000);
    let minutes = Math.floor((seconds % (60 * 60)) / 60);
    return minutes < 10 ? `0${minutes}` : `${minutes}`;
  };

  const formattedTimesec = (milliseconds: number): string => {
    let seconds = Math.floor(milliseconds / 1000);
    let secs = seconds % 60;
    return secs < 10 ? `0${secs}` : `${secs}`;
  };

  return (
    <div
      id="next"
      className="z-10 text-white w-[100%] h-full flex flex-col justify-center items-center count  relative"
    >
        <Fade direction="down" duration={1500}>

        <TypingAnimation duration={200}
        className="w-full h-auto text-white md:text-[3.5rem] text-[2rem] font-extrabold pb-4 text-playfair" text="Waiting few more time "/>
           
    
        </Fade>
      <div className="time flex flex-col items-center justify-center sm:-mt-10 montserrat font-bold">
        <span className="md:text-[4rem] sm:text-[2rem] text-[1.3rem] scale-[1] xxxs:scale-[1.5] xs:scale-[2] sm:scale-[1] mt-[2rem] flex flex-row justify-center items-center text-center gap-[1rem] w-full">
        <Fade direction="left" duration={1500}>

          <span className="days">
            <p className="text-center mont">{formattedTimedays(time)} :</p>
            <p className="text-[0.8rem] sm:text-[1.5rem] text-left px-2 flex justify-start font-advent time_info fair">
              Days
            </p>
          </span>
        </Fade>
          <Fade direction="left">

          <span className="hour">
            <p className="text-center mont">{formattedTimehr(time)} :</p>
            <p className="text-[0.8rem] sm:text-[1.5rem] font-advent text-left sm:pl-[0.5rem] flex justify-start time_info fair">
              Hour
            </p>
          </span>
          </Fade>
          <Fade direction="right">

          <span className="minutes">
            <p className="text-center mont">{formattedTimemint(time)} :</p>
            <p className="text-[0.8rem] sm:text-[1.5rem] font-advent text-left px-0 sm:pr-[1.5rem] flex justify-center time_info fair">
              Minutes
            </p>
          </span>
          </Fade>
          <Fade direction="right" duration={1500}>

          <span className="seconds">
            <p className="text-left mont">{formattedTimesec(time)}</p>
            <p className="text-[0.8rem] sm:text-[1.5rem] font-advent text-left px-0 flex justify-center time_info">
              Seconds
            </p>
          </span>
          </Fade>
        </span>
      </div>
    </div>
  );
};

export default Countdown;
