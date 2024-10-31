import React from 'react';
import Button from './button';

function Clothes({ item, addToBasket }) {
    const containerStyle = {
        display: "flex",
        alignItems: "center",
        padding: "40px",
        margin: "10px 0",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)"
    };

    const imageStyle = {
        width: "10%",
        height: "auto",
        marginRight: "15px",
        borderRadius: "8px",
        objectFit: "cover",
        paddingRight: "50px"
    };

    return (
        <div id={item.id} style={containerStyle}>
            <img src={item.image} alt={`${item.brand} ${item.model}`} style={imageStyle} />
            <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
                <p style={{ fontSize: "24px" }}><b>Brand:</b> {item.brand}</p>
                <p style={{ fontSize: "24px" }}><b>Model:</b> {item.model}</p>
                <p style={{ fontSize: "24px" }}><b>Size:</b> {item.size}</p>
                <p style={{ fontSize: "24px" }}><b>Price:</b> {item.price} DKK</p>
                <p style={{ fontSize: "24px" }}><b>Color:</b> {item.color}</p>
                <p style={{ fontSize: "24px" }}><b>Description:</b> {item.description}</p>
                <Button addToBasket={addToBasket} />
            </div>
        </div>
    );
}

export default Clothes;
