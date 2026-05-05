import "./ErrorMessage.css";

const ErrorMessage = ({ mensaje }) => {
  return <p className="errorMessage">{mensaje}</p>;
};

export default ErrorMessage;