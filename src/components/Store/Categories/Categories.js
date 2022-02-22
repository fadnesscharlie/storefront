import { connect } from 'react-redux';
import '../Products/productCard.css';

// Reducers
import { showCategory } from '../../../StoreFront/Products.js';
import { cartItem, removeItem } from '../../../StoreFront/Cart.js';

import ProductCard from '../Products/ProductCard';
import { Button } from 'react-bootstrap';

const displayProducts = (props) => {
	return (
		<div>
			<section>
				<ul className='d-flex flex-row bd-highlight mb-3'>
					{props.products.Products.categories.length
						? props.products.Products.categories.map((category) => (
								<li
									className='productCard p-2 bd-highlight'
									key={category.name}
								>
									<ProductCard item={category} />
									<span>
										<Button
											onClick={() => props.cartItem(category)}
											className='addButton'
										>
											Add to Cart
										</Button>

										<Button className='addButton'>View Details</Button>
									</span>
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

const mapDispatchToProps = { showCategory, cartItem, removeItem };

export default connect(mapStateToProps, mapDispatchToProps)(displayProducts);
