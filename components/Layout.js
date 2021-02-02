import React from "react";
import Head from 'next/head'
import Navbar from './Navbar.js'
import Footer from './Footer.js'

function Layout(props) {
    return (
        <div>
            <Head>
                <title>Shopping Cart</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
                    integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
                    crossOrigin="anonymous"
                />
            </Head>
            <Navbar/>
            <div className="container-fluid">
                {props.children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
