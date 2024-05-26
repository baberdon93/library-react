import React from 'react';
import UndrawBooks from '../assets/Undraw_Books.svg'
import { Link } from 'react-router-dom';

const Landing = () => {
  return (
    <section id="landing">
      <header>
        <div className="header__container">
          <div className="header__description">
            <h1>America's Prestigious Online Library Platform</h1>
            <h2>Your <span className="purple">FAVORITE</span> book awaits with <span className="purple">LIBRARY</span>!</h2>
          <a href="#featured">
            <button className="btn">Featured Books!</button></a>
          </div>
          <figure className="header__img--wrapper">
            <img src={UndrawBooks} alt="" />
          </figure>
        </div>
      </header>
    </section>
  );
}

export default Landing