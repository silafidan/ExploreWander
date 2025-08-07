import React from 'react';
import Image from 'next/image';
import Link from 'next/link';




type Props = {
    id: string;
    title: string;
    image: string;
    price: string;
    rating: number;
    location: string;
    type: string;
    description: string;
    latitude?: number;
    longitude?: number;


};
export const HotelCard = ({ id, title, image, price, rating, location, type, description, latitude, longitude }: Props) => {
    return (
        <Link href={` /hotels/${id}`} className="text-decoration-none">
            <div className="card mb-5 shadow-sm border-0 p-3"
                style={{ backgroundColor: '#67686dff' }}>
                <div className="row g-0 align-items-stretch" >
                    <div className="col-md-3 " style={{ position: 'relative', minHeight: '200px' }}>

                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="rounded-start"
                            style={{ backgroundColor: '#c9f8d0ff ', objectFit: 'cover', borderRadius: '0.5rem' }} />
                    </div>


                    <div className="col-md-9 py-3 px-5 ">


                        <h5 className="fw-bold mb-1 text-white">{title}</h5>

                        <p className="mb-2 text-white">{type} – {location}</p>
                        <span className="badge bg-success ">⭐ {rating} Excellent</span>
                        <p className="mt-2 text-secondary text-white" style={{ fontSize: '0.9rem' }}>
                            {description}
                        </p>



                        <div className="col-md-1  text-end  d-flex flex-column justify-content-center  align-items-center ms-auto"
                            style={{ minWidth: '100px' }}>
                            <div className="p-3 rounded mt-3 "
                                style={{ color: 'rgba(255, 255, 255, 1)', backgroundColor: '#198754', display: 'inline-block', minWidth: '200px', textAlign: 'center', position: 'relative', top: '15px' }}>

                                <div className="fw-bold text-white " style={{ fontSize: '18px' }}>{price}</div>

                                <small className="text-white">From 8 sites</small>


                                <button className="btn btn-outline-light btn-sm mt-2 ">See Prices</button>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Link>
    );
};
