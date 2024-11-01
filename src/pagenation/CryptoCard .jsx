import React from "react";
import "./CryptoList.jsx"
const CryptoCard = ({ image, name, price }) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={`${name} logo`} />
            </div>
            <div className="card-info">
                <h2>{name}</h2>
                <h3>${price.toLocaleString()}</h3>
            </div>
        </div>
    );
};

export default CryptoCard;
