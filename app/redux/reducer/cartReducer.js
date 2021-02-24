const initialState = {
  cartList: [],
};

const CartReducer = (state = initialState, action) => {
  //cart reducer
  switch (action.type) {
    case 'ADD_TO_CART': {
      return {
        ...state,
        cartList: [...state.cartList, action.value],
      };
    }
    case 'DELETE_CART': {
      return {
        ...state,
        cartList: state.cartList.filter((item) => item.id !== action.value.id),
      };
    }
    case 'UPDATE_CART_INCREASE': {
      let newCart = state.cartList.map((item) => {
        if (item.id == action.value.id) {
          return {
            ...item,
            nqty: Number(item.nqty) + 1,
          };
        } else {
          return {...item};
        }
      });

      return {
        ...state,
        cartList: newCart,
      };
    }
    case 'UPDATE_CART_DECREASE': {
      let newCart = state.cartList.map((item) => {
        if (item.id == action.value.id) {
          return {
            ...item,
            nqty: Number(item.nqty) - 1,
          };
        } else {
          return {...item};
        }
      });

      return {
        ...state,
        cartList: newCart,
      };
    }
    default:
      return state;
  }
};

export default CartReducer;
