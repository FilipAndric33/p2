import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
    return(
        <div className={"navbar"}>
            <Link to={"/"}>Movies</Link>
            <Link to={"/ShowsPage"}>Shows</Link>
        </div>
    )
}

export default Navbar;