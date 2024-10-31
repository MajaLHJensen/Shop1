import React from 'react';

function Basket({ items }) {
    const itemCount = items.length;

    return (
        <div>
            <h2>Shopping Basket</h2>
            <p>Items in Basket: {itemCount}</p>
            {items.map((item, index) => (
                <div key={index}>
                    <p>{item.brand} - {item.model}</p>
                    <p>Price: {item.price} DKK</p>
                </div>
            ))}
        </div>
    );
}

export default Basket;
