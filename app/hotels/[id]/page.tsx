'use client';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import Header from '../../../components/Header';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import roomData from '../../data/roomData';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import { DateRange } from 'react-date-range';





const hotels = [
    {
        id: '1',
        title: 'Mandarin Oriental, Bodrum',
        image: ['/mandarin.png', '/mandarin2.png', '/mandarin3.png'],
        price: '38.491 TL',
        location: 'Gümüşlük',
        type: 'Resort',
        description: 'Tesis, güzelce düzenlenmiş bahçelere, yollara ve havuzlara sahip; dingin ve lüks bir atmosfer yaratıyor. Konuklar, spanın huzurlu atmosferine, yetenekli terapistlerine ve mükemmel sauna/buhar odası sıcaklıklarına bayılıyor; tam rahatlama için ideal. Sorunsuz varışlar ve ayrılışlar için kusursuz havaalanı ulaşımını ayarla (ek ücrete tabidir). Çocuk Kulübü, çocukları eğlendirmek için ilgi çekici aktiviteler ve günlük bir program sunuyor; ebeveynlerin rahatlamasına olanak tanıyor. Konaklaman sırasında unutulmaz anlar yaratan, profesyonelce organize edilmiş akşam eğlencesinin tadını çıkar.',

    },
    {
        id: '2',
        title: 'Four Seasons Istanbul',
        image: ['/fourseasons.png', '/fourseasons2.png', '/fourseasons3.png'],
        price: '30.251 TL',
        location: 'Beşiktaş',
        type: 'Hotel',
        description: 'Konuklar, otelin tam Boğaz üzerinde yer alan muhteşem konumuna, odalardan ve restoranlardan nefes kesen manzaralar sunmasına bayılıyor. Spa tam bir olay, konuklar huzurlu bir kaçamak için geleneksel Türk Hamamı deneyimini tavsiye ediyor. Hafif içecekler sunan bir barın eşlik ettiği ücretsiz şemsiye ve şezlonglarla açık havuzun kenarında rahatlayın. Personel, güler yüzlülüğü, ilgisi ve konuklar için ellerinden gelenin fazlasını yapma isteğiyle sürekli olarak yüksek övgü alıyor.',

    },
    {
        id: '3',
        title: 'Metropolitan, Ankara',
        image: ['/metropolitan.png', '/metropolitan2.png', '/metropolitan3.png'],
        price: '4.222 TL',
        location: 'Ankara',
        type: 'Hotel',
        description: 'Teras katında yer alan Elewen restoranda muhteşem manzaralar eşliğinde unutulmaz bir yemek deneyimi yaşa. Oteldeki kapalı havuz, sauna ve hamamda rahatlayarak yenilen. Şehir merkezinde, Anıtkabir, Atakule, Ankara Otobüs Terminali ve alışveriş merkezlerine yakın konumda. Konuklar, otelin temizliğini, özellikle de tertemiz banyoları ve bakımlı odaları sürekli olarak övüyor ve bu da keyifli ve hijyenik bir konaklama sağlıyor.',

    },

    {
        id: '4',
        title: 'Hampton By Hilton, Kocaeli',
        image: ['/kocaeli.png', '/hampton2.png', '/hampton3.png'],
        price: '3.853 TL',
        location: 'Başiskele',
        type: 'Hotel',
        description: 'Otelin harika konumu sayesinde büyük bir alışveriş merkezine anında ulaşabilir, yemek ve alışveriş seçeneklerinden kolayca faydalanabilirsin. Konuklar, otelin temizliğe verdiği önemi sürekli övüyor, özellikle odaların ve banyoların tertemiz olduğuna dikkat çekiyor. Pek çok konuk, özellikle resepsiyondaki personelin samimi ve yardımsever tavrını vurgulayarak konaklamalarını keyifli hale getirdiğini belirtiyor. Daha fazla konfor ve rahatlık için odanda terlik, ücretsiz banyo malzemeleri ve saç kurutma makinesinin keyfini çıkarabilirsin.',


    },
    {
        id: '5',
        title: 'Shangri-La Bosphorus, İstanbul',
        image: ['/shangri.png', '/shangri2.png', '/shangri3.png'],
        price: '12.870 TL',
        location: 'Ankara',
        type: 'Hotel',
        description: 'Kahvaltı büfesi, geniş taze ve lezzetli seçenekleri ile yüksek not alıyor. Birçok konuk, personelin nezaketi sayesinde otelin evden uzakta bir ev gibi hissettirdiğini belirtiyor. Lüks süitlerde ayrı oturma odaları ve nefes kesen Boğaz manzarasına sahip iki teras bulunuyor. Değerlendirmelerde otelin temizliği ve odalarının ve tesislerinin bakımlı durumu sürekli olarak vurgulanıyor. ',

    },
    {
        id: '6',
        title: 'Samsun Airport Resort, Samsun',
        image: ['/samsun.png', '/samsun2.png', '/samsun3.png'],
        price: '3.999 TL',
        location: 'Tekkeköy',
        type: 'Hotel',
        description: 'Konaklamanız sırasında uygun yemek seçenekleri sunan otel restoranında doyurucu bir yemeğin tadını çıkarın. Oteldeki banket salonunda unutulmaz etkinliklere ve toplantılara ev sahipliği yapın; kutlamalar ve özel günler için mükemmel. Güler yüzlü ve ilgili personel, yardımseverlikleri ve mükemmel hizmetleri sayesinde sürekli olarak övgü topluyor. Otelin otoyola yakın konumu, özellikle yetersiz pencere yalıtımı durumunda gürültü rahatsızlıklarına neden olabilir.',

    },
    {
        id: '7',
        title: 'Park Dedeman, Denizli',
        image: ['/denizli.png', '/denizli2.png', '/denizli3.png'],
        price: '3.278 TL',
        location: 'Denizli',
        type: 'Hotel',
        description: 'Oteldeki 7/24 açık fitness merkezinde egzersiz rutininizi koruyun, konaklamanız boyunca canlılığınızı ve sağlığınızı güvence altına alın. Konuklar için bir mini market mevcuttur ve temel eşyalara ve atıştırmalıklara kolay erişim sağlar. Otel, evcil hayvanları kabul ediyor ve bu da onu hayvan dostları olan gezginler için harika bir seçenek haline getiriyor. Pek çok misafir, otel personelinin samimi, yardımsever ve ilgili doğasını vurguladı. ',

    },
    {
        id: '8',
        title: 'Buruciye, Sivas',
        image: ['/sivas.png', '/sivas2.png', '/sivas3.png'],
        price: '3.550 TL',
        location: 'Sivas',
        type: 'Hotel',
        description: 'Otelimizin kapalı havuzu ve iyi donatılmış fitness merkezi ile formunu koruyabilirsin, sporunu aksatma! Otelden kısa bir yürüyüşle süslü Şifaiye Medresesini, eski bir İslam tıp okulunu ve sultanın türbesini keşfedebilirsin, tam sana göre!',

    },
    {
        id: '9',
        title: 'Shadow Cave House, Nevşehir',
        image: ['/ürgüp.png', '/ürgüp2.png', '/ürgüp3.png'],
        price: '3.300 TL',
        location: 'Ürgüp',
        type: 'Hotel',
        description: 'Konuklar, sessiz ve huzurlu atmosferleriyle bilinen gerçek mağara odalarında konaklama deneyiminin tadını çıkarıyor. Otel konumu sayesinde şehir merkezine, pazarlara ve çeşitli turistik yerlere kısa bir yürüyüş veya sürüş mesafesinde kolayca ulaşabilirsin. Kahvaltı yüksek notlar alıyor; konuklar ev yapımı ürünleri ve sunulan tatmin edici çeşitliliği takdir ediyor. Temizlik sürekli vurgulanan bir özellik; konuklar odaların ve otelin genel olarak kusursuz durumunu sürekli olarak belirtiyor. Konuklar, oteli işleten ailenin sıcak, samimi ve yardımsever doğasını sürekli olarak övüyor.',

    },
    {
        id: '10',
        title: 'Yıldız Country, Sinop',
        image: ['/sinop.png', '/sinop2.png', '/sinop3.png'],
        price: '5.490 TL',
        location: 'Sinop',
        type: 'Hotel',
        description: 'Konaklamanız sırasında otelin restoranında lezzetli yemeklerin tadını çıkarın ve barda serinletici içeceklerin keyfini çıkarın. Konuklar, konaklamaları sırasında canlı müzik performanslarının tadını çıkardılar, bu da ortama ve eğlence seçeneklerine katkıda bulundu. Otelin pitoresk bahçesinde dinlenin, ortak salonda rahatlayın veya davetkar terastan manzaranın tadını çıkarın. Konuklar, güncellenmiş menüyü ve genel ambiyansı fark ettiler, bu da ziyaretçiler için harika bir deneyim yarattı.',




    },
    {
        id: '11',
        title: 'D - Resort Ayvalık, Balıkesir',
        image: ['/ayvalık.png', '/ayvalık2.png', '/ayvalık3.png'],
        price: '16.120 TL',
        location: 'Ayvalık',
        type: 'Hotel',
        description: 'Havuzda serinletici bir yüzme molası ver ve otelin su kenarındaki loungeında rahatlatıcı bir içkinin keyfini çıkar. Otelin kahvaltı büfesi kapsamlı ve lezzetli, konuklar yemek seçeneklerinin kalitesini ve çeşitliliğini vurguluyor. Tesis, çocuk kulübü, sığ deniz erişimi ve kolay gezinme için olanakların yakınlığı ile aileler için çok uygun. Otel, belirlenmiş alanlar ve olanaklarla evcil hayvanları memnuniyetle karşılar, bu da onu tüylü dostlarıyla seyahat edenler için öne çıkan bir seçim haline getirir. Değerlendirmelerde otelin temizliği sürekli olarak vurgulanıyor, tertemiz odalar ve bakımlı ortak alanlar belirtiliyor.',

    },
    {
        id: '12',
        title: 'Pasa Beach ,Muğla ',
        image: ['/pasa.png', '/pasa2.png', '/pasa3.png'],
        price: '12.936 TL',
        location: 'Marmaris',
        type: 'Hotel',
        description: 'Eğlence ekibi, her yaştan konuk için eğlenceli aktiviteler ve şovlar sunarak enerjileri ve kapsayıcılıkları nedeniyle büyük övgü alıyor. Otel, çok çeşitli yemek seçenekleri sunuyor ve konuklar açık büfe seçeneklerinin lezzetliliğini ve çeşitliliğini övüyor. Küçükleri, çocuklara yönelik denetimli aktiviteler ve eğlence sunan çocuk kulübünde eğlendirin. Otelin konumu, dükkanlara, restoranlara ve şehir merkezine kolay erişim sağlıyor ve otobüs durağına yakında bulunuyor.',

    },


];



