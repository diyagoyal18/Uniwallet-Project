import React, { useState, useEffect } from 'react';

const Investments = () => {
  const [predictedPrice, setPredictedPrice] = useState(null);
  console.log(predictedPrice)

  useEffect(() => {
    // Fetch predicted price from Flask server
    fetch('/get_prediction')
      .then(response => response.json())
      .then(data => {
        // Update state with predicted price
        setPredictedPrice(data.predicted_price);
      })
      .catch(error => console.error('Error fetching predicted price:', error));
  }, []);

  return (
    <div>
      <h1>Investment Page</h1>
      {predictedPrice !== null ? (
        <p>Predicted Stock Price: ${predictedPrice}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Investments;
