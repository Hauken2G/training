import { useState } from 'react';
import './ImagePicker.css';

const ImagePicker = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedPreview, setSelectedPreview] = useState('');
  const handleFile = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      setSelectedPreview(URL.createObjectURL(file));
    }
  };
  return (
    <div className="imagePickerContainer">
      {!selectedPreview ? (
        <>
          <h1 className="imagePickerTitle"> Pick Image!</h1>
          <div className="pictureInput">
            {' '}
            <input type="file" accept="image/*" onChange={handleFile} />{' '}
          </div>{' '}
        </>
      ) : (
        <img className="cvPicture" src={selectedPreview} />
      )}
    </div>
  );
};

export default ImagePicker;
