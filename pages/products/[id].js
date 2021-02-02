import React, {useEffect} from "react";
import fetch from 'isomorphic-unfetch';
import ProductItem from '../../components/ProductItem';
import Head from "next/head";

const ProductItemPage = props => {
    useEffect(() => window.document.title = props.product.name || 'Shopping Cart', []);

    return (
        <ProductItem product={props.product}/>
    )
};
ProductItemPage.getInitialProps = async function (context) {
    const {id} = context.query;
    const res = await fetch(`https://my-json-server.typicode.com/mood-board/demo/products/${id}`);
    const product = await res.json();
    return {product};
};

export default ProductItemPage;
