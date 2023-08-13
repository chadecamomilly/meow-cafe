import React from 'react';
import './Botoes.css'


const Button = ({ elemento }) => {
  return (
    <button className="botoes">
      {elemento}
    </button>
  );
};

export default Button;