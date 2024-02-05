import React from "react";
import { Navigation } from "./Components/Navigation";
import { Logo } from "./Components/Logo";
import { Footer } from "./Components/Footer";

export const Portfolio = () => (
    <div className="Portfolio">
      <header className="App-header">
        <Navigation />
        <Logo />
      </header>
      <main>
       <h1>Portfolio</h1>
      </main>
      <Footer />
    </div>
  );