import React from "react";

const Card = ({id, name, email, username }) => {
  const cardStyle = {
    backgroundColor: "lightgreen",
    display: "inline-block",
    borderRadius: "15px",
    padding: "12px",
    margin: "8px",
  };

  return (
    <div style={cardStyle}>
      <div className="bg-image hover-zoom">
        <img src={`https://robohash.org/${id}?2020`} alt="robotS" />
      </div>
      <h1>{name} alias {username}</h1>
      <p>{email}</p>
    </div>
  );
};

export default Card;
