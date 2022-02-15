let initialState = [];
// Reducers
export default (state = initialState, action) => {
	let { type, payload } = action;
	switch (type) {
		default:
			return state;

		case 'CART/ITEM':
			let addToCart = state.filter((product) => product.name !== payload.name);
			return [...addToCart, payload];

		case 'CART/REMOVE_ITEM':
			let deletedItem = state.filter((product) => product.id !== payload);
			return [...deletedItem];
	}
};

export const cartItem = (item) => {
	return {
		type: 'CART/ITEM',
		payload: item,
	};
};

export const removeItem = (id) => {
	return {
		type: 'CART/REMOVE_ITEM',
		payload: id,
	};
};
