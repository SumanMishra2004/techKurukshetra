import { initParticlesEngine, Particles } from "@tsparticles/react";

import { loadFull } from "tsparticles";
import React, {  useEffect, useState } from "react";

const ParticlesContainer = () => {
  const [init, setInit] = useState(false);

  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadFull(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <Particles
      className="w-full h-full absolute inset-0 z-10"
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: " ",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: {
              enable: true,
            },
          },
          modes: {
            push: {
              quantity: 500,
            },
            repulse: {
              distance: 100,
              duration: 0.7,
            },
          },
        },
        particles: {
          color: {
            value: "#0000ff",
          },
          links: {
            color: "#f5d393",
            distance: 180,
            enable: true,
            opacity: 0.3,
            width: 1.45,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
            },
            value: 150,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesContainer;