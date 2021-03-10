import React, { useState } from "react";
import "./CoinFlip.css";
import Coin from "./Coin";

const CoinFlip = () => {
  const [side, setSide] = useState(null);
  const [numFlips, setNumFlips] = useState(0);
  const [numHeads, setNumHeads] = useState(0);
  const [numTails, setNumTails] = useState(0);

  // flips coin by random
  const flipCoin = () => {
    const flip = Math.random() < 0.5;
    setNumFlips(numFlips + 1);
    if (flip) {
      setSide("h");
      setNumHeads(numHeads + 1);
    }
    else {
      setSide("t");
      setNumTails(numTails + 1);
    }
  };

  return (
    <div className="CoinFlip">
      <h1>Let's flip a coin!</h1>
      { side && <Coin side={ side } /> }
      <button className="CoinFlip-button" onClick={ flipCoin }>FLIP MEEE</button>
      <p>Out of { numFlips } flips, there have been { numHeads } heads 
      and { numTails } tails.</p>
    </div>
  );
};

export default CoinFlip;