import React from "react";
import CryptoCard from "./CryptoCard .jsx";
import "./CryptoList.css"

const CryptoList = ({ coinsData }) => {
    return (
        <div className="crypto-list">
            {coinsData.map((coin, index) => (
                <CryptoCard key={index} image={coin.image} name={coin.name} price={coin.current_price} />
            ))}
        </div>
    );
};

export default CryptoList;
