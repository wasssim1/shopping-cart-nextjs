import React, {Component} from 'react';

const Footer = (props) => {
    const style = {
        "position": "absolute",
        "bottom": "0",
        "width": "100%",
        "backgroundColor": "#333",
        "color":"#fff",
    };
    return (
        <footer style={style} className="page-footer font-small bg-blue pt-4">
            <div className="container text-center text-md-center">
                <div className="row">
                    <div className="col-md-6 mt-md-0 mt-3">
                        <h5 className="text-uppercase font-weight-bold">Contact Us</h5>
                        <p>Phone: +49 123456789</p>
                    </div>
                    <div className="col-md-6 mb-md-0 mb-3">
                        <h5 className="text-uppercase font-weight-bold">Services</h5>
                        <p>Service 1</p>
                        <p>Service 2</p>
                    </div>
                </div>
            </div>
            <div className="footer-copyright text-center py-3">© 2020 Copyright
                <span> XXX</span>
            </div>
        </footer>
    );
};

export default Footer;
