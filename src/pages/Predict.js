import React, { useState, useEffect } from "react";
import axios from "axios";
import { diabeticFootUlcers } from "../utils/sick";
import "./Predict.css";
import UploadFile from "../components/UploadFile";

const Predict = () => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    if (!file) {
      alert("Please upload a file first.");
      return;
    }
    setLoading(true);
    setPrediction(null);
    setError(false);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "https://5df9-35-233-144-138.ngrok-free.app",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      setPrediction(response.data);
    } catch (err) {
      console.error(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const retry = () => {
    setFile(null);
    setPrediction(null);
    setError(false);
  };

  const result = prediction
    ? diabeticFootUlcers.find((item) => item.id === Number(prediction?.label))
    : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="predict-page">
      <h1 className="page-title">Predict</h1>
      <div className="predict-container">
        <div className="content">
          <UploadFile
            setFile={setFile}
            file={file}
            handleSubmit={handleSubmit}
            retry={retry}
            loading={loading}
          />
          <div className="result-section">
            {loading && <p>Loading...</p>}
            {!loading && prediction && result && (
              <div className="result">
                <h2>Prediction Result</h2>
                <h4>Diagnosed:</h4>
                <p>{result.label}</p>
                <h4>Causes:</h4>
                <p>{result.cause}</p>
                <h4>Effects:</h4>
                <p>{result.effect}</p>
                <h4>Signs:</h4>
                <ul>
                  {result.signs.map((sign) => (
                    <li key={sign.id}>{sign.content}</li>
                  ))}
                </ul>
                <h4>Prevention:</h4>
                <ul>
                  {result.avoid.map((avoid) => (
                    <li key={avoid.id}>{avoid.content}</li>
                  ))}
                </ul>
              </div>
            )}
            {!loading && !prediction && !error && (
              <p>Please upload a photo and click "Predict".</p>
            )}
            {!loading && error && (
              <p>Error! Please try again or upload another file.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Predict;
