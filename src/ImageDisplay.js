import React, { useState } from 'react';
import './ImageDisplay.css'; // Create this CSS file for any styling you might want
//import images001 from './media/images001.jpg';

const ImageDisplay = () => {
  const [imageNumber, setImageNumber] = useState('');
  const [imageSrc, setImageSrc] = useState('');

  const handleChange = (e) => {
    setImageNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (imageNumber !== '') {
      setImageSrc(`./media/image001.jpg`); // Adjust this path as necessary 
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
      <img src={`./media/images${imageNumber}.jpg`}  />
      
        {/* {imageSrc && } alt={`./media/${imageNumber}`}*/}
    </div> 
  );
};

export default ImageDisplay;
