import React from "react";
import "../../../styles/components/card.scss";

export default function Card(props) {
  let {
    title,
    location,
    googleMapsUrl,
    startDate,
    endDate,
    description,
    imageUrl,
    imageAlt,
  } = props.info;
  return (
    <section className="card">
      <img src={imageUrl} alt={imageAlt} />
      <div className="card-info">
        <div className="location">
          <img src="src/assets/location-icon.svg" />
          <span className="location-name">{location.toUpperCase()}</span>
          <a className="google-maps-link" href={googleMapsUrl}>
            View on Google Maps
          </a>
        </div>
        <h2 className="name">{title}</h2>
        <h3 className="date">
          {startDate} - {endDate}
        </h3>
        <p className="description">{description}</p>
      </div>
    </section>
  );
}
