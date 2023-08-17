import React from "react";

function PastryCard({ pastryObj }) {
  return (
    <div className="pastry-card">
      <img
        className="pastry-image"
        src={pastryObj.image}
        alt={pastryObj.name}
      />
      <div className="pastry-name">{pastryObj.name}</div>
      <div className="pastry-price">${pastryObj.price.toFixed(2)}</div>
    </div>
  );
}

export default PastryCard;
