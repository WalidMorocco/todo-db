import React from 'react';
import '../styles/Spinner.css';

const Spinner = () => {
  return (
    <div className="semipolar-spinner">
      <div className="ring"></div>
      <div className="ring"></div>
      <div className="ring"></div>
      <div className="ring"></div>
      <div className="ring"></div>
    </div>
  );
};

export default Spinner;