import React from "react";
import Product from "../pages/product";

function Products(props) {
    return (
        <div>
            <div className="container mt-4">
                <div className="row">
                    {props.products.map(item => <Product key={item.id} product={item}/>)}
                </div>
            </div>
        </div>
    );
}

export default Products;
