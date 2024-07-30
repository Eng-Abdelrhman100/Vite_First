import React from 'react';
import classNames from 'classnames';

const Button = ({ label, BGcolor }) => {
  // Convert the color prop to a Tailwind-compatible class if needed
  const bgColorClass = BGcolor ? `bg-[${BGcolor}]` : 'bg-blue-500'; // Fallback color if no BGcolor is provided

  return (
    <button
      className={classNames(
        `py-[0.8rem] px-12 cursor-pointer text-[17px] inline-block text-white rounded-lg transition-custom`,
        bgColorClass,
        `hover:bg-[hsl(210,100%,45%)]` // Apply hover class here
      )}
    >
      {label}
    </button>
  );
};

export default Button;