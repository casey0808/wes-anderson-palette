import sizes from './sizes';
import PD from './PD.svg';

export default {
    root: {
        height: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        /* background by SVGBackgrounds.com */
        backgroundImage: `url(${PD})`,
        overflow: "scroll"
    },
    heading: {
        fontSize: "2rem",
        letterSpacing: "0.1rem",
        paddingTop: "0.5rem",
        paddingBottom: "0.5rem"
    },
    container: {
        width: "60%",
        display: "flex",
        alignItems: "flex-start",
        flexDirection: "column",
        flexWrap: "wrap",
        [sizes.down("md")]: {
            width: "80%"
        },
        [sizes.down("sm")]: {
            width: "100%"
        }
    },
    nav: {
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        color: "white"
    },
    palettes: {
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "2rem",
        [sizes.down("sm")]: {
            gridTemplateColumns: "repeat(2, 40%)",
            paddingBottom: "2rem"
        },
        [sizes.down("xs")]: {
            gridTemplateColumns: "repeat(1, 80%)",
            gridGap: "1.2rem",
            paddingBottom: "2rem"
        }
    }
};