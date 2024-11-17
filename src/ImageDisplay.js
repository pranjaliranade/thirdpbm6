import React, { useRef, useState } from 'react';
import './ImageDisplay.css'; // Ensure you have this file for styles

const ImageDisplay = () => {
  const imageNumberRef = useRef();
  const [imageSrc, setImageSrc] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const imageNumber = imageNumberRef.current.value;
    if (imageNumber !== '') {
      setImageSrc(`./media/images${imageNumber}.jpg`); // Adjust the path according to your directory structure
    }
  };

  return (
    <div className="image-display">
      <form onSubmit={handleSubmit}>
        <label>
          Enter Image Number:
          <input type="number" ref={imageNumberRef} />
        </label>
        <button type="submit">Show Image</button>
      </form>
      {imageSrc && <img src={require(`./media/images${imageNumberRef.current.value}.jpg`).default} 
      alt={`Image ${imageNumberRef.current.value}`} />}
    </div>
  );
};

export default ImageDisplay;

/* {imageSrc && } alt={`../media/${imageNumber}`} require(`./media/images${imageNumber}.jpg`).default*/