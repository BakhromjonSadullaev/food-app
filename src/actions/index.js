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

export function incrementQuantity(id, val) {
  return {
    type: "INCREMENT_QUANTITY",
    id,
    up: val,
  };
}
