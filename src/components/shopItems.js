import React from 'react';
import Button from './button';

// Definerer Clothes-komponenten, som modtager 'item' (en tøjartikel) og 'addToBasket' (funktionen til at tilføje til kurv) som props
function Clothes({ item, addToBasket }) {
    // Definerer inline styling til containeren, der indeholder tøjartiklen
    const containerStyle = {
        display: "flex", // Bruger flexbox for at arrangere billeder og tekst vandret
        alignItems: "center", // Centerer elementerne vertikalt
        border: "1px solid #ddd", // Tilføjer en let grå kant omkring elementet
        borderRadius: "8px", // Runde hjørner på containeren
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Let skygge for at give et løft til elementet
        padding: "25px", // Tilføjer lidt indvendig afstand omkring indholdet
        margin: "10px" // Tilføjer afstand mellem tøjartiklerne
    };

    // Definerer inline styling til billedet
    const imageStyle = {
        width: "8%", // Sætter billedets bredde
        height: "auto", // Bevarer billedets aspektforhold
        marginRight: "15px", // Tilføjer afstand mellem billede og tekst
        borderRadius: "8px", // Runde hjørner på billedet
        objectFit: "cover", // Sørger for, at billedet fylder containeren uden at forvrænge sig
        paddingRight: "50px" // Tilføjer lidt ekstra afstand til højre for billedet
    };

    return (
        // Returnerer JSX-strukturen for en tøjartikel
        <div id={item.id} style={containerStyle}>
            {/* Viser tøjartikelens billede med den definerede stil */}
            <img src={item.image} alt={`${item.brand} ${item.model}`} style={imageStyle} />
            <div style={{ }}>
                {/* Viser informationer om tøjartiklen som brand, model, størrelse, pris, farve og beskrivelse */}
                <p style={{ fontSize: "18px" }}><b>Brand:</b> {item.brand}</p>
                <p style={{ fontSize: "18px" }}><b>Model:</b> {item.model}</p>
                <p style={{ fontSize: "18px" }}><b>Size:</b> {item.size}</p>
                <p style={{ fontSize: "18px" }}><b>Price:</b> {item.price} DKK</p>
                <p style={{ fontSize: "18px" }}><b>Color:</b> {item.color}</p>
                <p style={{ fontSize: "18px" }}><b>Description:</b> {item.description}</p>
                {/* Viser knappen til at tilføje varen til kurven */}
                <Button addToBasket={addToBasket} />
            </div>
        </div>
    );
}

export default Clothes;