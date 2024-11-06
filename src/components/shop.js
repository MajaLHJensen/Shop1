import React, { useState } from 'react';
import Clothes from "./shopItems";
import Basket from "./basket";

// Definerer Shop-komponenten, som viser tøjartikler og en kurv
function Shop() {
    // Liste over tøjartikler med detaljer som brand, model, størrelse, pris osv.
    const clothItems = [
        {
            id: 1,
            brand: "Ganni",
            model: "Loose pants",
            size: 38,
            price: 2099,
            color: "Black",
            description: "These Dark Blue Fluffy Wide Jeans have five pockets with zip and button closure and GANNI logo on the back pocket.",
            image: "/images/pants.jpg"
        },
        {
            id: 2,
            brand: "Ganni",
            model: "Sweater",
            size: "Large",
            price: 999,
            color: "Pink",
            description: "This Pink Logo Wool Mix O-neck Pullover is made from wool, recycled wool and recycled polyamide. Ganni sweater",
            image: "/images/sweater.jpg"
        },
        {
            id: 3,
            brand: "Ganni",
            model: "Socks",
            size: "Small",
            price: 249,
            color: "Grey",
            description: "These Gray Glitter Butterfly Lace Socks are available in knee length and feature GANNI Butterfly logo pattern.",
            image: "images/socks.jpg"
        }
    ];
    
    // State til at holde styr på varer i kurven
    const [basketItems, setBasketItems] = useState([]);

    // Funktion til at tilføje en valgt tøjartikel til kurven
    const addToBasket = (item) => {
        setBasketItems((prevItems) => [...prevItems, item]);
    };

    // Returnerer JSX-strukturen til Shop-komponenten
    return (
        <div>
            <h1 style={{ fontSize: "30px", margin: "10px" }}>Clothes List</h1> 
            {/* Løkker gennem tøjartiklerne og render hver artikel ved hjælp af Clothes-komponenten */}
            {clothItems.map(item => (
                <Clothes key={item.id} item={item} addToBasket={() => addToBasket(item)} />
            ))}
            {/* Viser kurven med de valgte varer ved hjælp af Basket-komponenten */}
            <Basket items={basketItems} />
        </div>
    );
}

export default Shop;