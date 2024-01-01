import { createSelector } from 'reselect';

const baseSelector = (state) => state.cart;

//createselector will be triggered whenever baseselector "cart" 
//changed also it internally memoize the state so no need to use useMemo here

const calculateTotal = (cart, property) => {
  return Object.values(cart).reduce((total, product) => {
    return total + (product.quantity * product[property]) || 0;
  }, 0);
};

export const totalItemsSelector = createSelector(
  baseSelector,
  (cart) => calculateTotal(cart, 'price')
);

export const cartItemsSelector = createSelector(
  baseSelector,
  (cart) => calculateTotal(cart, 'quantity')
);
