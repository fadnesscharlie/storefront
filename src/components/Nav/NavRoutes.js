
import { Link } from 'react-router-dom';
import './Nav.css';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

const NavRoutes = (props) => {
	return (
		<div className='NavRoutes' style={{width: props.width}}>
      {/* <button onClick={openSideNav}>Open</button> */}
			<nav>
        <aside className='navButton' onClick={() => props.closeSideNav()}>{<CancelPresentationIcon/>}</aside>
        <ul>

				<li className='navRoutesLink'>
					<Link to='/'>Home</Link>
				</li>

				<li className='navRoutesLink'>
					<Link to='cart'> View Cart</Link>
				</li>

				<li className='navRoutesLink'>
					<Link to='checkout'>Check Out</Link>
				</li>
        </ul>
			</nav>
		</div>
	);
};

export default NavRoutes;
