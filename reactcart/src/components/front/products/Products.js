import React from "react";
import "./Products.css";
const Products = ({ productItems, handleAddProduct}) => {
  console.log("pitems", productItems);
  return (
    <div>
      <div className="products">
        {productItems.map((productItem) => (
          <div className="card">
            <img
              className="product-image"
              src={productItem.image}
              alt={productItem.name}
            />
            <h3 className="product-name">{productItem.name}</h3>
            <div className="product-price">

                {productItem.price}

            </div>
            <div> 

                <button className="product-add-button" onClick={()=>handleAddProduct(productItem)}> Add to Cart</button>
            </div>
          </div>
        ))}
      </div>

      <div></div>
    </div>
  );
};

export default Products;
