let initialState = {};
// Reducers
export default (state = initialState, action) => {
	let { type, payload } = action;
	switch (type) {
		default:
			return state;

		case 'CART/ITEM':
			console.log('payload in Cart:', payload);
			return [payload];

		case 'CART/REMOVE_ITEM':
			return initialState;
	}
};

export const cartItem = (item) => {
	return {
		type: 'CART/ITEM',
		payload: item,
	};
};

export const removeItem = () => {
	return {
		type: 'CART/REMOVE_ITEM',
	};
};
