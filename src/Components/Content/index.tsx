import React from "react";

import "./styles.css";
import { Link } from "react-router-dom";

type Column = {
    image: string;
    text: string;
    link: string;
}

type ContentProps = {
    columns: Column[];
}

export const Content = ({ columns }: ContentProps) => (
    <>
        <section className="root">
            <div className="contentContainer">
                <h1 className="mainTitle">
                    Designer &
                    <br />
                    Frontend Developer
                </h1>
                <p className="contentText">Hola, I'm Katja, a designer with 7+ years of experience and a strong focus on marketing and UX. The past 2 years, I have been working as a Frontend Developer. I'm a good communicator, team player and a fast learner. As a hobby, I like to cook, you can follow my creations on Instagram.</p>
            </div>
            <div className="columnsContainer">
                {columns.map((column, index) => (
                    <div key={index} className="column">
                        <Link to={column.link}><img alt="" src={column.image} className="columnImage" /></Link>
                        <p className="columnText">{column.text}</p>
                    </div>
                ))}
            </div>
        </section>
    </>
);
