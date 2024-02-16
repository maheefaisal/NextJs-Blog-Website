import React from 'react';

const Footer = () => {
    return (
        <footer className="text-white text-center text-lg-start bg-dark">
            {/* Grid container */}
            <div className="container p-4">
                {/*Grid row*/}
                <div className="row mt-4">
                    {/*Grid column*/}
                    <div className="col-lg-4 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">About company</h5>
                        <p>
                            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium
                            voluptatum deleniti atque corrupti.
                        </p>
                        <p>
                            Blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas
                            molestias.
                        </p>
                        <div className="mt-4">
                            {/* Social media icons */}

                            <a href="#" className="btn btn-floating btn-warning btn-lg mx-2">
                                <ion-icon name="logo-facebook"></ion-icon>
                            </a>
                            <a href="#" className="btn btn-floating btn-warning btn-lg mx-2"><ion-icon name="logo-youtube"></ion-icon></a>
                            <a href="#" className="btn btn-floating btn-warning btn-lg mx-2"><ion-icon name="logo-twitter"></ion-icon></a>
                            <a href="#" className="btn btn-floating btn-warning btn-lg mx-2"><ion-icon name="logo-instagram"></ion-icon></a>
                            <a href="#" className="btn btn-floating btn-warning btn-lg"><ion-icon name="logo-whatsapp"></ion-icon></a>
                        </div>
                    </div>
                    {/*Grid column*/}

                    {/*Grid column*/}
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4 pb-1">Search something</h5>
                        {/* Search form with Bootstrap classes */}
                        <div className="input-group mb-4">
                            <input type="text" id="formControlLg" className="form-control form-control-lg" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                            <button className="btn btn-outline-warning" type="button" id="button-addon2">Search</button>
                        </div>
                        {/* Contact information */}
                        <ul className="fa-ul" style={{ marginLeft: '1.65em' }}>
                            <li className="mb-3">
                                <span className="fa-li"><ion-icon name="home-outline"></ion-icon></span><span className="ms-2">New York, NY 10012, US</span>
                            </li>
                            <li className="mb-3">
                                <span className="fa-li"><ion-icon name="mail-outline"></ion-icon></span><span className="ms-2">info@example.com</span>
                            </li>
                            <li className="mb-3">
                                <span className="fa-li">
                                    <ion-icon name="call-outline"></ion-icon>
                                </span><span className="ms-2">+ 01 234 567 88</span>
                            </li>
                            <li className="mb-3">
                                <span className="fa-li">
                                    <ion-icon name="call-outline"></ion-icon>
                                </span><span className="ms-2">+ 01 234 567 89</span>
                            </li>
                        </ul>
                    </div>
                    {/*Grid column*/}

                    {/*Grid column*/}
                    <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                        <h5 className="text-uppercase mb-4">Opening hours</h5>
                        {/* Opening hours table */}
                        <table className="table text-center text-white">
                            <tbody className="font-weight-normal">
                                <tr>
                                    <td>Mon - Thu:</td>
                                    <td>8am - 9pm</td>
                                </tr>
                                <tr>
                                    <td>Fri - Sat:</td>
                                    <td>8am - 1am</td>
                                </tr>
                                <tr>
                                    <td>Sunday:</td>
                                    <td>9am - 10pm</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/*Grid column*/}
                </div>
                {/*Grid row*/}
            </div>
            {/* Grid container */}

            {/* Copyright */}
            <div className="text-center p-3 bg-secondary">
                © 2020 Copyright:
                <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
            </div>
            {/* Copyright */}
        </footer>
    );
};

export default Footer;
