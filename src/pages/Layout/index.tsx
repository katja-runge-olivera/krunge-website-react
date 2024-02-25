import React from "react";

import { Navigation } from "../../Components/Navigation";
import { Footer } from "../../Components/Footer";
import { Outlet } from "react-router";

export const Layout = () => (
    <div className="App">
        <header className="App-header">
            <Navigation />
        </header>
        <div>
            <Outlet />
        </div>
        <Footer />
    </div>
);