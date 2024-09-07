
import React, { ReactElement, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavItems from "../NavItems";
import Link from "next/link";

function SMNavbar(): ReactElement {
  const buttonRef = useRef<HTMLDivElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Close sidebar when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="navItems w-[95%] h-[90%] flex justify-between items-center">
      <div className="h-[4rem] w-[9rem] flex gap-3">
        <img
          src="/uemLogo.png"
          alt="uem logo"
          className="h-full w-1/2 rounded-xl"
        />
        <img
          src="/iemLogo.png"
          alt="iem logo"
          className="h-full w-1/2 rounded-xl"
        />
      </div>
      <div className="h-full w-auto flex items-center  ">
        <img
          src="/techKurukshetra/logo.png"
          alt="logo"
          className="w-[8.5rem] h-auto"
        />
      </div>
      <div
        className="h-[4rem] w-[4rem] flex items-center justify-center cursor-pointer"
        ref={buttonRef}
        onClick={() => setIsSidebarOpen(true)}
      >
        <svg
          width="800px"
          height="800px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className='className="h-[80%] w-[80%] text-cyan-500 font-extrabold animate-pulse delay-700"'
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4 5C3.44772 5 3 5.44772 3 6C3 6.55228 3.44772 7 4 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H4ZM7 12C7 11.4477 7.44772 11 8 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H8C7.44772 13 7 12.5523 7 12ZM13 18C13 17.4477 13.4477 17 14 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H14C13.4477 19 13 18.5523 13 18Z"
            fill="#000000"
          />
        </svg>
      </div>
      <AnimatePresence>
        {isSidebarOpen && (
          <Sidebar ref={sidebarRef} onClose={() => setIsSidebarOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
}

const Sidebar = React.forwardRef<HTMLDivElement, { onClose: () => void }>(
  ({ onClose }, ref) => {
    return (
      <motion.div
        ref={ref}
        className="h-screen w-screen z-50 flex bg-gray-500 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-70 shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] absolute top-0 right-0  justify-center items-center"
        initial={{ x: "100%" }} // Start off-screen to the right
        animate={{ x: 0 }} // Move to the viewport
        exit={{ x: "100%" }} // Move back off-screen to the right
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <div className="h-[60%] w-[85%] bg-gray-500 flex flex-col justify-between items-center">
          {NavItems.map((item, index) => (
            <Link
              key={index}
              href={item.link}
              className="text-black h-auto w-auto text-2xl italic text-playfair"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <span
          className="absolute top-2 right-2 text-3xl text-white font-extrabold cursor-pointer"
          onClick={onClose}
        >
          X
        </span>
      </motion.div>
    );
  }
);

Sidebar.displayName = "Sidebar";

export default SMNavbar;
