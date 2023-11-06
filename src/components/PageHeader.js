import React from "react";

export default function PageHeader() {
  return (
    <div
      style={{ alignItems: "center", display: "flex", flexDirection: "column" }}
    >
      <h1 style={{ color: "#8CA2B0", fontFamily: "PT Sans" }}>
        Coinstrats FE Challenge
      </h1>
      <div>
        <h2 style={{ color: "#8CA2B0", fontFamily: "PT Sans" }}>
          Order Book of Latest 20 Trades on Coinbase
        </h2>
      </div>
    </div>
  );
}
