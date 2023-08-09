import React from 'react';
import './Botoes.css'

const Button = ({ children }) => {
  return (
    <button className="botoes">
      {children}
    </button>
  );
};

export default Button;