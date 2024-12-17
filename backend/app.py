from flask import Flask,jsonify
import numpy as np
import pandas as pd
import yfinance as yf
from sklearn.linear_model import LinearRegression

app = Flask(__name__)

# Function to fetch real-time stock data
def fetch_stock_data(symbol):
    stock_data = yf.download(symbol, start="2023-01-01", end="2024-01-02")
    return stock_data

# Function to preprocess data and extract features
def preprocess_data(stock_data):
    # Add your preprocessing logic here
    # For example, extracting relevant features from stock_data
    features = stock_data[['Open', 'High', 'Low', 'Close']]
    return features

# Function to train model (assuming this is defined)
def train_model(features, target):
    model = LinearRegression()
    model.fit(features, target)
    return model

# Function to make real-time predictions (assuming this is defined)
def predict_price(model, features):
    prediction = model.predict(features)
    return prediction

@app.route('/get_prediction', methods=['GET'])
def get_prediction():
    symbol = 'GOOGL'

    # Fetch real-time stock data
    stock_data = fetch_stock_data(symbol)

    # Preprocess data
    features = preprocess_data(stock_data)

    # Extract target variable (e.g., 'Close' price)
    target = features['Close']

    # Train model
    model = train_model(features, target)

    # Make real-time prediction
    latest_data = features.iloc[-1:].values.reshape(1, -1)  # Latest data point for prediction
    predicted_price = predict_price(model, latest_data)

    # Convert the NumPy array to a Python list
    predicted_price_list = predicted_price.tolist()

    # Print the predicted price
    print("Predicted stock price:", predicted_price_list)

    return jsonify({'predicted_price': predicted_price_list})


if __name__ == '__main__':
    app.run(debug=True)
