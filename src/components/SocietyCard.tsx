import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { GlassCard } from './GlassCard';
import { Users, Sparkles } from 'lucide-react';

interface SocietyCardProps {
  name: string;
  description: string;
  members: number;
  category: string;
}

export const SocietyCard: React.FC<SocietyCardProps> = ({ name, description, members, category }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-40, 40], [12, -12]);
  const rotateY = useTransform(x, [-40, 40], [-12, 12]);

  const springConfig = { stiffness: 200, damping: 18, mass: 0.6 };
  const springX = useSpring(rotateX, springConfig);
  const springY = useSpring(rotateY, springConfig);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const dx = event.clientX - rect.left - rect.width / 2;
    const dy = event.clientY - rect.top - rect.height / 2;
    x.set(dx / 4);
    y.set(dy / 4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <div className="perspective-1000">
      <GlassCard
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ transformStyle: 'preserve-3d' }}
        className="p-5 min-h-[180px] relative cursor-pointer"
        animate={{ rotateX: springX, rotateY: springY }}
      >
        <div className="flex items-center justify-between gap-3 mb-3">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-slate-400 mb-1">{category}</p>
            <h3 className="text-lg font-semibold">{name}</h3>
          </div>
          <div className="h-10 w-10 rounded-3xl bg-gradient-to-tr from-neonCyan/20 to-neonPurple/30 flex items-center justify-center border border-white/20">
            <Sparkles className="h-5 w-5 text-neonCyan" />
          </div>
        </div>
        <p className="text-sm text-slate-300 line-clamp-3 mb-4">{description}</p>
        <div className="flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4 text-neonCyan" />
            <span>{members.toLocaleString('en-IN')} members</span>
          </div>
          <span className="px-3 py-1 rounded-3xl text-[11px] bg-slate-900/60 border border-slate-700/60">
            Active • 2024-25
          </span>
        </div>
      </GlassCard>
    </div>
  );
};

