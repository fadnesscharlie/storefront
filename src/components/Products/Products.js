import { v4 as uuidv4 } from 'uuid';

import axios from 'axios';

let initialState = {
	categories: [
		{
			Category: 'food',
			name: 'Pizza',
			description: 'Bread, cheese, and tomatoes all in one',
			price: 10,
			inventoryCount: 12,
			cart: false,
			id: uuidv4(),
		},
		{
			Category: 'clothes',
			name: 'Shirt',
			description: 'To have warmth',
			price: 25,
			inventoryCount: 23,
			cart: false,
			id: uuidv4(),
		},
		{
			Category: 'electronics',
			name: 'Phone',
			description: 'Call me Maybe?',
			price: 500,
			inventoryCount: 2,
			cart: false,
			id: uuidv4(),
		},
	],
	activeObj: '',
};

export default (state = initialState, action) => {
	let { type, payload } = action;

	switch (type) {
		default:
			return state;

		case 'PRODUCTS/PRODUCTCATEGORY':
			let category = initialState.categories.find(
				(el) => el.Category === payload.toLowerCase()
			);
			return {
				...state,
				categories: [category],
				activeObj: category,
			};

		case 'PRODUCTS/RESET':
			return initialState;

		case 'PRODUCTS/ADD_PRODUCTS':
			// console.log('payload:', payload.results[0].category);

			// let categoryAPI = initialState.categories.find(
			// 	(el) => el.Category === payload.results.category
			// );
			// console.log('Product.js - category:', categoryAPI);
			return {
				...state,
				categories: payload.results,
				activeObj: '',
			};

	}
};

export const asyncAddProduct = () => async (dispatch) => {
	const response = await axios.get('https://api-js401.herokuapp.com/api/v1/products')
	const data = response.data
	dispatch(addProduct(data))
}

export const addProduct = (payload) => {
	return {
		type: 'PRODUCTS/ADD_PRODUCTS',
		payload: payload
	}
}

export const showCategory = (category) => {
	return {
		type: 'PRODUCTS/PRODUCTCATEGORY',
		payload: category,
	};
};

export const resetCategory = () => {
	return {
		type: 'PRODUCTS/RESET',
	};
};
