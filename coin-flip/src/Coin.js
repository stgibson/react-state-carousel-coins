import React from "react";
import "./Coin.css";

const Coin = (props) => {
  return (
    <div className="Coin">{ props.side === "h" ? "Heads" : "Tails" }</div>
  );
};

export default Coin;