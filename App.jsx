import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Lazy load the components
const Home = lazy(() => import('./Home'));
const Add = lazy(() => import('./Add'));
const Edit = lazy(() => import('./Edit'));

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Add' element={<Add />} />
            <Route path='/Edit' element={<Edit />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
