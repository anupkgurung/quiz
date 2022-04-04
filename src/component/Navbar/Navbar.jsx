import { Link } from "react-router-dom";
import { LinkButton } from "../../component";
import "./navbar.css";

export const Navbar = () => {
    
    return (
        <div>
            <nav className="nav flex-row">
                <Link className="link-style-none font-l" to="/">KWIIZY</Link>
                <div>
                    <LinkButton pathName ={"/login"} btnCaption={"Login"} classes={"btn-primary btn-border-color"} />
                    <LinkButton pathName ={"/login"} btnCaption={"Logout"} classes={"btn-primary btn-border-color"} />
                </div>
            </nav>
        </div>
    )
}