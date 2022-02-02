// Display a list of all "categories" in Cards
// Dispatches an action when one is clicked to "activate" it
// 		Create a method to respond when a category is clicked
// 		Use Redux Reducer Action Method
//    Update active category when clicked

// State should hold categories
// Categories should have: name, display name, and description

// import React from "react";
import { connect } from 'react-redux';
import '../Products/productCard.css';

import {
	showCategory,
} from '../Products/Products.js';

import ProductCard from '../Products/ProductCard';

const displayProducts = (props) => {
	console.log('props:', props);
	return (
		<div>
			<section>
				<ul>
					{props.products.Products.categories.length
						? props.products.Products.categories.map((category) => (
								<li
									className='productCard'
									onClick={() => props.showCategory(category.Category)}
									key={category.name}
								>
									<ProductCard item={category} />
								</li>
						  ))
						: ''}
				</ul>
			</section>
		</div>
	);
};

const mapStateToProps = (state) => ({
	products: state,
});

const mapDispatchToProps = { showCategory };

export default connect(mapStateToProps, mapDispatchToProps)(displayProducts);
