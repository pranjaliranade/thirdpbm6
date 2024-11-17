import React, { useState, useRef } from 'react';
import './ImageDisplay.css'; // Create this CSS file for any styling you might want
import images001 from './media/images001.jpg';

const ImageDisplay = () => {
  const [imageNumber, setImageNumber] = useState('001');
  const [imageSrc, setImageSrc] = useState('./media/images001.jpg');

  const handleChange = (e) => {
    setImageNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageNumber !== '') {
      setImageSrc(images001); // Adjust this path as necessary 
    }
  };

  return (
    <div className="image-display">
      <form onSubmit={handleSubmit}>
        <label>
          Enter Image Number:
          <input type="number" value={imageNumber} onChange={handleChange} />
        </label>
        <button type="submit">Show Image</button>
      </form>
      <img src={require(`./media/images${imageNumber}.jpg`).default} alt={`./media/images${imageNumber}`} />
      
        {/* {imageSrc && } alt={`../media/${imageNumber}`} require(`./media/images${imageNumber}.jpg`).default*/}
    </div> 
  );
};

export default ImageDisplay;
