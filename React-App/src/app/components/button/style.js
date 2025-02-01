import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    buttonContainer: ({ color, size }) => {
        return {
            padding: 10,
            color: color,
            backgroundColor: "aqua",
            fontSize: size,
            borderRadius: 8
        }
    }
});

export default useStyles;
