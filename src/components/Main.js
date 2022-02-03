// import Products from './Products/Products.js';
import Categories from './Categories/Categories.js';
import ViewCart from './Cart/ViewCart.js';

// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './Main.css';

export default function main() {
	return (
		<body>

		{/* TODO: Add in BrowserRouter */}

			{/* <Router>
				<Routes>
					<Route path='/' element={
					} />
					<Route path='cart' element={
					} />
				</Routes>
			</Router> */}
					<Categories />
					<ViewCart />
		</body>
	);
}
