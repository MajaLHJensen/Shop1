import React from 'react';

// Definerer Basket-komponenten, som modtager items som en prop
function Basket({ items }) {
    // Beregner antallet af varer i kurven ved at bruge længden af items-arrayet
    const itemCount = items.length;

    // Beregner den samlede pris for alle varer i kurven ved at summere priserne
    const totalPrice = items.reduce((total, item) => total + item.price, 0);

    // Returnerer JSX-strukturen for Basket-komponenten
    return (
        <div className="basket" style={{ marginTop: "10px", padding: "10px", border: "1px solid #ddd", borderRadius: "8px" }}>
            {/* Overskrift for kurven */}
            <h2>Shopping Basket</h2>

            {/* Viser antallet af varer i kurven */}
            <p><b>Items in Basket:</b> {itemCount}</p>
            
            {/* Itererer gennem items-arrayet og viser hver vares brand, model og pris */}
            {items.map((item, index) => (
                <div key={index}>
                    <p>{item.brand} - {item.model}</p>
                    <p>Price: {item.price} DKK</p>
                </div>
            ))}

            {/* Viser den samlede pris for alle varer i kurven */}
            <p><b>Total Price:</b> {totalPrice} DKK</p>
        </div>
    );
}

export default Basket;