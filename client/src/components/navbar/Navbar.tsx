import React from 'react';
import { Link } from 'react-router-dom';
import './style/index.scss';

const Navbar: React.FC = () => {
    return(
        <div className={"navbar"}>
            <Link to={"/"} className={"button"}>Movies</Link>
            <Link to={"/tvShowPage"} className={"button"}>Shows</Link>
        </div>
    )
}

export default Navbar;