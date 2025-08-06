
'use client';
import React from 'react';
import { title } from 'process';
import Header from '../../components/Header';
import { HotelCard } from '../../components/HotelCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';



const hotels = [
    {
        id: '1',
        title: 'Mandarin Oriental, Bodrum',
        image: '/mandarin.png',
        price: '38.491 TL',
        rating: 9.2,
        location: 'Gümüşlük',
        type: 'Resort',
        description: 'Çarpıcı deniz manzaralı odalar,kusursuz bahçeler ve tasarım.',
    },
    {
        id: '2',
        title: 'Four Seasons Istanbul',
        image: '/fourseasons.png',
        price: '30.251 TL',
        rating: 9.4,
        location: 'Beşiktaş',
        type: 'Hotel',
        description: 'Geniş terastan Boğazın muhteşem manzarasının keyfini çıkarın, dinlenmek ve yemek yemek için mükemmel bir zemin.',
    },
    {
        id: '3',
        title: 'Metropolitan, Ankara',
        image: '/metropolitan.png',
        price: '4.222 TL',
        rating: 8.7,
        location: 'Ankara',
        type: 'Hotel',
        description: 'Camla çevrili çatı katı toplantı odasından nefes kesen panoramik şehir manzaralarının keyfini çıkar.',
    },
    {
        id: '4',
        title: 'Hampton By Hilton, Kocaeli',
        image: '/kocaeli.png',
        price: '3.853 TL',
        rating: 8.2,
        location: 'Başiskele',
        type: 'Hotel',
        description: 'Otelin tam donanımlı, günün her saati açık fitness merkezi sayesinde egzersiz rutinine istediğin zaman devam edebilirsin.',

    },
    {
        id: '5',
        title: 'Shangri-La Bosphorus, İstanbul',
        image: '/shangri.png',
        price: '12.870 TL',
        rating: 9.3,
        location: 'Ankara',
        type: 'Hotel',
        description: 'Isıtmalı kapalı havuzda serinletici bir yüzme keyfi yapın, rahatlamak ve egzersiz yapmak için mükemmel.',
    },
    {
        id: '6',
        title: 'Samsun Airport Resort, Samsun',
        image: '/samsun.png',
        price: '3.999 TL',
        rating: 7.6,
        location: 'Tekkeköy',
        type: 'Hotel',
        description: 'Sezonluk açık yüzme havuzuna ve dinlendirici bir saunaya erişim ile rahatlamanın ve eğlenmenin keyfini çıkar.',
    },
    {
        id: '7',
        title: 'Park Dedeman, Denizli',
        image: '/denizli.png',
        price: '3.278 TL',
        rating: 8.4,
        location: 'Denizli',
        type: 'Hotel',
        description: 'Konuklar, otelin restoranında servis edilen lezzetli yemeklere, özellikle de şefin kreasyonlarına bayılıyor.',
    },
    {
        id: '8',
        title: 'Buruciye, Sivas',
        image: '/sivas.png',
        price: '3.550 TL',
        rating: 8.8,
        location: 'Sivas',
        type: 'Hotel',
        description: 'Otelimizdeki restoranda lezzetli yemeklerin ve Sivasın tarihi simgelerinin muhteşem manzarasının tadını çıkarabilirsin, benden söylemesi!',
    },
    {
        id: '9',
        title: 'Shadow Cave House, Nevşehir',
        image: '/ürgüp.png',
        price: '3.300 TL',
        rating: 9.5,
        location: 'Ürgüp',
        type: 'Hotel',
        description: 'Konuklar terasta dinlenmenin, hoş manzaraların ve sağladığı huzurlu atmosferin tadını çıkarıyor.',
    },
    {
        id: '10',
        title: 'Yıldız Country, Sinop',
        image: '/sinop.png',
        price: '5.490 TL',
        rating: 7.4,
        location: 'Sinop',
        type: 'Hotel',
        description: 'Bungalovlar inanılmaz manzaralar sunuyor, bu da o manzara için yağmurda ıslanmaya değer kılıyor.',
    },
    {
        id: '11',
        title: 'D - Resort Ayvalık, Balıkesir',
        image: '/ayvalık.png',
        price: '16.120 TL',
        rating: 8.9,
        location: 'Ayvalık',
        type: 'Hotel',
        description: 'Her oda büyüleyici bahçe, doğa veya deniz manzarası sunarak Ayvalıktaki huzurlu kaçamağını zenginleştiriyor.',
    },
    {
        id: '12',
        title: 'Pasa Beach ,Muğla ',
        image: '/pasa.png',
        price: '12.936 TL',
        rating: 8.5,
        location: 'Marmaris',
        type: 'Hotel',
        description: 'Ailece eğlenmek için mükemmel olan, heyecan verici su kaydıraklarına sahip bir havuz da dahil olmak üzere, kapalı ve açık havuzların keyfini çıkar!',
    },




];

export default function HotelsPage() {
    return (
        <>
            <Header />
            <div
                style={{
                    backgroundColor: '#212529',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    minHeight: '100vh',
                    paddingTop: '100px',
                }}
            >
                <div className="container text-white">

                    <h1 className="text-center fw-bold mb-4 text-white"></h1>

                    <div className="my-5">
                        <h3 className="fw-bold mb-3 text-white " style={{ paddingLeft: '50px' }} >Son Görüntülenen</h3>

                        <div className="swiper-wrapper-container position-relative">
                            <div className="swiper-button-prev-custom">&#10094;</div>


                            <Swiper
                                modules={[Navigation]}
                                spaceBetween={20}
                                slidesPerView={3}
                                navigation={{
                                    nextEl: '.swiper-button-next-custom',
                                    prevEl: '.swiper-button-prev-custom',
                                }}

                                grabCursor={true}
                                draggable={true}
                                allowTouchMove={true}

                                className="custom-swiper"
                            >
                                {hotels.slice(0, 5).map((hotel, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            className="card"
                                            style={{ backgroundColor: '#67686dff' }}
                                        >
                                            <img
                                                src={hotel.image}
                                                className="card-img-top"
                                                alt={hotel.title}
                                                style={{ height: '150px', objectFit: 'cover' }}
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title text-white fw-bold">{hotel.title}</h5>
                                                <p className="card-text text-white">{hotel.location}</p>
                                                <p className="badge bg-success">{hotel.rating}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                            <div className="swiper-button-next-custom">&#10095;</div>
                        </div>

                    </div>
                    <div className="row">
                        {hotels.map((hotel, index) => (
                            <div className="col-12 " key={index}>
                                <HotelCard {...hotel} />
                            </div>
                        ))}
                    </div>



                </div>
            </div>

        </>
    );
}