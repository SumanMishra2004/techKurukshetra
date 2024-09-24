import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function HomeDiscordButton() {
  return (
    /* From Uiverse.io by Itskrish01 */
    <a href="https://chat.whatsapp.com/FmdnbfOCDXmCmpama695A1" target="_blank" rel="noopener noreferrer">


      <button className="relative inline-flex h-12 active:scale-95 transistion overflow-hidden rounded-lg p-[1px] focus:outline-none z-50">
        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#e7029a_0%,#f472b6_50%,#bd5fff_100%)]"></span>
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 undefined">
          Join Whatsapp
          <FaWhatsapp />
        </span>
      </button>
    </a>
  );
}

export default HomeDiscordButton;


