import { AiOutlineSearch } from "react-icons/ai"
import { Link } from "react-router-dom"
import { styled } from "styled-components";

const Navbar = () => {
    return <DIV>
        <div id="wrapper">
            <img src="https://i.ibb.co/N73Ms4f/Art.png" alt="logo" width={"50px"} style={{ objectFit: "cover" }} />
            <div style={{ display: "flex", alignItems: "center" }}>
                <input type="text" placeholder="Search" style={{ padding: "5px", borderColor: "black" }} />
                <button style={{ border: "2px solid black" }}>
                    <AiOutlineSearch style={{ fontSize: "19px" }} />
                </button>
            </div>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "20%" }}>
                <select name="theme" id="theme_option" >
                    <option value="dark">Dark Theme</option>
                    <option value="light">Light Theme</option>
                </select>
                <Link id="link">Subscribe</Link>
                <button>
                    <Link style={{ textDecoration: "none", color: "black" }}>Login</Link>
                </button>
            </div>
        </div>
    </DIV>
}
export default Navbar;
const DIV = styled.div`
    width: "100%";
    padding: "5px";
    background-color:black;
    #wrapper {
        display: flex;
        width: 90%; 
        margin: auto;
        align-items: center;
        justify-content: space-between
    }
    #link{
        text-decoration: none;
        color: white;
    }
`