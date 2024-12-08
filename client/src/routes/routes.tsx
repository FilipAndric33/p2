import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homePage/HomePage';
import ContentDetailsPage from '../pages/contentDetailsPage/ContentDetailsPage';
import ShowPage from '../pages/showPage/ShowPage';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ShowPage" element={<ShowPage />} />
        <Route path="details/:type/:id" element={<ContentDetailsPage />} />
        <Route
          path="/ShowPage/details/:type/:id"
          element={<ContentDetailsPage />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
