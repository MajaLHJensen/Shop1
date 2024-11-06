import React from 'react';

// Definerer Button-komponenten, som modtager en funktion (addToBasket) som en prop
function Button({ addToBasket }) {
    return (
        // Renderer en knap med en CSS-klasse "c-button"
        // Når knappen klikkes, udføres addToBasket-funktionen, som er sendt som en prop
        <button className="c-button" onClick={addToBasket}>
            Tilføj til kurv
        </button>
    );
}

export default Button;