import React from 'react'
import {Route, Routes} from "react-router-dom";
import Products from '../products/Products';
import Signup from '../signup/Signup';
import Cart from '../cart/Cart';

const RRoutes = ({productItems, cartItems, handleAddProduct, handleRemoveProduct, handleCartClearance}) => {
  return (
    <div>
      <Routes>
        <Route path = "/"exact element={<Products productItems = {productItems} handleAddProduct = {handleAddProduct}/>}>
        </Route>
        <Route path = "/signup" exact element={<Signup />}>

        </Route>
        <Route path = "/cart" exact element = {<Cart  cartItems ={cartItems} handleAddProduct = {handleAddProduct}
        handleRemoveProduct = {handleRemoveProduct}
        handleCartClearance = {handleCartClearance}
        />}>
        </Route>
      </Routes>
    </div>
  )
}

export default RRoutes;
