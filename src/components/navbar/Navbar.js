import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar = () => {
	return ( 
		<header className="navbar">

			<h1>Dojo Blog</h1>

			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/create">New Blog</Link>
			</div>

		</header>
	 );
}
 
export default Navbar;