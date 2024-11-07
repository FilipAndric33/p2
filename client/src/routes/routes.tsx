import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from '../pages/homepage/HomePage';
import Navbar from '../components/Navbar';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;