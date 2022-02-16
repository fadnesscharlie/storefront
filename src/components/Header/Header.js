import './Header.css';
import Nav from '../Nav/Nav.js';

export default function Header(props) {
	return (
		<header>
			<h1 className='headerTitle'>Welcome to Charlie's Store Front App!</h1>
			<article className='Nav'>
				<Nav openSideNav={props.openSideNav}/>
			</article>
		</header>
	);
}
