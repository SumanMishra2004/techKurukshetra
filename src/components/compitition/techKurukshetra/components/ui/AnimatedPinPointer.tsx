"use client";
import React from "react";
import { PinContainer } from "./3dPin";
import { cn } from "@/lib/utils";

export function AnimatedPinDemo({className,title,position,desc,image}:{className?:string,title?:string,position:string,desc?:string,image?:string}) {
  return (
    <div className="h-[29rem] w-fit flex items-center justify-center ">
      <PinContainer
        title={title}
      >
        <div className={cn("flex basis-full flex-col p-4 tracking-tight text-slate-100/50 sm:basis-1/2 ",className)}>
          <h3 className="max-w-xs !pb-2 !m-0 font-bold text-2xl   text-slate-100">
            {position}
          </h3>
          <div className="text-base !m-0 !p-0 font-normal">
            <span className="text-slate-500 ">
             {desc?desc:"something written over here"}
            </span>
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 overflow-hidden" >
            <img src={image} alt="image" className="h-full w-full" />
            </div>
        </div>
      </PinContainer>
    </div>
  );
}
