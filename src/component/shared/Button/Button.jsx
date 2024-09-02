// eslint-disable-next-line react/prop-types
const Button = ({ title, btnStyle,icon: Icon, onClick, ...props }) => {
  return (
    <button
      className={`px-2 md:px-4 py-1 rounded-full ${btnStyle}`}
      onClick={onClick}
      {...props}
    >
      {Icon && <Icon className="ml-2 text-xl" />}
      {title}
      
    </button>
  );
};

export default Button;

  