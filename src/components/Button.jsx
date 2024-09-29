import PropTypes from 'prop-types';

const Button = ({ children, color, onClick, className, ...props }) => {
  const colorClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    accent: "bg-green-500 hover:bg-green-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      className={`px-4 py-2 rounded ${
        colorClasses[color] || colorClasses.primary
      } ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};


Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string, 
};

export default Button;
