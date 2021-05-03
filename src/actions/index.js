export function addToBasket({ id, img, title, info, stars, price, count }) {
  return {
    type: "ADD_TO_BASKET",
    item: {
      id: id,
      title: title,
      img: img,
      price: price,
      stars: stars,
      count: count + 1,
      info: info,
    },
  };
}

export function removeFromCart(id) {
  return {
    type: "REMOVE_FROM_CART",
    payload: id,
  };
}

export function clearItemFromCart(id) {
  return {
    type: "CLEAR_ITEM_FROM_CART",
    payload: id,
  };
}
