import React from "react";
import NavItems from '../NavItems'
import Link from "next/link";
function NavBar() {
  
  return (
   
      <div className="navItems w-[95%] h-[90%] flex justify-between items-center ">
        <div className="Logoarea h-[4.5rem] w-[4.5rem] rounded-full ">
        <img src="/techKurukshetra/logo.png" alt="logo" className="size-full scale-[2]" />
        </div>
        <div className="FunctionArea h-full w-[75%]  flex justify-around items-center z-[999]">
            {NavItems.map((values,index)=>(
                <Link key={index} href={values.link} className="text-xl text-white text-playfair">
                    {values.name}
                </Link>
            ))}
        </div>
        <div className="LogoCollege h-[4.5rem] w-[10%]  flex gap-4">
          <img src="/uemLogo.png"alt="uem logo" className="h-full w-1/2 rounded-full bg-none"/>
          <img src="/iemLogo.png" alt="iem logo" className="h-full w-1/2 rounded-full bg-none"/>
        </div>
      </div>
  
  );
}

export default NavBar;
