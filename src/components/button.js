import React from 'react';

function Button({ addToBasket }) {
    return (
        <button onClick={addToBasket}>
            Tilføj til kurv
        </button>
    );
}

export default Button;
