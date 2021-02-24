export function addInCart(data) {
  //add to cart method
  return (dispatch) => {
    dispatch({type: 'ADD_TO_CART', value: data});
  };
}

export function updatecartincrease(data) {
  //update cart increase quantity method
  return (dispatch) => {
    dispatch({type: 'UPDATE_CART_INCREASE', value: data});
  };
}
export function updatecartdecrease(data) {
  //update cart decrease quantity method
  return (dispatch) => {
    dispatch({type: 'UPDATE_CART_DECREASE', value: data});
  };
}

export function deleteCart(data) {
  // cart delete method
  return (dispatch) => {
    dispatch({type: 'DELETE_CART', value: data});
  };
}
