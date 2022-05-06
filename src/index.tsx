import React from 'react';
import ReactDom from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route
} from 'react-router-dom';

import { Navigation } from './components/navigation';
import About from './pages/about';
import Home from './pages/home';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const elem = document.getElementById('root')!;
const root = ReactDom.createRoot(elem);

root.render(
    <BrowserRouter>
        <Navigation />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
        </Routes>
    </BrowserRouter>
);