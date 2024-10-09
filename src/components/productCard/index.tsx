import React, { useState } from 'react';



import image1 from './NIke noski.svg';
import image2 from './NIke varsity royal.svg';
import image3 from './Nike air max TW se.svg';
import image4 from './Nike defy all day.svg';
import image5 from './Nike air max 97.svg';
import image6 from './2341.svg';

const images: string[] = [image1, image2, image3, image4, image5, image6];

function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string>(images[0]);
  const [fadeProp, setFadeProp] = useState<string>('fade-in');

  const handleClick = (img: string) => {
    setFadeProp('fade-out');
    setTimeout(() => {
      setSelectedImage(img);
      setFadeProp('fade-in');
    }, 300);
  };

  return (
    <div className="gallery-container">
      <div className="main-image">
        <img className={fadeProp} src={selectedImage} alt="Selected" />
      </div>
      <div className="thumbnail-container">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Thumbnail ${index + 1}`}
            className={selectedImage === img ? 'active' : ''}
            onClick={() => handleClick(img)}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
