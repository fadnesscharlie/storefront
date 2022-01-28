import './Nav.css'

import { connect } from 'react-redux';

import {
	showClothes,
	showElectronics,
	showFood,
} from '../Products/Products.js';

const Nav = (props) => (
  <div>
  {console.log('props:', props)}
   <span className='navItem firstNav' onClick={() => props.showClothes('clothes')}>
     Food
   </span>
   <span className='navItem' onClick={() => props.showClothes('electronics')}>
     Electronics
   </span>
   <span className='navItem' onClick={() => props.showClothes('food')}>
     Clothes
   </span>
 </div>
)

const mapStateToProps = (state) => ({
	products: state,
});

const mapDispatchToProps = { showClothes, showElectronics, showFood };

export default connect(mapStateToProps, mapDispatchToProps)(Nav);



