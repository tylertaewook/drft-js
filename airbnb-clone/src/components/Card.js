import React from 'react';

function Card (props)  {
  return (
    <div className="card">
        <img src={`../images/${props.item.imageUrl}`} className="card--image" />
        
        <div className="info">
            <div className= "card--geo">
                <span>{props.item.location}</span>
                <a href={props.item.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1>{props.item.title}</h1>
            <h2>{`${props.item.startDate} - ${props.item.endDate}`}</h2>
            <p>{props.item.description}</p>
        </div>
    </div>
  );
};

export default Card;
