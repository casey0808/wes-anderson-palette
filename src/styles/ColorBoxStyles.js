import sizes from './sizes';

export default {
    colorBox: {
        width: "50%",
        height: "25%",
        margin: "0 auto",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-4px",
        "&:hover button": {
            opacity: 1
        },
        [sizes.down("xs")]: {
            width: "100%",
            height: "12%"
        }
    },
    copyButton: {
        width: "100px",
        height: "30px",
        position: "absolute",
        display: "inline-block",
        top: "50%",
        left: "50%",
        marginLeft: "-50px",
        marginTop: "-15px",
        textAlign: "center",
        outline: "none",
        background: "rgba(255, 255, 255, 0.3)",
        fontSize: "1rem",
        lineHeight: "30px",
        color: "white",
        textTransform: "uppercase",
        border: "none",
        opacity: 0,
        cursor: "pointer",
        textDecoration: "none"
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: "0px",
        padding: "10px",
        color: "black",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px"
    },
    copyOverlay: {
        opacity: "0",
        zIndex: "0",
        width: "100%",
        height: "100%",
        transition: "transform 0.5s ease-in-out",
        transform: "scale(0.1)"
    },
    showOverlay: {
        opacity: "1",
        transform: "scale(50)",
        zIndex: "10",
        position: "absolute"
    },
    copyMsg: {
        opacity: 0,
        color: "white",
        transform: "scale(0.1)",
        fontSize: "3rem",
        position: "fixed",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        "& h1": {
            fontWeight: 400,
            textShadow: "1px 2px black",
            background: "rgba(255, 255, 255, 0.2)",
            width: "100%",
            textTransform: "uppercase",
            textAlign: "center",
            marginBottom: 0,
            padding: "1rem"
        },
        "& p": {
            fontSize: "2rem",
            fontWeight: 100
        }
    },
    showMsg: {
        opacity: 1,
        transform: "scale(1)",
        transition: "all 0.4s ease-in-out",
        transitionDelay: "0.2s",
        zIndex: 25
    }
}