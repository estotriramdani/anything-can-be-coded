import React from 'react';

const Button = ({ title, ...rest }) => {
  return (
    <button className="button" {...rest}>
      {title}
    </button>
  );
};

export default Button;
