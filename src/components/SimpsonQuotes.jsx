import React, { useState } from 'react';

function DisplayQuotes({ quote }) {

    return (
        quote && (
            <div>
                <img src={quote.image} />
                <h2> {quote.character} </h2>
                <p>{quote.quote}</p>
            </div>
        )
    );
}


export default DisplayQuotes;