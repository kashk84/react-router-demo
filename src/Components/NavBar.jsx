import { Link } from "react-router-dom";
function NavBar() {
return (
        <nav className="navbar">
                <Link to="/">
                        <img
                                src="/images/logo.jpg"
                                alt="Logo"
                                style={{ height: "40px", verticalAlign: "middle", marginRight: "10px" }}
                        />
                </Link>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
        </nav>
)
}

export default NavBar
