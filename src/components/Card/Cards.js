import React from "react";
import classes from "./Cards.module.css";

const Cards = ({ results }) => {
  let display;
  console.log(results);

  if (results) {
    display = results.map((x) => {
      let { id, name, image, location, gender, status } = x;
      return (
        <div key={id} className="col-4 mb-4 position-relative">
          <div className={classes.cards}>
            <img
              src={image} 
              alt={name}
              className={`${classes.img} img-fluid`}
            />
            <div className="content p-3">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="">
                <div className="fs-6">Gender: {gender}</div>
                <div className="fs-6">Last location: {location.name}</div>
              </div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${classes.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${classes.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${classes.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </div>
      );
    });
  } else {
    display = "No characters found :/";
  }

  return <>{display}</>;
};

export default Cards;
