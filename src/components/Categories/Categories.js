// Display a list of all "categories" in Cards
// Dispatches an action when one is clicked to "activate" it
// 		Create a method to respond when a category is clicked
// 		Use Redux Reducer Action Method
//    Update active category when clicked

// State should hold categories
// Categories should have: name, display name, and description

// import React from "react";
import { connect } from 'react-redux';

import { showClothes, showElectronics, showFood } from '../Products/Products.js';
import ProductCard from '../Products/ProductCard';


const displayProducts = (props) => {
	console.log('props:', props);
	return (

		// TAKEN FROM DEMO

		<section>
      <ul>
        {props.products.Products.map((category) => (

					// on click of product, filter through the category, then run function that goes with the category
					< ProductCard props={category} />

          // <li onClick={() => props.showClothes('CLOTHES')} 
					// // key={category}
					// >
          //   {category}
          // </li>
        ))}
      </ul>
      {/* <button onClick={props.reset}>RESET</button> */}
    </section>

	)
}

const mapStateToProps = state => ({
	products: state
})

const MapDispatchToProps = { showClothes, showElectronics, showFood }

export default connect(mapStateToProps, MapDispatchToProps)(displayProducts)
