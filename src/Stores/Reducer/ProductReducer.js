import React from 'react';


const ProductReducer = (state, action) => {



    switch (action.type) {

        case "setProducts": {
            const data = state.products.concat(action.payload);
            return { ...state, products: [...data] }
            // console.log(action.payload)
            // return { ...state, products:[...products,action.payload]  }
        }


        default:
            return state;
    }

}

// state.products.concat(action.payload)

export default ProductReducer;
