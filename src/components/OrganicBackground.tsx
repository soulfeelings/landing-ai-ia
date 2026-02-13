import React from 'react';
import { motion } from 'framer-motion';

const OrganicBackground = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {/* Floating organic blobs */}
      <motion.div
        className="absolute -top-40 -left-40 w-96 h-96 blob opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(15, 55%, 52%) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <motion.div
        className="absolute top-1/4 right-0 w-[500px] h-[500px] blob opacity-15"
        style={{
          background: 'radial-gradient(circle, hsl(92, 17%, 53%) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 50, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 2,
        }}
      />

      <motion.div
        className="absolute bottom-0 left-1/3 w-[600px] h-[600px] blob opacity-10"
        style={{
          background: 'radial-gradient(circle, hsl(28, 54%, 64%) 0%, transparent 70%)',
        }}
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 5,
        }}
      />

      {/* Subtle flowing lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          d="M0,100 Q250,50 500,100 T1000,100"
          stroke="hsl(15, 55%, 52%)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: 'easeInOut' }}
        />
        <motion.path
          d="M0,200 Q250,250 500,200 T1000,200"
          stroke="hsl(92, 17%, 53%)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: 'easeInOut', delay: 0.5 }}
        />
        <motion.path
          d="M0,300 Q250,350 500,300 T1000,300"
          stroke="hsl(28, 54%, 64%)"
          strokeWidth="2"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: 'easeInOut', delay: 1 }}
        />
      </svg>
    </div>
  );
};

export default OrganicBackground;
