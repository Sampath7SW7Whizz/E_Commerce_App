//these are actions
const ACTION_PREFIX="CART/";

const ADD_TO_CART=ACTION_PREFIX+"ADD_TO_CART";
//to manage typo errors we are making variable for string and using in many places
const REMOVE_FROM_CART=ACTION_PREFIX+"REMOVE_FROM_CART";

const initialState={};

export const addToCart=(product)=>({
    type:ADD_TO_CART,
    payload:product

});

export const removeFromCart=(product)=>({
    type:REMOVE_FROM_CART,
    payload:product

});

export default function cartReducer(state=initialState,action){
  switch (action.type) {

    case ADD_TO_CART:{
        const newCart={...state};
        if(newCart[action.payload.id]){
         const newProduct={...newCart[action.payload.id]};
         newProduct.quantity+=1;
         newCart[action.payload.id]=newProduct;
        }else{
         const newProduct={
             ...action.payload,
             quantity:1
         }
         newCart[action.payload.id]=newProduct;
        }
        return newCart;
    }

    case REMOVE_FROM_CART:{
        const newCart={...state};

        //guardclause
        if(!newCart[action.payload.id]) return;

        if(newCart[action.payload.id].quantity===1 ){
           delete newCart[action.payload.id];
        }else{
            const newProduct={...newCart[action.payload.id]};
            newProduct.quantity-=1;
         newCart[action.payload.id]=newProduct;
        }
        return newCart;
    }

    default:
        return state;
  }
}