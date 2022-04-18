import React from 'react';
import ReactDom from 'react-dom/client';
import {
    BrowserRouter,
    Routes,
    Route,
    Link,
} from 'react-router-dom';

import About from './pages/about';
import Home from './pages/home';

const elem = document.getElementById('root')!;
const root = ReactDom.createRoot(elem);

root.render(
    <BrowserRouter>
        <Link to="/">home</Link>
        <Link to="/about">about</Link>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
        </Routes>
    </BrowserRouter>
);