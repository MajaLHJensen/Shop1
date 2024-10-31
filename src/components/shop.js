import React, { useState } from 'react';
import Clothes from "./shopItems";
import Basket from "./basket"; // New Basket component

const clothItems = [
    {id: 1, brand: "Ganni", model: "Loose pants", size: 38, price: 2099, color: "black", description: "These Dark Blue Fluffy Wide Jeans have five pockets with zip and button closure and GANNI logo on the back pocket."},
    {id: 2, brand: "Ganni", model: "Sweater", size: "Large", price: 999, color: "Pink", description: "This Pink Logo Wool Mix O-neck Pullover is made from wool, recycled wool and recycled polyamide. The pullover is designed in a regular fit with a round neckline, ribbed edges and a graphic GANNI pattern."},
    {id: 3, brand: "Ganni", model: "Socks", size: "Small", price: 249, color: "Grey", description: "These Gray Glitter Butterfly Lace Socks are available in knee length and feature GANNI Butterfly logo pattern."}
];

function Shop() {
    const [basketItems, setBasketItems] = useState([]);

    // Function to add an item to the basket
    const addToBasket = (item) => {
        setBasketItems((prevItems) => [...prevItems, item]);
    };

    return (
        <div>
            <h1>Clothes List</h1>
            <button>Shopping Basket</button>
            {clothItems.map(item => (
                <Clothes key={item.id} {...item} addToBasket={() => addToBasket(item)} />
            ))}
            <Basket items={basketItems} /> {/* Render the Basket component */}
        </div>
    );
}

export default Shop;

