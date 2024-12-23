import React from "react";
import "./UploadFile.css";

const UploadFile = ({ setFile, file, handleSubmit, retry, loading }) => {
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  return (
    <div className="upload-file">
      <h3>Files Upload</h3>
      {file ? (
        <div className="uploaded-file">
          <img
            src={URL.createObjectURL(file)}
            alt="Preview"
            className="uploaded-image"
          />
          <div className="button-group">
            <button onClick={handleSubmit} className="predict-btn" disabled={loading}>
              Predict
            </button>
            <button onClick={retry} className="retry-btn">
              Retry
            </button>
          </div>
        </div>
      ) : (
        <div className="file-input">
          <input type="file" onChange={handleFileChange} />
          <p>Click to upload an image</p>
        </div>
      )}
    </div>
  );
};

export default UploadFile;
