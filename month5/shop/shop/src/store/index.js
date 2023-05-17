// TOOLKIT CONFIG
import { configureStore, createSlice } from "@reduxjs/toolkit";
const initState = {
	cart: [],
};

const cartSlice = createSlice({
	name: "cart",
	initialState: initState,
	reducers: {
		addItemToCart(state, action) {
			const product = {
				...action.payload,
				count: 1
			}
			let hasInCart = state.cart.find(el => el.id === product.id );
			if (hasInCart){
				state.cart.map(p =>{
					return p.id === product.id ? {...p, count: p.count++} : {...p};
				});
			} else {
				state.cart.push(product);
			}
		},
		removeItemInCart(state, action) {}, // dz (filter(el => el.id!==action.id))
	},
});

const store = configureStore(cartSlice);

export default store;

export const { addItemToCart } = cartSlice.actions;
