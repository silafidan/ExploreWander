'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';


export default function AccountNavButton() {
  const [userName, setUserName] = useState<string | null>(null);
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);




  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      try {
        const parsed = JSON.parse(storedUser);
        if (parsed.name) {
          setUserName(parsed.name);


        }
      } catch { }
    }
  }, []);

  const handleClick = () => {
    if (!userName) {
      router.push('/register');
    } else {
      toast.info(
        <div>
          <p> Çıkış yapmak istediğinize emin misiniz?</p>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
            <button className="btn btn-sm btn-danger" onClick={handleConfirm}>
              Evet
            </button>
            <button className="btn btn-sm btn-secondary" onClick={() => toast.dismiss()}>
              Hayır
            </button>
          </div>
        </div>,
        { autoClose: false }
      );
    }
  };

  const handleConfirm = () => {

    localStorage.removeItem('user');
    setUserName(null);
    setTimeout(() => {
      router.push('/');
    }, 100);
  }
  const handleCancel = () => {
    setShowConfirm(false);
  }



  return (
    <>
      <button
        onClick={handleClick}
        className="btn btn-light btn-sm fw-bold"
        style={{
          width: '100px',
          height: '60px',
          fontSize: '22px',
          borderRadius: '25px',
          backgroundColor: '#c9f8d0ff',
          border: '2px solid  #c9f8d0ff',
          backdropFilter: 'blur(8px)',



        }}

      >
        {userName ? userName.charAt(0).toUpperCase() : 'Login'}
      </button>



      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>Çıkış yapmak istediğinize emin misiniz?</p>
            <button onClick={handleConfirm}>Evet</button>
            <button onClick={handleCancel}>Hayır</button>
          </div>
        </div>
      )}
    </>


  );
}
