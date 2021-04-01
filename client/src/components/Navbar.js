import '../styles/Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <h1>Valeri's Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/createBlog">Create a new blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;