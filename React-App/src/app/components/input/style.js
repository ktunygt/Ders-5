import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
    wrapper: () => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid black",
        backgroundColor: "aqua",
        borderRadius: 8
    }),

    input: ({ type }) => ({
        width: type && type === "date" ? "auto" : "100%",
        height: "100%",
        border: "none",
        outline: "none",
        backgroundColor: "transparent",
        color: "white",
        fontSize: "1rem",
        padding: "8px"
    })
});

export default useStyles;
