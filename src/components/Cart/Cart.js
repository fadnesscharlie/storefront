import { v4 as uuidv4 } from 'uuid';

let initialState = {
	// cartItems: [
	// 	{
	// 		// Category: 'food',
	// 		// name: 'Pizza',
	// 		// description: 'Bread, cheese, and tomatoes all in one',
	// 		// price: 10,
	// 		// inventoryCount: 12,
	// 		// cart: false,
	// 		// id: uuidv4(),
	// 	},
	// ],
};

// Reducers
export default (state = initialState, action) => {
	let { type, payload } = action;
  // console.log('action:', action);
	switch (type) {
		default:
			return state

		case 'CART/ITEM':
			console.log('payload in Cart:', payload);
			return [payload];
    
    case 'CART/REMOVE_ITEM':
      return initialState
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
    type: 'CART/REMOVE_ITEM'
  }
}
