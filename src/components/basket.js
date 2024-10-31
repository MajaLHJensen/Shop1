import React from 'react';

function Basket({ items }) {
    const itemCount = items.length;
    const totalPrice = items.reduce((total, item) => total + item.price, 0);

    return (
        <div className="basket" style={{ marginTop: "20px", padding: "15px", border: "1px solid #ddd", borderRadius: "8px" }}>
            <h2>Shopping Basket</h2>
            <p> <b>Items in Basket:</b> {itemCount}</p>
            
            {items.map((item, index) => (
                <div key={index}>
                    <p>{item.brand} - {item.model}</p>
                    <p>Price: {item.price} DKK</p>
                </div>
            ))}
            <p><b>Total Price:</b> {totalPrice} DKK</p>
        </div>
    );
}

export default Basket;
