const Input = ({ disabled = false, className = "", ...props }) => (
  <input disabled={disabled} className={`${className} input`} {...props} />
);

export default Input;
