// Displays products based on which category is clicked
// Create an action that will trigger when the "active" category is changed
// 			HINT: Multiple reducers can respond to the same action
// Creat a reducer that will filter the products based on active category

// import ProductCard from './ProductCard';

// Active Category
// State should hold this
// Other components may need to reference this
// 		Create this as global state

let initialState = {
	// State should hold a list of all products
	// products: {
		// Each Product should have:
		// 			Category, name, description, price, and inventory count
    categories: [

			{
				Category: 'food',
				name: 'Pizza',
				description: 'Bread, cheese, and tomatoes all in one',
				price: 10,
				inventoryCount: 12,
			},
			{
				Category: 'clothes',
				name: 'Shirt',
				description: 'To have warmth',
				price: 25,
				inventoryCount: 23,
			},
			{
				Category: 'electronics',
				name: 'Phone',
				description: 'Call me Maybe?',
				price: 500,
				inventoryCount: 2,
			},
		],
     
    activeObj: '' 
      
		// ]
	}
  

export default (state = initialState, action) => {
	let { type, payload } = action;

	switch (type) {
		default:
			return state;

		case 'PRODUCTS/PRODUCTCATEGORY':
			let category = initialState.categories.find(el => (
				el.Category === payload.toLowerCase()
			))
			console.log('category:', category);
      return {
				...state,
				categories: [ category ],
				activeObj: category
			}

		case 'PRODUCTS/RESET':
			return initialState

			













			// let allClothes = state.products.clothes;
			// if (state.products.clothes === payload) {



			// 	let showClothes = state.products.clothes.map((category) => (
			// 		<ProductCard value={category} />
			// 		// 	return { category: category.Category };
			// 	));
			// 	return showClothes;
			// }

			// else statement
			// return 'allProducts';
		// case 'ELECTRONICS':
		// 	if (state.products.electronics === payload) {
		// 		let showElectronics = state.products.electronics.map((category) => (
		// 			<ProductCard value={category} />
		// 		));
		// 		return showElectronics;
		// 	}

		// 	// else statement
		// 	return 'allProducts';

		// case 'FOOD':
		// 	if (state.products.food === payload) {
		// 		let showFood = state.products.food.map((category) => (
		// 			<ProductCard value={category} />
		// 		));
		// 		return showFood;
		// 	}

		// 	// else statement
		// 	return 'allProducts';
	}
};

export const showCategory = (category) => {
	console.log('Here')
	return {
		type: 'PRODUCTS/PRODUCTCATEGORY',
		payload: category,
	};
};

export const resetCategory = () => {
	return {
		type: 'PRODUCTS/RESET',
	}
}

// export const showFood = (food) => {
// 	return {
// 		type: 'FOOD',
// 		payload: food,
// 	};
// };

// export const showElectronics = (electronics) => {
// 	return {
// 		type: 'ELECTRONICS',
// 		payload: electronics,
// 	};
// };
