import './Nav.css'

import { connect } from 'react-redux';

import {
	showCategory,
  resetCategory
} from '../Products/Products.js';

const Nav = (props) => (
  <div>
  {console.log('props:', props)}
   <span className='navItem firstNav' onClick={() => props.showCategory('clothes')}>
     Food
   </span>
   <span className='navItem' onClick={() => props.showCategory('electronics')}>
     Electronics
   </span>
   <span className='navItem' onClick={() => props.showCategory('food')}>
     Clothes
   </span>
   <span className='navItem' 
   onClick={() => props.resetCategory()}
   >Show All Itemss</span>
 </div>
)

const mapStateToProps = (state) => ({
	products: state,
});

const mapDispatchToProps = { showCategory, resetCategory };

export default connect(mapStateToProps, mapDispatchToProps)(Nav);



