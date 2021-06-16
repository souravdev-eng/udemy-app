export const addItemToCart = (cartItems, cartItemToAdd) => {
  //1) We cheack that our redux cart item is matched or not with the new cart item

  const exsitingItem = cartItems.find(
    (cartItem) => cartItem._id === cartItemToAdd._id
  );
  //2) If exsit then we map the data and add quantity field + 1
  if (exsitingItem) {
    return cartItems.map((cartItem) =>
      cartItem._id === cartItemToAdd._id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  //3) If not then sprate the cart item and add quantity field 1
  return [...cartItems, { ...cartItemToAdd, quantity: 1 }];
};
