import Categories from './Store/Categories/Categories.js';
import ViewCart from './Store/Cart/ViewCart.js';
import ProductAPI from './Store/Products/getProducts.js';

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

export default function main() {
	return (
		<section className='mainCss'>
			{/* TODO: Add in BrowserRouter */}

			{/* <Router> */}
				<Routes>
					<Route path='/' element={<Categories />} />
					<Route path='cart' element={<ViewCart />} />
				</Routes>
			{/* </Router> */}
			{/* <Categories />
			<ProductAPI />
			<ViewCart /> */}
		</section>
	);
}
