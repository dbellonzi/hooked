import React from 'react';

const cardDeck = (props) => {
    return (
        <div className="card-deck m-2 p-3">
            {props.children}
        </div>
    )
}
export default cardDeck;