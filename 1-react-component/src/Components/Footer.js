import React from "react";

function Footer (){
return(
    <footer className="bg-dark text-white mt-5 py-4">
        <div className="container">
            <div className="row">
                <div className="col-md-4 mb-3 mb-md-0">
                    <h5>About Us</h5>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor erat in nisl cursus, nec varius mi laoreet.</p>
                </div>
                <div className="col-md-4 mb-3 mb-md-0">
                    <h5>Quick Links</h5>
                    <ul className="list-unstyled">
                        <li><a href="/#" className="text-white text-decoration-none">Home</a></li>
                        <li><a href="/#" className="text-white text-decoration-none">About</a></li>
                        <li><a href="/#" className="text-white text-decoration-none">Services</a></li>
                        <li><a href="/#" className="text-white text-decoration-none">Contact</a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <h5>Contact Us</h5>
                    <address>
                        <p><i className="bi bi-geo-alt"></i> 123 Main Street, City, Country</p>
                        <p><i className="bi bi-envelope"></i> email@example.com</p>
                        <p><i className="bi bi-phone"></i> +123 456 7890</p>
                    </address>
                </div>
            </div>
            <div className="text-center mt-4">
                <p>&copy; 2024 Your Company. All rights reserved.</p>
            </div>
        </div>
    </footer>
);
}

export default Footer;