type Room = {
    name: string;
    description?: string;
    image: string;
    capacity: number;
    amenities: string[];
    pricePerNight: string;
};




type Hotel = {
    id: string;
    title: string;
    image: string | string[];
    price: string;
    location: string;
    type: string;
    description: string;
};

export default function HotelDetailPage() {
    const { id } = useParams();
    const [hotel, setHotel] = useState<Hotel | null>(null);
    const [rooms, setRooms] = useState<Room[]>([]);

    const [showModal, setShowModal] = useState(false);
    const [selectedRoom, setSelectedRoom] = useState<Room | null>(null);

    const openModal = (room: Room) => {
        setSelectedRoom(room);
        setShowModal(true);
    };
    const closeModal = () => {
        setSelectedRoom(null);
        setShowModal(false);
    };

    const [openCalendar, setOpenCalendar] = useState(false);

    const [selectionRange, setSelectionRange] = useState({
        startDate: new Date(),
        endDate: new Date(),
        key: 'selection'
    });

    const [guests, setGuests] = useState<number>(2);

    useEffect(() => {
        if (id) {

            const foundHotel = hotels.find((h) => h.id === id);
            setHotel(foundHotel || null);


            const foundRoomsEntry = roomData.find((entry) => entry.hotelId === id);
            setRooms(foundRoomsEntry ? foundRoomsEntry.rooms : []);
        }
    }, [id]);

    if (!hotel) {
        return <div>Yükleniyor...</div>;
    }
    const handleSearch = () => {
        const section = document.getElementById("rooms-section");
        if (section) {
            section.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }

    }

    return (
        <div
            style={{
                backgroundColor: '#212529',
                minHeight: '100vh',
                padding: '2rem',
                paddingTop: 'calc(2rem + 80px)',
            }}
        >
            <Header />
            <div className="container" style={{ marginTop: '0' }}>

                <div
                    className="p-3 rounded mt-0 d-flex"
                    style={{ margin: 'auto', backgroundColor: '#65a084ff' }}
                >
                    <div className="d-flex gap-3 justify-content-between align-items-center">
                        <div style={{ position: 'relative', flex: '2', minWidth: '280px' }}>
                            <label className="form-label fw-semibold text-white " style={{ marginLeft: '20px', fontSize: '18px' }}>Giriş / Çıkış</label>

                            <button
                                className="form-control text-start"
                                onClick={() => setOpenCalendar(!openCalendar)}
                                style={{
                                    color: '#2c3e50',
                                    fontFamily: 'Poppins',
                                    fontWeight: '500',
                                    fontSize: '18px',
                                    letterSpacing: '0.5px',
                                    padding: '10px 14px',
                                    borderRadius: '999px'
                                }}
                            >
                                {selectionRange.startDate.toLocaleDateString()} - {selectionRange.endDate.toLocaleDateString()}
                            </button>

                            {openCalendar && (
                                <div style={{ position: 'absolute', zIndex: 9999, top: '100%', left: 0 }}>
                                    <div style={{ backgroundColor: ' white', borderRadius: '8px', overflow: 'hidden' }}>
                                        <DateRange
                                            ranges={[selectionRange]}
                                            onChange={(ranges) => setSelectionRange(ranges.selection)}
                                            moveRangeOnFirstSelection={false}
                                            rangeColors={["#54b98a"]}
                                        />
                                        <div className="text-end p-2">
                                            <button
                                                className="btn btn-success btn-sm"
                                                onClick={() => setOpenCalendar(false)}
                                            >
                                                Tamam
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>




                        {/* Misafir */}
                        <div style={{ flex: '1 1 200px', minWidth: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <label htmlFor="guests" className="form-label fw-semibold text-white me-auto" style={{ marginLeft: '20px', fontSize: '18px' }}>
                                Misafir
                            </label>
                            <input
                                id="guests"
                                type="number"
                                className="form-control"
                                min={1}
                                value={guests}
                                onChange={(e) => setGuests(Number(e.target.value))}
                                style={{
                                    color: '#2c3e50',
                                    fontFamily: 'Poppins',
                                    fontWeight: '500',
                                    fontSize: '18px',
                                    letterSpacing: '0.5px',
                                    padding: '10px 14px',
                                    borderRadius: '999px'
                                }}
                            />
                        </div>
                        <div style={{ flex: '1 1 200px', minWidth: '120px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <label className="form-label d-block">&nbsp;</label>
                            <button className="btn btn-light w-100 fw-bold" style={{
                                marginLeft: '20px', color: '#2c3e50',
                                fontFamily: 'Poppins',
                                fontWeight: '500',
                                fontSize: '18px',
                                letterSpacing: '0.5px',
                                padding: '10px 14px',
                                borderRadius: '999px'
                            }}
                                onClick={handleSearch}
                            >
                                Ara
                            </button>
                        </div>

                    </div>
                </div>

                <div className="row mb-4 mt-3" style={{ marginTop: '150px' }}>
                    <div className="col-12">
                        <div
                            className="text-white p-3 d-flex justify-content-between align-items-center"
                            style={{
                                background: '#65a084ff',
                                borderRadius: '0.5rem',
                                fontSize: '1.5rem',
                                fontWeight: 'bold',
                            }}
                        >
                            <div>
                                <h5 className="mb-1" style={{ fontWeight: 'bold' }}>
                                    {hotel.title}
                                </h5>
                                <small style={{ fontSize: '0.9rem' }}>{hotel.location}</small>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Otel Resimleri */}
                <div className="row g-4">
                    {/* Büyük Resim */}
                    <div className="col-md-8">
                        <img
                            src={Array.isArray(hotel.image) ? hotel.image[0] : hotel.image}
                            alt={`${hotel.title} image 1`}
                            className="img-fluid rounded"
                            style={{
                                width: '100%',
                                maxHeight: '500px',
                                objectFit: 'cover',
                            }}
                        />
                    </div>

                    {/* Küçük Resimler */}
                    {Array.isArray(hotel.image) && hotel.image.length >= 2 && (
                        <div className="col-md-4 d-flex flex-column gap-3">
                            <img
                                src={hotel.image[1]}
                                alt="Küçük 1"
                                className="img-fluid rounded"
                                style={{ height: '240px', objectFit: 'cover' }}
                            />
                            <img
                                src={hotel.image[2]}
                                alt="Küçük 2"
                                className="img-fluid rounded"
                                style={{ height: '240px', objectFit: 'cover' }}
                            />
                        </div>
                    )}
                </div>
                <div
                    className="d-flex justify-content-between align-items-center px-3 py-3 rounded mt-4"
                    style={{ backgroundColor: '#65a084ff', color: '#000' }}
                >
                    <div className="d-flex gap-4 align-items-center">
                        <a href="#" className="fw-bold text-decoration-none" style={{ color: '#fff' }}>
                            Genel Bakış
                        </a>
                        <a href="#" className="text-decoration-none" style={{ color: '#fff' }}>
                            Odalar
                        </a>
                        <a href="#" className="text-decoration-none" style={{ color: '#fff' }}>
                            Yorumlar
                        </a>
                        <a href="#" className="text-decoration-none" style={{ color: '#fff' }}>
                            Çevre ve Konum
                        </a>
                        <a href="#" className="text-decoration-none" style={{ color: '#fff' }}>
                            Tesis Bilgileri
                        </a>
                    </div>

                    <div className="d-flex align-items-center gap-3">
                        <div style={{ fontWeight: 'bold', fontSize: '1.1rem', color: 'white' }}>{hotel.price}</div>
                        <button className="btn btn-light btn-lg fw-bold " style={{ color: '#2c3e50' }} onClick={handleSearch}>Odaları Gör                     </button>
                    </div>
                </div>


                {/* Otel Açıklaması */}
                <div className="mt-4 p-3 rounded" style={{ backgroundColor: '#65a084ff', color: 'white' }}>
                    <p>{hotel.description}</p>
                </div>


                <div id="rooms-section" style={{ marginTop: '100px' }}>
                    <div className="mt-5">
                        <h3 className="text-white mb-3 fw-semibold">Odalar</h3>
                        {rooms.length === 0 && <p className="text-white">Bu otel için oda bilgisi bulunmamaktadır.</p>}

                        <div className="row">
                            {rooms.map((room, index) => (
                                <div key={index} className="col-md-4 mb-4"
                                    onClick={() => openModal(room)}
                                    style={{ cursor: 'pointer' }}>
                                    <div className="card h-100">
                                        <img
                                            src={room.image}
                                            className="card-img-top"
                                            alt={room.name}
                                            style={{ height: '200px', objectFit: 'cover' }}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title " style={{ color: '#2c3e50' }}>{room.name}</h5>
                                            <p className="card-text">{room.description}</p>

                                            <p className="card-text" style={{ color: '#2c3e50' }}>
                                                <strong>Fiyat / Gece:</strong> {room.pricePerNight}
                                            </p>

                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>


            {showModal && selectedRoom && (
                <div
                    className="modal d-block"
                    tabIndex={-1}
                    style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                    onClick={closeModal}
                >
                    <div
                        className="modal-dialog modal-dialog-centered"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{selectedRoom.name}</h5>
                                <button type="button" className="btn-close" onClick={closeModal}></button>
                            </div>
                            <div className="modal-body">
                                <img
                                    src={selectedRoom.image}
                                    alt={selectedRoom.name}
                                    className="img-fluid mb-3"
                                    style={{ objectFit: 'cover', maxHeight: '300px', width: '100%' }}
                                />
                                <p>{selectedRoom.description}</p>
                                <p><strong>Kapasite:</strong> {selectedRoom.capacity} kişi</p>
                                <p><strong>Fiyat / Gece:</strong> {selectedRoom.pricePerNight}</p>
                                <p><strong>Olanaklar:</strong> {selectedRoom.amenities.join(', ')}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={closeModal}>Kapat</button>
                            </div>
                        </div>

                    </div>
                </div>
            )}
            <footer />
        </div>


    )
}

