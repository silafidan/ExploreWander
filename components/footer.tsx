'use client';
import React from 'react';
import Link from 'next/link';

export default function Header() {
    return (
        <footer className="bg-dark text-white pt-4 pb-4" >
            <div className="container ">
                <div className="row text-start text-md-left justify-content-between">

                    <div className="col-md-4 mb-4 ">
                        <h6 className="text-uppercase fw-bold mb-3" style={{ fontSize: '25px' }} >Explore Wander</h6>
                        <link
                            rel="stylesheet"
                            href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.5/font/bootstrap-icons.css"



                        />

                        <div className="d-flex gap-3 mb-3">

                            <a href="https://instagram.com" className="text-white fs-4" target="_blank">
                                <i className="bi bi-instagram"></i>
                            </a>
                            <a href="https://youtube.com" className="text-white fs-4" target="_blank">
                                <i className="bi bi-youtube"></i>
                            </a>
                        </div>

                        <p>The easiest way to explore! Flight tickets, hotels and more are here.</p>
                    </div>

                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 ">
                        <h6 className=" mb-4 fw-bold" style={{ fontSize: '20px', marginTop: '-15px' }}>Home</h6>
                        <p><a href="#" className="text-white text-decoration-none">Flights</a></p>
                        <p><a href="#" className="text-white text-decoration-none">Hotels</a></p>
                        <p><a href="#" className="text-white text-decoration-none">About</a></p>
                        <p><a href="#" className="text-white text-decoration-none">FAQ</a></p>
                        <p><a href="#" className="text-white text-decoration-none">Contact</a></p>
                    </div>

                    <div className="col-lg-4 col-md-12 mb-4">
                        <h5 className=" mb-4 fw-bold">Contact</h5>
                        <p><i className="bi bi-envelope me-2 "></i> info@explore.wander</p>

                        <button className="btn btn-outline-light btn-sm " style={{ width: '120px', height: '40px', fontSize: '16px', borderRadius: '24px' }}>Contact Us</button>
                    </div>
                </div>

                <hr className="mb-4  text-white" />
                <div className="text-center">

                    <p className="mb-0">&copy; 2025 ExploreWander. All rights reserved.</p>

                </div>
            </div>
        </footer>

    );
}