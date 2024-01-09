import React from "react";

import "./styles.css";

export const Navigation = () => (
    <nav aria-label="navigation" className="navContainer">
        <ul className="list">
            <li className="listItem"><a href="#">Home</a></li>
            <li className="listItem"><a href="#">CV</a></li>
            <li className="listItem"><a href="#">Portfolio</a></li>
        </ul>
    </nav>
);