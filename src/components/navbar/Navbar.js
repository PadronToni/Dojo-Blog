import './navbar.css';

const Navbar = () => {
	return ( 
		<header className="navbar">

			<h1>Dojo Blog</h1>

			<div className="links">
				<a href="/">Home</a>
				<a href="/create">New Blog</a>
			</div>

		</header>
	 );
}
 
export default Navbar;