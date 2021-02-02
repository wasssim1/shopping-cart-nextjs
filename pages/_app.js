import React from "react";
import '../styles/globals.css';
import Layout from "../components/Layout";
import CartContextProvider from "../contexts/CartContext";

// import 'bootstrap/dist/css/bootstrap.min.css';

function MyApp({Component, pageProps}) {
    return (
        <CartContextProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </CartContextProvider>
    )
}

export default MyApp
