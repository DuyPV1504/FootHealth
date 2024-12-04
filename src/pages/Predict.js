import React, { useState } from "react";
import { useDropzone } from "react-dropzone";
import "./Predict.css";

const Predict = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const onDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*",
    maxFiles: 1,
  });

  const handlePredict = () => {
    if (!selectedImage) {
      alert("Please upload an image first.");
      return;
    }
    alert("Prediction functionality not implemented yet.");
  };

  return (
    <section id="predict" className="predict-section">
      <h2>Predict</h2>
      <div className="drop-area" {...getRootProps()}>
        <input {...getInputProps()} />
        {selectedImage ? (
          <img src={selectedImage} alt="Preview" className="preview-image" />
        ) : (
          <p>Drop image here</p>
        )}
      </div>
      <button className="predict-button" onClick={handlePredict}>
        Predict
      </button>
    </section>
  );
};

export default Predict;

