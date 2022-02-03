import { connect } from 'react-redux';

import './Cart.css'
import ProductCard from '../Products/ProductCard'

import { removeItem } from './Cart';

const displayCart = (props) => {
  console.log('props in viewCart', props)
  return (
    <div className="ShoppingCart">
      Cart View is here!!! Its just below! :D
      {/* <ProductCard item={props.cartItem.Cart.cartItems[0]} /> */}

      {props.cartItem.Cart.length
						? props.cartItem.Cart.map((category) => (
								<li
									className='productCard p-2 bd-highlight'
									// onClick={() => {
									// 	console.log('props in action:', props);
									// 	props.showCategory(category.Category);
									// 	props.cartItem(category);
									// }}
									key={category.name}
								>
									<ProductCard item={category} />
                  <button 
                  onClick={() => props.removeItem()}
                   >Remove</button>
								</li>
						  ))
						: ''}
    </div>
  )
}

const mapStateToProps = (state) => ({
  cartItem: state
})

const mapDispatchToProps = { removeItem };

export default connect(mapStateToProps, mapDispatchToProps)(displayCart);

