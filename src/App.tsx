import React from "react";

import { Content } from './Components/Content';
import { Footer } from './Components/Footer';
import { Logo } from './Components/Logo';
import { Navigation } from './Components/Navigation';
import './App.css';


export const App = () => (
  <div className="App">
    <header className="App-header">
      <Navigation />
      <Logo />
    </header>
    <main>
      <Content />
    </main>
    <Footer />
  </div>
);

