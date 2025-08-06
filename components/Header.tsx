'use client';
import React from 'react';
import Link from 'next/link';
import AccountNavButton from './AccountNavButton';
export default function Header() {
    return (
        <nav className="navbar navbar-expand-lg  fixed-top px-4" style={{ backdropFilter: 'blur(15px)', backgroundColor: 'rgba(255, 255, 255, 0.2)', zIndex: 1000, height: '90px' }}>
            <div
                style={{
                    backdropFilter: 'blur(8px)',
                    backgroundColor: 'rgba(255, 255, 255, 0.2)',
                    borderRadius: '12px',
                    padding: '6px 12px',
                }}
            ></div>
            <div className="container">
                <a className="navbar-brand d-flex align-items-center gap-2" href="#">
                    <img src="/explorewander.svg" alt="Logo" width="220" height="220" />
                    <span className="fw-semibold text-white"></span>
                </a>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto gap-3 fs-5" style={{ marginRight: '30px', marginTop: '4px' }}>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="#">Home</a>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link text-white" href="#">Flights</a>
                        </li>
                        <li className="nav-item ">
                            <Link href="/hotels" className="nav-link text-white">
                                Hotels
                            </Link>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link text-white" href="#">About</a>
                        </li>
                    </ul>

                    <div className="d-flex align-items-center" style={{ marginRight: '30px' }}>
                        <AccountNavButton />
                    </div>

                    <div className="d-flex gap-2">
                        <a href="#"><img src="/playstore.svg" alt="Google Play" height="50" /></a>
                        <a href="#"><img src="/appstore.svg" alt="App Store" height="50" /></a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
