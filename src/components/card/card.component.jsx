import React from "react";

import "./card.styles.css";

export const Card = (props) => (
  <div className="card-container">
    <img
      alt="user"
      src={`https://robohash.org/${props.user.id}?set=set2&size=180x180`}
    />
    <h2>{props.user.name}</h2>
    <p> Username: { props.user.username } </p>
    <p> Email: { props.user.email } </p>
    <p> Phone: { props.user.phone } </p>
    <p> Website: { props.user.website } </p>

  </div>
);
