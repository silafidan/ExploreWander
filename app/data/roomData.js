


const roomData = [

    {
        "hotelId": "1",
        "rooms": [
            {
                "name": "Deluxe Oda",
                "image": "/mandarinoda1.png",
                "capacity": 3,
                "amenities": [
                    "Minibar",
                    "Klima",
                    "TV"
                ],
                "pricePerNight": "35.900 TL",
                "availableDates": [
                    { start: new Date("2025-08-06"), end: new Date("2025-08-08") }, { start: new Date("2025-08-12"), end: new Date("2025-08-15") }]
            },
            {
                "name": "Standart Oda",
                "image": "/mandarinoda2.png",
                "capacity": 3,
                "amenities": [
                    "Minibar",
                    "TV",
                    "Klima"
                ],
                "pricePerNight": "32.875 TL",
                "availableDates": [
                    { start: new Date("2025-08-07"), end: new Date("2025-08-10") }, { start: new Date("2025-08-14"), end: new Date("2025-08-17") }]
            },
            {
                "name": "Deluxe Oda",
                "image": "/mandarinoda3.png",
                "capacity": 2,
                "amenities": [
                    "Klima",
                    "Wi-Fi",
                    "Minibar"
                ],
                "pricePerNight": "26.055 TL",
                "availableDates": [
                    { start: new Date("2025-08-08"), end: new Date("2025-08-10") }, { start: new Date("2025-08-14"), end: new Date("2025-08-20") }]
            }
        ]
    },
    {
        "hotelId": "2",
        "rooms": [
            {
                "name": "Standart Oda",
                "image": "/fourfoto1.png",
                "capacity": 3,
                "amenities": [
                    "Minibar",
                    "TV",
                    "Klima"
                ],
                "pricePerNight": "8.314 TL",
                "availableDates": [{ start: new Date("2025-08-03"), end: new Date("2025-08-05") }, { start: new Date("2025-08-08"), end: new Date("2025-08-13") }]
            },
            {
                "name": "Suit Oda",
                "image": "/fourfoto3.png",
                "capacity": 4,
                "amenities": [
                    "TV",
                    "Klima",
                    "Minibar"
                ],
                "pricePerNight": "3.982 TL",
                "availableDates": [{ start: new Date("2025-08-01"), end: new Date("2025-08-04") }, { start: new Date("2025-08-06"), end: new Date("2025-08-22") }]
            },
            {
                "name": "Standart Oda",
                "image": "/fourfoto2.png",
                "capacity": 4,
                "amenities": [
                    "Klima",
                    "Wi-Fi",
                    "TV"
                ],
                "pricePerNight": "7.432 TL",
                "availableDates": [{ start: new Date("2025-08-02"), end: new Date("2025-08-07") }, { start: new Date("2025-08-10"), end: new Date("2025-08-11") }]
            }
        ]
    },
    {
        "hotelId": "3",
        "rooms": [
            {
                "name": "Deluxe Oda",
                "image": "/metropolitanfoto1.png",
                "capacity": 4,
                "amenities": [
                    "Wi-Fi",
                    "Klima",
                    "Minibar"
                ],
                "pricePerNight": "5.048 TL",
                "availableDates": [{ start: new Date("2025-08-01"), end: new Date("2025-08-04") }, { start: new Date("2025-08-09"), end: new Date("2025-08-12") }]
            },
            {
                "name": "Deluxe Oda",
                "image": "/metropolitanfoto2.png",
                "capacity": 2,
                "amenities": [
                    "TV",
                    "Wi-Fi",
                    "Minibar"
                ],
                "pricePerNight": "4.171 TL",
                "availableDates": [{ start: new Date("2025-08-03"), end: new Date("2025-08-06") }, { start: new Date("2025-08-11"), end: new Date("2025-08-19") }]
            },
            {
                "name": "Suit Oda",
                "image": "/metropolitanfoto3.png",
                "capacity": 2,
                "amenities": [
                    "TV",
                    "Minibar",
                    "Wi-Fi"
                ],
                "pricePerNight": "5.646 TL",
                "availableDates": [{ start: new Date("2025-08-02"), end: new Date("2025-08-08") }, { start: new Date("2025-08-12"), end: new Date("2025-08-22") }]
            }
        ]
    },
    {
        "hotelId": "4",
        "rooms": [
            {
                "name": "Suit Oda",
                "image": "/hilton1.png",
                "capacity": 4,
                "amenities": [
                    "TV",
                    "Klima",
                    "Wi-Fi"
                ],
                "pricePerNight": "4.943 TL",
                "availableDates": [{ start: new Date("2025-08-05"), end: new Date("2025-08-07") }, { start: new Date("2025-08-10"), end: new Date("2025-08-13") }]
            },
            {
                "name": "Standart Oda",
                "image": "/hilton2.png",
                "capacity": 2,
                "amenities": [
                    "TV",
                    "Minibar",
                    "Wi-Fi"
                ],
                "pricePerNight": "4.938 TL",
                "availableDates": [{ start: new Date("2025-08-06"), end: new Date("2025-08-08") }, { start: new Date("2025-08-11"), end: new Date("2025-08-16") }]

            },
            {
                "name": "Standart Oda",
                "image": "/hilton3.png",
                "capacity": 3,
                "amenities": [
                    "TV",
                    "Wi-Fi",
                    "Minibar"
                ],
                "pricePerNight": "4.237 TL",
                "availableDates": [{ start: new Date("2025-08-03"), end: new Date("2025-08-09") }, { start: new Date("2025-08-12"), end: new Date("2025-08-17") }]
            }
        ]
    },
    {
        "hotelId": "5",
        "rooms": [
            {
                "name": "Suit Oda",
                "image": "/shangrifoto1.png",
                "capacity": 2,
                "amenities": [
                    "Wi-Fi",
                    "Minibar",
                    "TV"
                ],
                "pricePerNight": "4.834 TL",
                "availableDates": [{ start: new Date("2025-08-01"), end: new Date("2025-08-05") }, { start: new Date("2025-08-09"), end: new Date("2025-08-15") }]

            },
            {
                "name": "Standart Oda",
                "image": "/shangrifoto2.png",
                "capacity": 3,
                "amenities": [
                    "Wi-Fi",
                    "Minibar",
                    "TV"
                ],
                "pricePerNight": "2.581 TL",
                "availableDates": [{ start: new Date("2025-08-02"), end: new Date("2025-08-07") }, { start: new Date("2025-08-11"), end: new Date("2025-08-14") }]
            },
            {
                "name": "Suit Oda",
                "image": "/shangrifoto3.png",
                "capacity": 2,
                "amenities": [
                    "Minibar",
                    "TV",
                    "Wi-Fi"
                ],
                "pricePerNight": "3.723 TL",
                "availableDates": [{ start: new Date("2025-08-04"), end: new Date("2025-08-08") }, { start: new Date("2025-08-12"), end: new Date("2025-08-13") }]

            }
        ]
    },
    {
        "hotelId": "6",
        "rooms": [
            {
                "name": "Standart Oda",
                "image": "/air3.png",
                "capacity": 2,
                "amenities": [
                    "TV",
                    "Minibar",
                    "Klima"
                ],
                "pricePerNight": "7.465 TL",
                "availableDates": [{ start: new Date("2025-08-01"), end: new Date("2025-08-03") }, { start: new Date("2025-08-06"), end: new Date("2025-08-15") }]
            },
            {
                "name": "Suit Oda",
                "image": "/air2.png",
                "capacity": 4,
                "amenities": [
                    "Klima",
                    "Wi-Fi",
                    "TV"
                ],
                "pricePerNight": "4.691 TL",
                "availableDates": [{ start: new Date("2025-08-02"), end: new Date("2025-08-05") }, { start: new Date("2025-08-09"), end: new Date("2025-08-12") }]
            },
            {
                "name": "Suit Oda",
                "image": "/air1.png",
                "capacity": 3,
                "amenities": [
                    "TV",
                    "Klima",
                    "Minibar"
                ],
                "pricePerNight": "4.697 TL",
                "availableDates": [{ start: new Date("2025-08-04"), end: new Date("2025-08-07") }, { start: new Date("2025-08-11"), end: new Date("2025-08-15") }]
            }
        ]
    },
    {
        "hotelId": "7",
        "rooms": [
            {
                "name": "Deluxe Oda",
                "image": "/dedeman1.png",
                "capacity": 3,
                "amenities": [
                    "Wi-Fi",
                    "Minibar",
                    "TV"
                ],
                "pricePerNight": "3.598 TL",
                "availableDates": [{ start: new Date("2025-08-03"), end: new Date("2025-08-06") }, { start: new Date("2025-08-10"), end: new Date("2025-08-16") }]
            },
            {
                "name": "Deluxe Oda",
                "image": "/dedeman2.png",
                "capacity": 4,
                "amenities": [
                    "Wi-Fi",
                    "Klima",
                    "TV"
                ],
                "pricePerNight": "4.267 TL",
                "availableDates": [{ start: new Date("2025-08-01"), end: new Date("2025-08-05") }, { start: new Date("2025-08-08"), end: new Date("2025-08-10") }]
            },
            {
                "name": "Standart Oda",
                "image": "/dedeman3.png",
                "capacity": 2,
                "amenities": [
                    "Klima",
                    "Wi-Fi",
                    "TV"
                ],
                "pricePerNight": "3.661 TL",
                "availableDates": [{ start: new Date("2025-08-02"), end: new Date("2025-08-07") }, { start: new Date("2025-08-12"), end: new Date("2025-08-13") }]
            }
        ]
    },
    {
        "hotelId": "8",
        "rooms": [
            {
                "name": "Deluxe Oda",
                "image": "/buruciye1.png",
                "capacity": 3,
                "amenities": [
                    "TV",
                    "Wi-Fi",
                    "Minibar"
                ],
                "pricePerNight": "5.220 TL",
                "availableDates": [{ start: new Date("2025-08-04"), end: new Date("2025-08-06") }, { start: new Date("2025-08-09"), end: new Date("2025-08-13") }]
            },
            {
                "name": "Suit Oda",
                "image": "/buruciye2.png",
                "capacity": 3,
                "amenities": [
                    "TV",
                    "Klima",
                    "Minibar"
                ],
                "pricePerNight": "3.948 TL",
                "availableDates": [{ start: new Date("2025-08-01"), end: new Date("2025-08-03") }, { start: new Date("2025-08-07"), end: new Date("2025-08-10") }]
            },
            {
                "name": "Deluxe Oda",
                "image": "/buruciye3.png",
                "capacity": 2,
                "amenities": [
                    "Minibar",
                    "TV",
                    "Klima"
                ],
                "pricePerNight": "7.081 TL",
                "availableDates": [{ start: new Date("2025-08-05"), end: new Date("2025-08-08") }, { start: new Date("2025-08-11"), end: new Date("2025-08-20") }]
            }
        ]
    },
    {
        "hotelId": "9",
        "rooms": [
            {
                "name": "Deluxe Oda",
                "image": "/nev1.png",
                "capacity": 2,
                "amenities": [
                    "Klima",
                    "TV",
                    "Minibar"
                ],
                "pricePerNight": "3.143 TL",
                "availableDates": [{ start: new Date("2025-08-02"), end: new Date("2025-08-04") }, { start: new Date("2025-08-10"), end: new Date("2025-08-23") }]
            },
            {
                "name": "Standart Oda",
                "image": "/nev3.png",
                "capacity": 3,
                "amenities": [
                    "Wi-Fi",
                    "Minibar",
                    "Klima"
                ],
                "pricePerNight": "5.275 TL",
                "availableDates": [{ start: new Date("2025-08-03"), end: new Date("2025-08-07") }, { start: new Date("2025-08-09"), end: new Date("2025-08-14") }]
            },
            {
                "name": "Suit Oda",
                "image": "/nev2.png",
                "capacity": 2,
                "amenities": [
                    "Minibar",
                    "Klima",
                    "TV"
                ],
                "pricePerNight": "3.130 TL",
                "availableDates": [{ start: new Date("2025-08-01"), end: new Date("2025-08-06") }, { start: new Date("2025-08-11"), end: new Date("2025-08-22") }]
            }
        ]
    },
    {
        "hotelId": "10",
        "rooms": [
            {
                "name": "Suit Oda",
                "image": "/room28.png",
                "capacity": 2,
                "amenities": [
                    "Klima",
                    "Wi-Fi",
                    "TV"
                ],
                "pricePerNight": "4.474 TL",
                "availableDates": [{ start: new Date("2025-08-01"), end: new Date("2025-08-04") }, { start: new Date("2025-08-07"), end: new Date("2025-08-17") }]
            },
            {
                "name": "Suit Oda",
                "image": "/room29.png",
                "capacity": 4,
                "amenities": [
                    "Klima",
                    "TV",
                    "Minibar"
                ],
                "pricePerNight": "6.730 TL",
                "availableDates": [{ start: new Date("2025-08-02"), end: new Date("2025-08-05") }, { start: new Date("2025-08-08"), end: new Date("2025-08-10") }]
            },
            {
                "name": "Suit Oda",
                "image": "/room30.png",
                "capacity": 2,
                "amenities": [
                    "TV",
                    "Wi-Fi",
                    "Klima"
                ],
                "pricePerNight": "7.127 TL",
                "availableDates": [{ start: new Date("2025-08-03"), end: ("2025-08-06") }, { start: new Date("2025-08-09"), end: new Date("2025-08-14") }]
            }
        ]
    },
    {
        "hotelId": "11",
        "rooms": [
            {
                "name": "Suit Oda",
                "image": "/room31.png",
                "capacity": 4,
                "amenities": [
                    "TV",
                    "Minibar",
                    "Wi-Fi"
                ],
                "pricePerNight": "6.595 TL",
                "availableDates": [{ start: new Date("2025-08-01"), end: new Date("2025-08-05") }, { start: new Date("2025-08-10"), end: new Date("2025-08-19") }]
            },
            {
                "name": "Suit Oda",
                "image": "/room32.png",
                "capacity": 4,
                "amenities": [
                    "TV",
                    "Minibar",
                    "Wi-Fi"
                ],
                "pricePerNight": "7.959 TL",
                "availableDates": [{ start: new Date("2025-08-02"), end: new Date("2025-08-07") }, { start: new Date("2025-08-11"), end: new Date("2025-08-24") }]
            },
            {
                "name": "Suit Oda",
                "image": "/room33.png",
                "capacity": 3,
                "amenities": [
                    "Wi-Fi",
                    "TV",
                    "Minibar"
                ],
                "pricePerNight": "6.548 TL",
                "availableDates": [{ start: new Date("2025-08-04"), end: new Date("2025-08-08") }, { start: new Date("2025-08-12"), end: new Date("2025-08-20") }]

            }
        ]
    },
    {
        "hotelId": "12",
        "rooms": [
            {
                "name": "Standart Oda",
                "image": "/room34.png",
                "capacity": 3,
                "amenities": [
                    "Minibar",
                    "Klima",
                    "TV"
                ],
                "pricePerNight": "4.151 TL",
                "availableDates": [{ start: new Date("2025-08-01"), end: new Date("2025-08-03") }, { start: new Date("2025-08-06"), end: new Date("2025-08-09") }]
            },
            {
                "name": "Deluxe Oda",
                "image": "/room35.png",
                "capacity": 4,
                "amenities": [
                    "Klima",
                    "Minibar",
                    "Wi-Fi"
                ],
                "pricePerNight": "5.397 TL",
                "availableDates": [{ start: new Date("2025-08-02"), end: new Date("2025-08-05") }, { start: new Date("2025-08-09"), end: new Date("2025-08-12") }]
            },
            {
                "name": "Deluxe Oda",
                "image": "/room36.png",
                "capacity": 3,
                "amenities": [
                    "TV",
                    "Minibar",
                    "Klima"
                ],
                "pricePerNight": "5.876 TL",
                "availableDates": [{ start: new Date("2025-08-04"), end: new Date("2025-08-07") }, { start: new Date("2025-08-11"), end: new Date("2025-08-16") }]
            }
        ]
    }
];
export default roomData;