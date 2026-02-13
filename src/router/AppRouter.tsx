import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AppLayout } from '../layouts/AppLayout';

const DashboardPage = lazy(() => import('../pages/Dashboard'));
const SocietiesPage = lazy(() => import('../pages/Societies'));
const EventsPage = lazy(() => import('../pages/Events'));
const AiPage = lazy(() => import('../pages/Ai'));

const Loader = () => (
  <div className="w-full flex justify-center items-center py-16">
    <div className="h-10 w-10 rounded-full border-2 border-slate-700 border-t-neonCyan animate-spin" />
  </div>
);

export const AppRouter: React.FC = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/societies" element={<SocietiesPage />} />
          <Route path="/events" element={<EventsPage />} />
          <Route path="/ai" element={<AiPage />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

