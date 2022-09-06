import React from "react";

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    //these parametres below are functions
    addItem: (item) => {},
    removeItem: (id) => {},
    clearCart: () => {}
})

export default CartContext