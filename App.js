import React from 'react';

const Pancasila = () => {
  const pancasilaTexts = [
    {
      id: 1,
      image: '/images/1.png.png',
      text: 'Ketuhanan Yang Maha Esa',
    },
    {
      id: 2,
      image: '/images/2.png.png',
      text: 'Kemanusiaan yang Adil dan Beradab',
    },
    {
      id: 3,
      image: '/images/3.png.png',
      text: 'Persatuan Indonesia',
    },
    {
      id: 4,
      image: '/images/4.png.png',
      text: 'Kerakyatan yang Dipimpin oleh Hikmat Kebijaksanaan dalam Permusyawaratan/Perwakilan',
    },
    {
      id: 5,
      image: '/images/5.png.png',
      text: 'Keadilan Sosial bagi Seluruh Rakyat Indonesia',
    },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', }}>
      <h1 style={{ textAlign: 'center', margin: '10px' }}>Pancasila</h1>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
        {pancasilaTexts.map(({ id, image, text }) => (
          <div
            key={id}
            style={{
              display: 'flex',
              alignItems: 'center',
              width: '400px',
              height: '120px',
              margin: '10px',
              border: '1px solid black',
              borderRadius: '10px',
              padding: '10px',
              boxSizing: 'border-box',
            }}
          >
            <div style={{ width: '120px', height: '100px', marginRight: '10px' }}>
              <img src={image} alt="" style={{ width: '100px', height: '100px' }} />
            </div>
            <p style={{ margin: 0 }}>{text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pancasila;
