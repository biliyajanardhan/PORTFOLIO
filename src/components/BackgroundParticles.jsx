import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const BackgroundParticles = () => {
  const particlesInit = async (engine) => {
    await loadSlim(engine);
  };

  return (
    <Particles
      init={particlesInit}
      options={{
        background: { color: { value: "transparent" } },
        fpsLimit: 60,
        particles: {
          number: { value: 40 },
          color: { value: "#3b82f6" },
          opacity: { value: 0.2 },
          size: { value: 2 },
          move: {
            enable: true,
            speed: 0.5,
            outModes: { default: "out" }
          }
        },
        interactivity: {
          events: {
            onHover: { enable: false },
            resize: true
          }
        }
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default BackgroundParticles;