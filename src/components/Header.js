import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
    return (
        <>
            <header className="App-header">
                <nav>
                    <ul>
                        <li>
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li>
                            <Link to={"/super-hero"}>Super Hero</Link>
                        </li>
                        <li>
                            <Link to="/rq-super-hero">RQ Hero</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;