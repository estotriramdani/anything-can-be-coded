import React from 'react';

const LinkComponent = ({ title, ...rest }) => {
  return (
    <button className="link" {...rest}>
      {title}
    </button>
  );
};

export default LinkComponent;
