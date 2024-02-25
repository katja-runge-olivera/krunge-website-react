import React from "react";

import { Content } from '../../Components/Content';
import { Logo } from "../../Components/Logo";

const columns = [
  {
    image: require('../../images/portfolio.png'),
    text: 'Portfolio',
    link: 'portfolio/'
  },
  {
    image: require('../../images/cv.png'),
    text: 'Curriculum',
    link: 'cv/'
  },
  {
    image: require('../../images/contact.png'),
    text: 'Contact',
    link: 'contact/'
  }
];


export const Home = () => (
  <>
    <Logo />
    <Content columns={columns} />
  </>
);

