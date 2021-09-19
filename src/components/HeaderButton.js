const HeaderButton = ({ svgD, label, handleClick }) => {
  return (
    <button
      onClick={handleClick}
      className="hover:text-blue-600 px-4 flex flex-col items-center text-sm font-medium"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d={svgD}
        />
      </svg>
      {label}
    </button>
  );
};

export default HeaderButton;
