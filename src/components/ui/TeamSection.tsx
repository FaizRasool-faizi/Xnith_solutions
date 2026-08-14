"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const leaders = [
  {
    name: 'Faiz Rasool',
    title: 'Founder & CEO',
    image: '/faiz.png',
  },
  {
    name: 'Swera Sagheer',
    title: 'Co-Founder & Creative Lead',
    image: '/swera.jpg',
  },
];

function LeaderCard({ leader, index }: { leader: typeof leaders[0]; index: number }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 60, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.8, delay: index * 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{ width: 300 }}
      className="relative group cursor-pointer"
    >
      {/* Outer glow that blooms on hover */}
      <motion.div
        className="absolute -inset-3 rounded-3xl pointer-events-none"
        animate={{
          opacity: hovered ? 1 : 0,
          scale: hovered ? 1 : 0.85,
        }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        style={{
          background: 'radial-gradient(ellipse at 50% 80%, rgba(245,105,255,0.25) 0%, transparent 70%)',
          filter: 'blur(16px)',
        }}
      />

      {/* Card */}
      <motion.div
        animate={{ y: hovered ? -10 : 0 }}
        transition={{ duration: 0.45, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="relative w-full rounded-2xl overflow-hidden bg-[#0d0d14] flex flex-col"
        style={{
          boxShadow: hovered
            ? '0 32px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(245,105,255,0.2)'
            : '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.06)',
          transition: 'box-shadow 0.45s ease',
        }}
      >
        {/* Image */}
        <div className="relative overflow-hidden" style={{ height: 340 }}>
          {/* Purple gradient bg */}
          <div className="absolute inset-0 bg-gradient-to-b from-violet-800/50 to-violet-950/70" />

          {/* Photo */}
          <motion.div
            className="absolute inset-0"
            animate={{ scale: hovered ? 1.06 : 1 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Image
              src={leader.image}
              alt={leader.name}
              fill
              className="object-cover object-top"
              sizes="300px"
            />
          </motion.div>

          {/* Diagonal shimmer sweep on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ x: '-100%', opacity: 0 }}
            animate={
              hovered
                ? { x: '200%', opacity: [0, 0.6, 0], transition: { duration: 0.7, ease: 'easeInOut', delay: 0.05 } }
                : { x: '-100%', opacity: 0, transition: { duration: 0 } }
            }
            style={{
              background: 'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.12) 50%, transparent 65%)',
            }}
          />

          {/* Bottom fade into card */}
          <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#0d0d14] to-transparent pointer-events-none" />
        </div>

        {/* Text */}
        <div className="px-6 py-5 text-left" style={{ height: 82 }}>
          <motion.p
            className="font-bold text-xl tracking-tight whitespace-nowrap"
            animate={{ color: hovered ? '#F569FF' : '#ffffff' }}
            transition={{ duration: 0.35 }}
          >
            {leader.name}
          </motion.p>

          <motion.p
            className="text-white/40 text-sm mt-1 font-mono tracking-wide whitespace-nowrap"
            animate={{ opacity: hovered ? 0.7 : 0.4 }}
            transition={{ duration: 0.35 }}
          >
            {leader.title}
          </motion.p>

          {/* Brand underline draws in */}
          <motion.div
            className="mt-4 h-[1px] bg-gradient-to-r from-brand to-violet-400 rounded-full"
            animate={{ scaleX: hovered ? 1 : 0, originX: 0 }}
            transition={{ duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function TeamSection() {
  return (
    <section className="relative w-full bg-[#030303] py-32 overflow-hidden border-t border-white/5">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-brand/5 blur-[200px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10 flex flex-col items-center">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="mb-20 flex flex-col items-center text-center"
        >
          <div className="flex items-center gap-4 text-xs font-semibold tracking-widest text-brand uppercase mb-6">
            <span className="h-[1px] w-8 bg-brand" />
            OUR LEADERSHIP
            <span className="h-[1px] w-8 bg-brand" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl leading-tight">
            Leadership driving innovation,{' '}
            <br className="hidden md:block" />
            growth, and human potential.
          </h2>
        </motion.div>

        {/* Cards row */}
        <div className="flex flex-col sm:flex-row gap-10 justify-center items-center">
          {leaders.map((leader, index) => (
            <LeaderCard key={leader.name} leader={leader} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
}
