import sizes from './sizes';

export default {
    Navbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "6vh",
        backgroundColor: "#fafafa"
    },
    logo: {
        marginRight: "15px",
        padding: "0 13px",
        fontSize: "20px",
        height: "100%",
        display: "flex",
        alignItems: "center",
        "& a": {
            textDecoration: "none",
            color: "black"
        },
        "& a:hover": {
            color: "gray"
        },
        [sizes.down("xs")]: {
            fontSize: "18px"
        }
    },   
    selectContainer: {
        marginLeft: "auto",
        marginRight: "1rem",
        "& .items": {
            fontSize: "15px"
        }
    }
}