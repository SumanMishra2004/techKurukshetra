import React from "react";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";
import { CardBody, CardContainer, CardItem } from "./3dcard";
import Link from "next/link";

function Events() {
  return (
    <>
      <Fade
        direction="down"
        duration={800}
        className="text-7xl font-bold w-full h-auto py-4 text-white text-center"
      >
        Our Events
      </Fade>
      <div className="w-[100vw] h-[100vh] bg-green-300"> abce</div>
    </>
  );
}

export default Events;
