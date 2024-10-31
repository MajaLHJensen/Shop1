import React from 'react';

function Button({ addToBasket }) {
    return (
        <button className="c-button" onClick={addToBasket}>
            Tilføj til kurv
        </button>
    );
}

export default Button;
