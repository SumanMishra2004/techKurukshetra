"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);

  return (
    <>
      {/* Tab Navigation Bar */}
      <div
        className={cn(
          "flex flex-row items-center justify-start [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => setActive(tab)}
            className={cn("relative px-4 py-2 rounded-full", tabClassName)}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full",
                  activeTabClassName
                )}
              />
            )}
            <span className="relative block text-black dark:text-white">
              {tab.title}
            </span>
          </button>
        ))}
      </div>

      {/* Active Tab Content */}
      <FadeInDiv content={active.content} className={cn("mt-32", contentClassName)} />
    </>
  );
};

export const FadeInDiv = ({
  className,
  content,
}: {
  className?: string;
  content?: string | React.ReactNode;
}) => {
  return (
    <div className="relative w-full h-full">
      <motion.div className={cn("w-full h-full absolute top-0 left-0", className)}>
        {content}
      </motion.div>
    </div>
  );
};
