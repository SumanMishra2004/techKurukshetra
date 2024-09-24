"use client";

import Image from "next/image";
import { Tabs } from "./Tabs";
import TeamSection from "./TeamSection";

export function TabsDemo() {
  const tabs = [


    // {
    //   title: "Mentor",
    //   value: "mentor",
    //   content: (

    //     <DummyContent type="mentor" />

    //   ),
    // },
    {
      title: "Core",
      value: "core",
      content: (

        <DummyContent type="core" />

      ),
    },
    {
      title: "Members",
      value: "member",
      content: (

        <DummyContent type="member" />

      ),
    },
    {
      title: "Volunteer",
      value: "volunteer",
      content: (

        <DummyContent type="volunteer" />

      ),
    },

  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = ({ type }: { type?: string }) => {
  return (
    <div className="w-full h-fit shadow-2xl pb-4  flex justify-start items-start overflow-auto scrollbar-hide rounded-2xl">
      <TeamSection type={type} />

    </div>
  );
};
