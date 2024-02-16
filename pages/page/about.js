import Link from 'next/link';
import React from 'react';

const About = () => {
    return (
        <>
            <div className="container">
                <h1 className="my-4 text-center">About <span className="badge bg-secondary">Us</span></h1>
                <div className="position-absolute start-50 translate-middle">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb">
                            <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                            <li className="breadcrumb-item active" aria-current="page">About Us</li>
                        </ol>
                    </nav>
                </div>
                <div className="d-grid gap-2 p-4">
                    <button className="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasBottom" aria-controls="offcanvasBottom">Our Moto</button>

                </div>
                <div className="offcanvas offcanvas-bottom" tabIndex="-1" id="offcanvasBottom" aria-labelledby="offcanvasBottomLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasBottomLabel">Our Moto</h5>
                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body small">
                        We're passionate about unraveling the intricate tapestry of programming languages. Our platform serves as a dynamic hub where enthusiasts, learners, and experts converge to explore the latest trends, dive deep into coding concepts, and exchange insights on languages ranging from Python and JavaScript to C++ and beyond. With a blend of informative articles, tutorials, and community-driven discussions, we aim to empower individuals to harness the full potential of programming languages. Whether you're a novice embarking on your coding journey or a seasoned developer seeking to expand your repertoire, join us as we navigate the ever-evolving landscape of programming.
                    </div>
                </div>
                <h1 className='text-center mb-4'>Happy Clients</h1>
                <div>
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card">
                                <img src="https://customersfirstacademy.com/wp-content/uploads/2021/04/How-to-keeping-customers-happy.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="https://customersfirstacademy.com/wp-content/uploads/2021/04/strategies-for-Creating-a-Happy-Customer-1024x576.jpg" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card">
                                <img src="https://www.westlawcanada.com/dynamicdata/images/2106_promote-scores-blog-65774279-500x300.jpg" class="card-img-top" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title">Card title</h5>
                                    <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
