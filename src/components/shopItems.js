import React from 'react';
import Button from './button';

function Clothes({ id, brand, model, size, price, color, description, addToBasket }) {
    const clothesStyle = { padding: "10px", margin: "10px" };

    return (
        <div id={id} style={clothesStyle}>
            <h2>{brand}</h2>
            <p>{model}</p>
            <p>{size}</p>
            <p>{price} DKK</p>
            <p>{color}</p>
            <p>{description}</p>
            <Button addToBasket={addToBasket} />
        </div>
    );
}

export default Clothes;
