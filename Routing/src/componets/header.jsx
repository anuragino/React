import { Link } from "react-router-dom"
function Header(){
    return(
        <nav className="nav">
            <ul>
                <li>
                    <Link className="link" to="/">Home</Link>
                </li>
                <li>
                    <Link className="link"  to="/about">About</Link>
                </li>
                <li>
                    <Link className="link"  to="/products">Products</Link>
                </li>
                <li>
                    <Link className="link"  to="/service">Service</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Header