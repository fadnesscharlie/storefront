import { connect } from 'react-redux';

import './Cart.css';
import ProductCard from '../Products/ProductCard';

import { removeItem } from './Cart';

const displayCart = (props) => {
	return (
		<div className='ShoppingCart'>
			Cart View is here!!! Its just below! :D
			{props.cartItem.Cart.length
				? props.cartItem.Cart.map((category) => (
						<li className='productCard p-2 bd-highlight' key={category.name}>
							<ProductCard item={category} />
							<button onClick={() => props.removeItem(category.id)}>Remove</button>
						</li>
				  ))
				: ''}
		</div>
	);
};

const mapStateToProps = (state) => ({
	cartItem: state,
});

const mapDispatchToProps = { removeItem };

export default connect(mapStateToProps, mapDispatchToProps)(displayCart);
