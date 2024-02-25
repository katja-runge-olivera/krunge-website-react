import React from "react";

import "./styles.css";
import { Link } from "react-router-dom";

export const Navigation = () => (
    <nav aria-label="navigation" className="navContainer">
        <ul className="list">
            <li className="listItem"><Link to={`/`}>Home</Link></li>
            <li className="listItem"><Link to={`cv`}>CV</Link></li>
            <li className="listItem"><Link to={`portfolio`}>Portfolio</Link></li>
        </ul>
    </nav>
);