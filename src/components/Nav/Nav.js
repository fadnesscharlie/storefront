import './Nav.css';
import { connect } from 'react-redux';
import { showCategory, resetCategory } from '../Products/Products.js';

const Nav = (props) => (
		<div>
			{/* {console.log('props in Nav:', props)} */}
			<span className='navItem startingNav'>Pick a Cateogry to choose:</span>

			<span
				className='navItem firstNav'
				onClick={() => props.showCategory('food')}
			>
				Food
			</span>
			<span
				className='navItem'
				onClick={() => props.showCategory('electronics')}
			>
				Electronics
			</span>
			<span className='navItem' onClick={() => props.showCategory('clothes')}>
				Clothes
			</span>
			<span className='navItem' onClick={() => props.resetCategory()}>
				Show All Itemss
			</span>

			<div className='cart'>
				Cart:{' '}
				<span>({props.products.Cart ? props.products.Cart.length : '0'})</span>
			</div>
		</div>
);

const mapStateToProps = (state) => ({
	products: state,
});

const mapDispatchToProps = { showCategory, resetCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
