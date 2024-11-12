import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviePage from '../pages/moviePage/MoviePage';
import Navbar from '../components/navbar/Navbar';
import TvShowPage from "../pages/tvShowPage/TvShowPage";

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<MoviePage />} />
                <Route path="/tvShowPage" element={<TvShowPage />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;