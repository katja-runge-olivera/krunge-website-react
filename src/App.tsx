import React from "react";

import { Content } from './Components/Content';
import { Footer } from './Components/Footer';
import { Logo } from './Components/Logo';
import { Navigation } from './Components/Navigation';
import './App.css';

const columns = [
  {
    image: require('./images/portfolio.png'),
    text: 'Portfolio'
  },
  {
    image: require('./images/cv.png'),
    text: 'Curriculum'
  },
  {
    image: require('./images/contact.png'),
    text: 'Contact'
  }
];


export const App = () => (
  <div className="App">
    <header className="App-header">
      <Navigation />
      <Logo />
    </header>
    <main>
      <Content columns={columns} />
    </main>
    <Footer />
  </div>
);

