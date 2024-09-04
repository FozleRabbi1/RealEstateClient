/* eslint-disable react/prop-types */

const ReadMoreButton = ({ title, btnStyle, icon: Icon, onClick, iconStyle, ...props }) => {
    return (
        <button
            className={`flex justify-between items-center flex-row-reverse  ${btnStyle}`}
            onClick={onClick}
            {...props}
        >
            {Icon && <Icon className={iconStyle} />}
            {title}
        </button>
    );
};

export default ReadMoreButton;
