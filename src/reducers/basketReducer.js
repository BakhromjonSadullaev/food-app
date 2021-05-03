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

export const removeItem = (cartItems, cartItemToRemoveId) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemoveId
  );

  if (existingCartItem.quantity === 1)
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemoveId);

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemoveId
      ? {
          ...cartItem,
          quantity: cartItem.quantity - 1,
        }
      : cartItem
  );
};

export const totalCount = (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  );

export const totalSum = (cartItems) =>
  cartItems.reduce(
    (accumulatedQuantity, cartItem) =>
      accumulatedQuantity + cartItem.quantity * cartItem.price,
    0
  );

const basketReducer = (
  state = { basket: [], total: null, count: null },
  action
) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: addItemToCart(state.basket, action.item),
        // count: totalCount(state.basket),
        // total: totalSum(state.basket),
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        basket: removeItem(state.basket, action.payload),
        // count: totalCount(state.basket),
        // total: totalSum(state.basket),
      };
    case "CLEAR_ITEM_FROM_CART":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.payload),
        // count: totalCount(state.basket),
        // total: totalSum(state.basket),
      };
    default:
      return state;
  }
};

export default basketReducer;
