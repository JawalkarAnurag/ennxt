export default function Navbar() {
    return (
        <nav className="navbar ">
            <div className="navlinks">
                <a href="/" className="navlinks--link">
                    Home
                </a>
                <a href="/" className="navlinks--link">
                    Categories
                </a>
                <a href="/forHim" className="navlinks--link">
                    For Him
                </a>
                <a href="/forHer" className="navlinks--link">
                    For Her
                </a>
                <a href="/about" className="navlinks--link">
                    About
                </a>
                <a href="/contact" className="navlinks--link">
                    Contact
                </a>
            </div>

            <div className="brand">
                <a href="#">
                    <img src="./brand_name.png" alt="logo" className="nav--logo--name" />
                </a>
            </div>

            <div className="signup-btn">
                <button className="btn btn-success">Sign In/ Sign Up</button>
            </div>
        </nav>
    );
}
