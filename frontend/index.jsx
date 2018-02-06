import React from 'react';
import ReactDOM from 'react-dom';
import OpeningAnimation from './components/OpeningAnimation';
import Root from './components/root';


document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<OpeningAnimation />, root);

  const setup = () => {
    setTimeout(() => {
      ReactDOM.render(<Root />, root);
    }, 3500);
  };

  setup();

});
