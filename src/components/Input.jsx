import PropTypes from "prop-types";
const Input = ({ value, onChange, placeholder, ...props }) => {
  return (
    <input
      type="text"
      className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
