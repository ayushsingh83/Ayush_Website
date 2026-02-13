import React, { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from '../components/Sidebar';
import { Navbar } from '../components/Navbar';
import { motion, AnimatePresence } from 'framer-motion';
import { ChatbotButton } from '../components/ChatbotButton';

export const AppLayout: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const location = useLocation();

  return (
    <div className="page-gradient min-h-screen text-slate-50 flex">
      <Sidebar collapsed={collapsed} onToggle={() => setCollapsed(v => !v)} />

      <main className="flex-1 flex flex-col">
        <div className="max-w-6xl mx-auto px-4 sm:px-5 lg:px-8 pt-4 pb-6 md:pb-10 md:pt-6">
          <Navbar />
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      <ChatbotButton />
    </div>
  );
};

