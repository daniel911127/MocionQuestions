/* eslint-disable no-unused-vars */
import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <Link to ="/login">
      <div className="frame">
        <div className="center">
          <div className="number">
            <div className="one-one"></div>
            <div className="one-two"></div>
            <div className="zero-one"></div>
          </div>
          <span className="big">Mocion</span>
          <span className="small">Challenge</span>
        </div>
      </div>
      </Link>
    </div>
  );
};
