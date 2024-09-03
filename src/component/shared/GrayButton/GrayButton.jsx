/* eslint-disable react/prop-types */

const GrayButton = ({ title, btnStyle, icon: Icon, onClick, iconStyle, ...props }) => {
    return (
        <button
            className={`flex justify-between items-center  ${btnStyle}`}
            onClick={onClick}
            {...props}
        >
            {Icon && <Icon className={iconStyle} />}
            {title}
        </button>
    );
};

export default GrayButton;
