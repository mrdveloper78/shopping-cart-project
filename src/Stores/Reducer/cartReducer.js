import React from 'react';



const sumItems = (item) => {

    const itemsConter = item.reduce((sum, product) => sum + product.quantity, 0);

    let total = item.reduce(
        (total, product) => total + product.price * product.quantity, 0
    )
    total = Number(total).toFixed(2)

    return { itemsConter, total }
}

const cartReducer = (state, action) => {

    console.log(state)

    switch (action.type) {

        case "getAll": {
            return { ...state, allProducts: [...action.payload] }
        }

        case "AddNewItem": {
            if (!state.selectedItems.find(item => item.id === action.payload.id)) {
                state.selectedItems.push({
                    ...action.payload, quantity: 1
                })
            }
            return {
                ...state,
                selectedItems: [...state.selectedItems],
                ...sumItems(state.selectedItems),
                checkOut: false
            }
        }

        case "RemoveItem": {
            const newSelectedItems = state.selectedItems.filter(
                item => item.id !== action.payload.id);
            return {
                ...state, selectedItems: [...newSelectedItems],
                ...sumItems(newSelectedItems)
            }
        }

        case "Increase": {
            const indexI = state.selectedItems.findIndex(
                item => item.id === action.payload.id
            )
            state.selectedItems[indexI].quantity++;
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        }

        case "Decrease": {
            const indexD = state.selectedItems.findIndex(
                item => item.id === action.payload.id
            )
            state.selectedItems[indexD].quantity--;
            return {
                ...state,
                ...sumItems(state.selectedItems)
            }
        }

        case "Checkout": {
            return {
                selectedItems: [],
                itemsConter: 0,
                total: 0,
                checkOut: true
            }
        }

        case "Clear": {
            return {
                selectedItems: [],
                itemsConter: 0,
                total: 0,
                checkOut: false
            }
        }

        default:
            return state;
    }

}



export default cartReducer;
