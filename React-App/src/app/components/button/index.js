import useStyles from "./style";

const Button = ({
    color,
    label,
    size,
    onClick,
    children
}) => {
    const classes = useStyles({ color, size });

    return (
        <div>
            <button
                className={classes.buttonContainer}
                onClick={onClick}
            >
                <div>
                    {label || children}
                </div>
            </button>
        </div>
    );
};

export default Button;
