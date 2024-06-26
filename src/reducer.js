// import { act } from "react-dom/test-utils";

export const initialState = {
    basket:[],
    user: null,
};

export const getBasketTotal = (basket) =>
basket?.reduce((amount,item) => Number(item.price) + Number(amount), 0);

const reducer = (state, action) => {
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };

        case 'ADD_TO_BASKET':
            return{
                ...state,
                basket: [...state.basket , action.item] 
            };
        
        case 'EMPTY_BASKET':
            return{
                ...state,
                basket: []
            }

        case 'REMOVE_FROM_BASKET':
            //logic for removal
            let newBasket = [...state.basket];
            const index = state.basket.findIndex((basketItem)  => basketItem.id === action.id);

            if(index >= 0){
                newBasket.splice(index,1);

            }else{
                console.warn("Cant remove product id:${action.id} as its not present in the basket.")
            }
            return {...state, basket: newBasket};
            break;
        default:
            return state;
    }
} 

export default reducer;