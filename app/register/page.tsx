'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import './register.css';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RegisterPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        skills: '',
        agree: false,
    });
    const router = useRouter();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleRouter = () => {
        if //(formData.name === "Sıla" && formData.email === "sila@mindmons.com") {
            (formData.name.trim() !== '' && formData.email.trim() !== '') {
            localStorage.setItem('user', JSON.stringify({ name: formData.name, email: formData.email, skills: formData.skills }));
            toast.success("HOŞGELDİN");
            router.push('/');
        } else {
            toast.error("GEÇERSİZ KULLANICI");
        }
    };

    const inputClass = "w-60 px-2 py-2 text-sm rounded bg-[#1E1E2F] border border-gray-600 text-white";

    return (
        <div className='d-flex'>
            <div className="col-6 mt-5">
                <div className='d-flex justify-content-end position-relative'>
                    <div>
                        <img
                            className='position-absolute'
                            src="/frame.svg"
                            alt="Illustration"
                            style={{
                                height: "90vh",
                                width: "680px",
                                objectFit: "cover",
                                right: "-32px",
                                borderRadius: "12px",
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="col-6 mt-5">
                <div style={{ width: "680px" }} className='right-side px-5'>
                    <div style={{ marginLeft: "20px" }}>
                        <div className="logo-section">
                            <div className="logo-circle" />
                            <span className="logo-text">Logo</span>
                        </div>

                        <h1 className="title" style={{ fontSize: '30px' }}>Welcome to ExploreMe 👋</h1>

                        <p className="subtitle" style={{ opacity: 0.5, fontSize: '18px' }}>
                            Kindly fill in your details below to create an account
                        </p>

                        <form className="form">
                            <label style={{ opacity: 0.5 }}>Full Name</label>
                            <input
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                type="text"
                                className={inputClass}
                                placeholder="Enter your full name"
                            />

                            <label style={{ opacity: 0.5 }}>Email Address*</label>
                            <input
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                type="email"
                                className={inputClass}
                                placeholder="Enter your email address"
                                required
                            />

                            <label style={{ opacity: 0.5 }}>Select your Skills</label>
                            <input
                                name="skills"
                                value={formData.skills}
                                onChange={handleChange}
                                type="text"
                                className={inputClass}
                                placeholder="Search skills here..."
                            />

                            <div className="checkbox-section">
                                <input
                                    type="checkbox"
                                    name="agree"
                                    checked={formData.agree}
                                    onChange={handleChange}
                                />
                                <label>I agree to terms & conditions</label>
                            </div>

                            <div className="divider">or</div>

                            <button type="button"
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    border: '1px solid #ccc',
                                    padding: '8px 16px',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    justifyContent: 'center',
                                    gap: '8px',
                                    backgroundColor: '#0f0f0f',
                                    borderColor: '#0f0f0f',
                                }}>
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 533.5 544.3"
                                    width="20"
                                    height="20"
                                >
                                    <path fill="#4285F4" d="M533.5 278.4c0-17.4-1.5-34.1-4.3-50.2H272v95.1h146.9c-6.3 34.1-25 62.9-53.5 82.1v68h86.7c50.6-46.6 81.4-115.5 81.4-195z" />
                                    <path fill="#34A853" d="M272 544.3c72.6 0 133.5-24 178-65.2l-86.7-68c-24.1 16.2-55 25.7-91.3 25.7-70.2 0-129.7-47.4-151-111.2h-89.2v69.9c44.7 88.4 136.3 149.1 240.2 149.1z" />
                                    <path fill="#FBBC05" d="M121 325.6c-10.4-30.7-10.4-63.9 0-94.6v-69.9H31.8c-31.6 62.8-31.6 136.7 0 199.5L121 325.6z" />
                                    <path fill="#EA4335" d="M272 107.7c39.5-.6 77.4 13.5 106.6 39.5l79.7-79.7C411.7 24 345.4-1 272 0 168.1 0 76.5 60.7 31.8 149.1L121 219c21.3-63.8 80.8-111.3 151-111.3z" />
                                </svg>
                                Register with Google
                            </button>

                            <p className="login-link">
                                Already have an account? <a href="/login">Log in</a>
                            </p>
                        </form>

                        <button onClick={handleRouter} className="register-btn w-100">
                            Register Account Test
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
