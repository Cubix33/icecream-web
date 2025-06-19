import React, { useState } from 'react';
import './HeroSection.css';
import cone1 from '../assets/pinkcone.png';
import cone2 from '../assets/browncone.png';
import cone3 from '../assets/bluecone.png';
import cone4 from '../assets/greencone.png';
//import bigCone from '../assets/bigCone.png';
function HeroSection3() {
const [popupImg, setPopupImg] = useState(null);
return (
    <section className="hero">
      <div className="hero-text">
        <h1 className='main-heading'>icecream</h1>
        <h2  className='sub-heading'>Evergreen cone</h2>
        <p className='description'>
          Embark on a culinary journey of delight as you immerse yourself in our artisan-crafted ice cream collection—each flavor a story, each scoop an unforgettable chapter in your sweet odyssey!
        </p>
        <p className='description'>
         Indulge in a world of imagination, where every scoop unveils<br></br> a new taste adventure! choose your favorite
        </p>
 <div className="cones-flex">
          {[cone1, cone2, cone3, cone4].map((cone, index) => (
            <div className="cone-unit" key={index}>
              <img
                src={cone}
                alt={`flavor ${index + 1}`}
                className="cone-img"
                onClick={() => setPopupImg(cone)}
              />
              <div className="cone-base"></div>
            </div>
          ))}
        </div>
      </div>
      <div className="hero-image"> 
        <img src={cone4} alt="evergreen Cone" />
      </div>
       {popupImg && (
        <div className="popup-overlay" onClick={() => setPopupImg(null)}>
          <img src={popupImg} alt="Zoomed Cone" className="popup-img" />
        </div>
      )}
    </section>
  );
}

export default HeroSection3;
