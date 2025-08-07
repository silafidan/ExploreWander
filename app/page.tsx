'use client';
import Image from 'next/image';
import './globals.css';
import AccountNavButton from '../components/AccountNavButton';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import BootstrapScript from '../components/BootstrapScript';

export default function Home() {

  const router = useRouter();
  return (
    <>

      <BootstrapScript />
      <div
        style={{
          backgroundImage: "url('/home.jpg')",
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          backgroundSize: 'cover',
          minHeight: '100vh',
        }}
        className="h-screen w-screen text-white"
      >
        <div
          className="position-absolute top-0 start-0 w-100 h-100"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 0 }}
        ></div>

        <div
          className="h-100 d-flex align-items-center position-relative"
          style={{ zIndex: 1, paddingLeft: '150px' }}
        >
          <nav
            className="navbar navbar-expand-lg navbar-dark fixed-top px-4"
            style={{
              backdropFilter: 'blur(15px)',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              zIndex: 1000,
              height: '90px',
            }}
          >
            <div
              style={{
                backdropFilter: 'blur(8px)',
                backgroundColor: 'rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                padding: '6px 12px',
              }}
            ></div>

            <div className="container-fluid">
              <Link href="/" className="navbar-brand d-flex align-items-center gap-2">
                <Image src="/explorewander.svg" alt="Logo" width="220" height="220" />
                <span className="fw-semibold text-white"></span>
              </Link>

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
                    <Link href="/" className="nav-link text-white ">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" className="nav-link text-white" >Flights</Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/hotels" className="nav-link text-white">
                      Hotels
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link href="/" className="nav-link text-white" >About</Link>
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

          <div className="d-flex align-items-center h-100">
            <div className="text-white">
              <h1 className="text-5xl fw-semibold mb-4 display-3" style={{ color: 'white', marginTop: '200px' }}>
                Wander. Unwind. <br /> Your Journey Begins <br /> Here
              </h1>
              <p
                className="hero-description text-lg mb-6 text-white/90 fs-4"
                style={{
                  fontFamily: 'sans-serif poppins',
                  fontWeight: 400,
                  fontSize: '24px',
                }}
              >
                Whether you seek the thrill of uncharted paths or the <br />
                tranquility of breathtaking landscapes, our traveling <br />
                community is your passport to a world of endless <br />
                possibilities. Your extraordinary voyage starts now.
              </p>

              <button
                className="px-4 py-2 fw-semibold text-black"
                style={{
                  backgroundColor: '#D3FBD8',
                  fontSize: '18px',
                  borderRadius: '999px',
                  border: 'none',
                }}
              >
                Sign up for free
              </button>
            </div>
          </div>
        </div>
      </div>


      <div className="container ">
        <div className=" py-5 ">

          <h2 className="text-center mb-5 fw-bold">Why Choose ExploreWander?</h2>
          <div className="row text-center">

            <div className="col-md-4 mb-4 text-center">
              <div
                className="rounded-circle mx-auto shadow"
                style={{
                  width: '250px',
                  height: '250px',
                  backgroundImage: "url('/seyehat.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <h5 className="fw-bold mt-4">Easy Booking</h5>
              <p style={{ fontSize: '14px', maxWidth: '250px', margin: '0 auto' }}>
                Book your travels effortlessly with our user-friendly platform.
              </p>
            </div>

            <div className="col-md-4 mb-4 text-center">
              <div
                className="rounded-circle mx-auto shadow"
                style={{
                  width: '250px',
                  height: '250px',
                  backgroundImage: "url('/pasaport.jpg')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <h5 className="fw-bold mt-4">Best Prices</h5>
              <p style={{ fontSize: '14px', maxWidth: '250px', margin: '0 auto' }}>
                We guarantee competitive rates on all flights and hotels.
              </p>
            </div>

            <div className="col-md-4 mb-4 text-center">
              <div
                className="rounded-circle mx-auto shadow"
                style={{
                  width: '250px',
                  height: '250px',
                  backgroundImage: "url('/247.png')",
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              ></div>
              <h5 className="fw-bold mt-4">24/7 Support</h5>
              <p style={{ fontSize: '14px', maxWidth: '250px', margin: '0 auto' }}>
                Get help whenever you need it with our dedicated support team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="fluid mt-5 ">
        <div
          className="mx-0 py-5 px-4"
          style={{
            background: 'linear-gradient(to bottom, #000, #69aa72ff)',
            color: 'white',
            borderRadius: '0',
            boxShadow: '0 0 20px rgba(0,0,0,0.2)',
          }}
        >



          <div className="container py-5">
            <div className="row">
              <div className="col-md-6 mb-4">
                <h3
                  className="fw-bold mb-4"
                  style={{
                    borderLeft: '4px solid #dddfe0ff',
                    paddingLeft: '10px',
                    marginTop: '-30px',
                  }}
                >
                  FAQ
                </h3>
                <p className="section-mid-text">
                  Still have questions? We’re here to help — just reach out via our contact form <br /> and we’ll get back to you shortly!
                </p>

                <button
                  className="btn btn-light fw-semibold"
                  style={{ borderRadius: '999px', padding: '8px 20px', color: '#234428ff' }}
                  onClick={() => router.push('/contact')}
                >
                  Get Contact
                </button>
              </div>
              <div className="col-md-6 mb-4">

                <div className="accordion" id="faqAccordion" style={{ marginTop: '-10px' }}>
                  <div className="accordion-item bg-transparent border-0">
                    <h2 className="accordion-header" id="headingOne">
                      <button
                        className="accordion-button text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseOne"
                        aria-expanded="true"
                        aria-controls="collapseOne"
                        style={{ backgroundColor: "rgba(255, 255, 255, 0.1)", color: "#ffffff", backdropFilter: "blur(6px)", border: "1px solid #ffffffff", borderRadius: "8px" }}
                      >
                        What is ExploreWander?
                      </button>
                    </h2>
                    <div
                      id="collapseOne"
                      className="accordion-collapse collapse show"
                      aria-labelledby="headingOne"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body text-white">
                        ExploreWander is your travel companion, offering the best tools and prices for unforgettable journeys.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-transparent border-0">
                    <h2 className="accordion-header" id="headingTwo">
                      <button
                        className="accordion-button collapsed text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo"
                        aria-expanded="false"
                        aria-controls="collapseTwo"
                        style={{ backgroundColor: "rgba(200, 200, 200, 0.1)", color: "#ffffff", backdropFilter: "blur(6px)", border: "1px solid #ffffffff", borderRadius: "8px", marginTop: "10px" }}
                      >
                        How do I book a trip?
                      </button>
                    </h2>
                    <div
                      id="collapseTwo"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingTwo"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body text-white">
                        You can book trips easily by selecting your destination, choosing a date, and completing your booking through our secure platform.
                      </div>
                    </div>
                  </div>
                  <div className="accordion-item bg-transparent border-0">
                    <h2 className="accordion-header" id="headingThree">
                      <button
                        className="accordion-button collapsed text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseThree"
                        aria-expanded="false"
                        aria-controls="collapseThree"
                        style={{ backgroundColor: "rgba(200, 200, 200, 0.1)", color: "#ffffff", backdropFilter: "blur(6px)", border: "1px solid #e6e9e6ff", borderRadius: "8px", marginTop: "10px" }}
                      >
                        Is customer support available?
                      </button>
                    </h2>
                    <div
                      id="collapseThree"
                      className="accordion-collapse collapse"
                      aria-labelledby="headingThree"
                      data-bs-parent="#faqAccordion"
                    >
                      <div className="accordion-body text-white">
                        Yes, our 24/7 support team is always ready to assist you with any questions or issues.
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>



      <div
        id="contact-section"
        className=" py-5"
        style={{
          background: 'linear-gradient(to bottom, #69aa72ff)',
          paddingBottom: '4rem',

        }}
      >
        <div className="container px-0 ">
          <div className="row justify-content-end text-start " style={{ paddingLeft: '16px' }}>
            <div className="col-md-6 mb-4">
              <h2 className="text-start mb-0 fw-bold" style={{ borderLeft: '4px solid', paddingLeft: '10px' }}>
                Contact Us
              </h2>
              <p className="text-start mb-0 text-white mt-4">
                You can reach us through our contact information and get detailed  <br /> information or support.
              </p>
            </div>
            <div className="col-md-6 mb-4">
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email address</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea className="form-control" id="message" rows={4} placeholder="Your message here..."></textarea>
                </div>
                <button type="submit" className="btn btn-success rounded-pill px-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>


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





    </>
  );
}   