import React from "react";
import { FaWhatsapp } from "react-icons/fa";

function HomeDiscordButton({link}:{link?:string}) {
  return (
    /* From Uiverse.io by Itskrish01 */
    <a href={link} target="_blank" rel="noopener noreferrer">
          Join Whatsapp
          <FaWhatsapp />
    </a>
  );
}

export default HomeDiscordButton;


