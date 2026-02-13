import React from 'react';
import clsx from 'clsx';
import { motion, MotionProps } from 'framer-motion';

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement>, MotionProps {
  glow?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ className, children, glow = true, ...rest }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03, y: -4 }}
      transition={{ type: 'spring', stiffness: 260, damping: 20 }}
      className={clsx(
        'glass-card',
        glow && 'hover:outline hover:outline-1 hover:outline-neonCyan/60',
        'transition-shadow duration-300',
        className
      )}
      {...rest}
    >
      {children}
    </motion.div>
  );
};

