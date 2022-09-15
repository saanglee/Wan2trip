import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from '../page/Home';
import Result from '../page/Result';
import BookedHotels from '../page/BookedHotels';
import NotFound404 from '../page/NotFound404';
import About from '../page/About';

const Router = () => {
  return (
    <Routes>
      {['/', '/home'].map((path) => {
        return <Route path={path} element={<Home />} key={path} />;
      })}
      <Route path="/result" element={<Result />} />
      <Route path="/booked" element={<BookedHotels />} />
      <Route path="/about" element={<About />} />
      <Route path="/*" element={<NotFound404 />} />
    </Routes>
  );
};

export default Router;
