import './Nav.css';
import { connect } from 'react-redux';
import { showCategory, resetCategory } from '../../StoreFront/Products.js';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton, Badge } from '@mui/material';
import { styled } from '@mui/material/styles';
// import { BrowserRouter as Link } from 'react-router-dom';

// Taken from https://mui.com/components/badges/
const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -5,
    top: 2,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const Nav = (props) => (
	<div>
		<span className='navItem startingNav'>Pick a Cateogry to choose:</span>

		<span
			className='navItem firstNav'
			onClick={() => props.showCategory('food')}
		>
			Food
		</span>
		<span className='navItem' onClick={() => props.showCategory('electronics')}>
			Electronics
		</span>
		<span className='navItem' onClick={() => props.showCategory('clothes')}>
			Clothes
		</span>
		<span className='navItem' onClick={() => props.resetCategory()}>
			Show All Itemss
		</span>

		<div className='cart'>
			{/* <Link to="cart"> */}
			<IconButton aria-label='cart' onClick={() => console.log('CLICKed!!!')}>
				<StyledBadge badgeContent={props.products.Cart.length ? props.products.Cart.length : '0'} color='secondary'>
					<ShoppingCartIcon />
				</StyledBadge>
			</IconButton>
			{/* </Link> */}
		</div>

		<button onClick={() => props.openSideNav()} >Open nav</button>
	</div>
);

const mapStateToProps = (state) => ({
	products: state,
});

const mapDispatchToProps = { showCategory, resetCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Nav);
