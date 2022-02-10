import Categories from './Categories/Categories.js';
import ViewCart from './Cart/ViewCart.js';
import ProductAPI from './Products/getProducts.js';

// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function main() {
	return (
		<section className='mainCss'>

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
					<ProductAPI />
					<ViewCart />
		</section>
	);
}
