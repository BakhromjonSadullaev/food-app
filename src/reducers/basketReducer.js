// export const initialState = {
//   basket: [],
// };

import { addToBasket } from "../actions";

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }

  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};

const basketReducer = (state = { basket: [] }, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: addToBasket(state.basket, action.item),
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default basketReducer;
