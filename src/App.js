import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import NavRoutes from './components/Nav/NavRoutes.js';

import { useState } from 'react';
// bring in store and provider from redux
function App() {
	const [width, setWidth] = useState('0%');

	const openSideNav = () => setWidth('25%');

	const closeSideNav = () => setWidth('0%');
	return (
		<div className='wholeApp'>
			<Router>
				<Routes>
					<Route
						path='*'
						element={
							<>
								<NavRoutes width={width} closeSideNav={closeSideNav} />
								<Header openSideNav={openSideNav}/>
								<Main />
								<Footer />
							</>
						}
					/>
				</Routes>
			</Router>
		</div>
	);
}

export default App;
