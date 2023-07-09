import React from "react";
import sprite from './sprite.svg';

const Icon = () => {
  return (
    <div>
      <svg>
        <use xlinkHref={`${sprite}#bell`} />
      </svg>
      {/* Rest of your component */}
    </div>
  );
};

export default Icon;