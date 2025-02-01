import useStyles from "./style";

const Input = ({
    type = "text",
    value,
    onChange,
    placeholder,
}) => {
    const classes = useStyles({ type });

    return (
        <div className={classes.wrapper}>
            <input 
                type={type}
                onChange={onChange}
                placeholder={placeholder}
                className={classes.input}
            />
        </div>
    )
};

export default Input;
