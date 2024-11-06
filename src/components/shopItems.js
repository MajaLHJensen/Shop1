import React from 'react';
import Button from './button';

function Clothes({ item, addToBasket }) {
    const containerStyle = {
        display: "flex",
        alignItems: "center",
        border: "1px solid #ddd",
        borderRadius: "8px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        padding: "25px",
        margin: "10px"
    };

    const imageStyle = {
        width: "8%",
        height: "auto",
        marginRight: "15px",
        borderRadius: "8px",
        objectFit: "cover",
        paddingRight: "50px"
    };

    return (
        <div id={item.id} style={containerStyle}>
            <img src={item.image} alt={`${item.brand} ${item.model}`} style={imageStyle} />
            <div style={{ }}>
                <p style={{ fontSize: "18px" }}><b>Brand:</b> {item.brand}</p>
                <p style={{ fontSize: "18px" }}><b>Model:</b> {item.model}</p>
                <p style={{ fontSize: "18px" }}><b>Size:</b> {item.size}</p>
                <p style={{ fontSize: "18px" }}><b>Price:</b> {item.price} DKK</p>
                <p style={{ fontSize: "18px" }}><b>Color:</b> {item.color}</p>
                <p style={{ fontSize: "18px" }}><b>Description:</b> {item.description}</p>
                <Button addToBasket={addToBasket} />
            </div>
        </div>
    );
}

export default Clothes;
