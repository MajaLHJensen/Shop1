import React from 'react';
import Button from './button';

<script src="https://kit.fontawesome.com/d159f481dd.js" crossorigin="anonymous"></script>

function Clothes({ id, brand, model, size, price, color, description }) {
    const clothesStyle = { border: "1px solid black", padding: "10px", margin: "10px" }; // Example style, you can customize it

    return (
        <div id={id} style={clothesStyle}>
            <h2>{brand}</h2>
            <p>{model}</p>
            <p>{size}</p>
            <p>{price}</p>
            <p>{color}</p>
            <p>{description}</p>
            <Button/>
        </div>
    );
}

export default Clothes;