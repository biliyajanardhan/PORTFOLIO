import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useCallback } from "react";

const AIParticles = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: { value: "#050816" },
        },
        fpsLimit: 60,
        particles: {
          number: { value: 70 },
          color: { value: "#3b82f6" },
          links: {
            enable: true,
            color: "#3b82f6",
            distance: 150,
            opacity: 0.4,
            width: 1,
          },
          move: {
            enable: true,
            speed: 1.2,
          },
          size: { value: 3 },
          opacity: { value: 0.5 },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            repulse: { distance: 100 },
          },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default AIParticles;