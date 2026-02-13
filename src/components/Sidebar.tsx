import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { LayoutDashboard, Users2, CalendarDays, Sparkles, Menu, X, GraduationCap } from 'lucide-react';
import clsx from 'clsx';

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const navItems = [
  { to: '/', label: 'Dashboard', icon: LayoutDashboard },
  { to: '/societies', label: 'Societies', icon: Users2 },
  { to: '/events', label: 'Events', icon: CalendarDays },
  { to: '/ai', label: 'AI Assistant', icon: Sparkles }
];

export const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  return (
    <>
      {/* Desktop sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: collapsed ? 80 : 260 }}
        transition={{ duration: 0.35, ease: 'easeInOut' }}
        className={clsx(
          'hidden md:flex flex-col h-screen sticky top-0 z-30',
          'px-3 py-4 page-gradient'
        )}
      >
        <div className="glass-card flex items-center justify-between px-3 py-2 mb-5">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-3xl bg-gradient-to-tr from-neonCyan to-neonPurple flex items-center justify-center shadow-glow">
              <GraduationCap className="h-5 w-5 text-slate-950" />
            </div>
            {!collapsed && (
              <div>
                <p className="text-xs tracking-[0.18em] uppercase text-slate-300">CampusOS</p>
                <p className="font-semibold text-sm">Society Suite</p>
              </div>
            )}
          </div>
          <button
            onClick={onToggle}
            className="hidden md:inline-flex h-8 w-8 items-center justify-center rounded-3xl bg-slate-900/60 border border-slate-700/70 hover:border-neonCyan/60 transition-colors"
          >
            {collapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
          </button>
        </div>

        <nav className="space-y-1 flex-1">
          {navItems.map(item => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  clsx(
                    'flex items-center gap-3 px-3 py-2 rounded-3xl text-sm transition-all duration-200',
                    'text-slate-300 hover:text-white',
                    'hover:bg-slate-900/60',
                    isActive &&
                      'bg-slate-900/80 text-white border border-neonCyan/50 shadow-glow'
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    <span
                      className={clsx(
                        'h-8 w-8 rounded-3xl flex items-center justify-center border',
                        isActive
                          ? 'bg-gradient-to-tr from-neonCyan to-neonPurple border-transparent text-slate-950'
                          : 'border-slate-700/60 bg-slate-900/80'
                      )}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    {!collapsed && <span>{item.label}</span>}
                  </>
                )}
              </NavLink>
            );
          })}
        </nav>
      </motion.aside>

      {/* Mobile bottom nav */}
      <nav
        className={clsx(
          'fixed bottom-4 inset-x-4 z-40 flex md:hidden glass-card px-3 py-2 items-center justify-between'
        )}
      >
        {navItems.map(item => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                clsx(
                  'flex flex-col items-center justify-center gap-1 px-2 py-1 rounded-3xl text-[11px] transition-all duration-200',
                  'text-slate-300',
                  isActive && 'text-white'
                )
              }
            >
              {({ isActive }) => (
                <>
                  <div
                    className={clsx(
                      'h-9 w-9 rounded-3xl flex items-center justify-center border',
                      isActive
                        ? 'bg-gradient-to-tr from-neonCyan to-neonPurple border-transparent text-slate-950 shadow-glow'
                        : 'border-slate-700/70 bg-slate-900/80'
                    )}
                  >
                    <Icon className="h-4 w-4" />
                  </div>
                  <span>{item.label}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </nav>
    </>
  );
};

