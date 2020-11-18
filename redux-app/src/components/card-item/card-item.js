import React from 'react'

import './card-item.css'

const CardItem = ({ data }) => {
    return (
        <div className="card shadow card-item">
            <img src="https://picsum.photos/200/300" className="card-img-top"/>
            <div className="card-body">
                <h5 className="card-title">{data.name}</h5>
                <h6 className="card-subtitle">{data.price}</h6>
                <p className="card-text">{data.description}</p>
            </div>
        </div>
    );
}

export default CardItem;