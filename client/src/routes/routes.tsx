import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MoviePage from '../pages/movie page/MoviePage';
import Navbar from '../components/Navbar';
import ShowPage from "../pages/shows page/ShowPage";

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<MoviePage />} />
                <Route path="/showpage" element={<ShowPage />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;