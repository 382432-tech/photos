import React from 'react';
import { motion } from 'motion/react';
import blackHoleBg from '../../images/black-hole-bg.jpg';

interface CosmicBackgroundProps {
  isMotionActive?: boolean;
}

export const CosmicBackground: React.FC<CosmicBackgroundProps> = ({ isMotionActive = true }) => {
  return (
    <div
      id="cosmic-background-wrapper"
      aria-hidden="true"
      className="fixed inset-0 -z-20 overflow-hidden pointer-events-none select-none bg-black"
    >
      {/* Primary Black Hole Swirling / Rotating Image Layer */}
      <motion.div
        id="black-hole-rotator"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[160vw] h-[160vw] min-w-[1200px] min-h-[1200px] bg-cover bg-center bg-no-repeat will-change-transform"
        style={{
          backgroundImage: `url(${blackHoleBg})`,
        }}
        animate={
          isMotionActive
            ? {
                rotate: [0, 360],
                scale: [1.08, 1.18, 1.12, 1.2, 1.08],
              }
            : { rotate: 0, scale: 1.1 }
        }
        transition={
          isMotionActive
            ? {
                rotate: {
                  duration: 85,
                  repeat: Infinity,
                  ease: 'linear',
                },
                scale: {
                  duration: 22,
                  repeat: Infinity,
                  repeatType: 'mirror',
                  ease: 'easeInOut',
                },
              }
            : undefined
        }
      />

      {/* Accretion Disk Radiant Lensing Wave */}
      <motion.div
        id="black-hole-accretion-pulse"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vw] h-[140vw] min-w-[1000px] min-h-[1000px] pointer-events-none will-change-transform"
        style={{
          background:
            'radial-gradient(circle at 50% 50%, rgba(0,0,0,0) 10%, rgba(251, 191, 36, 0.18) 28%, rgba(245, 158, 11, 0.12) 42%, rgba(99, 102, 241, 0.08) 58%, transparent 72%)',
          mixBlendMode: 'screen',
        }}
        animate={
          isMotionActive
            ? {
                rotate: [360, 0],
                scale: [0.95, 1.12, 0.95],
                opacity: [0.35, 0.65, 0.35],
              }
            : { rotate: 0, scale: 1, opacity: 0.4 }
        }
        transition={
          isMotionActive
            ? {
                rotate: {
                  duration: 65,
                  repeat: Infinity,
                  ease: 'linear',
                },
                scale: {
                  duration: 16,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                opacity: {
                  duration: 10,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
              }
            : undefined
        }
      />

      {/* Event Horizon Gravitational Dark Center Glow */}
      <motion.div
        id="black-hole-singularity-aura"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90vw] h-[90vw] max-w-[800px] max-h-[800px] pointer-events-none rounded-full"
        style={{
          boxShadow: '0 0 120px 40px rgba(245, 158, 11, 0.12), inset 0 0 100px 30px rgba(0, 0, 0, 0.9)',
        }}
        animate={
          isMotionActive
            ? {
                scale: [1, 1.08, 0.98, 1.05, 1],
                opacity: [0.4, 0.75, 0.5, 0.8, 0.4],
              }
            : { scale: 1, opacity: 0.5 }
        }
        transition={
          isMotionActive
            ? {
                duration: 14,
                repeat: Infinity,
                ease: 'easeInOut',
              }
            : undefined
        }
      />

      {/* Contrast & Depth Vignette Overlay to maintain pristine text and card legibility */}
      <div
        id="cosmic-vignette"
        className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/85 backdrop-blur-[0.5px]"
      />
    </div>
  );
};
