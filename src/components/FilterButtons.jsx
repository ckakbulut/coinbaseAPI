import React, { useState } from "react";
import { StyledButton } from "../styles/button.styles.js";
import {
  OptionsSidebarText,
  OptionsSidebarButtonContainer,
} from "../styles/sidebar.styles.js";

export default function FilterButtons({ toggleSide }) {
  const [side, setSide] = useState("BOTH");

  const handleSide = (side) => {
    console.log(side);
    toggleSide(side);
    setSide(side);
  };

  return (
    <>
      <OptionsSidebarText style={{ fontSize: "24px" }}>
        Currently displaying:{" "}
        <div>
          <b>{side === "BOTH" ? "BUY & SELL" : side}</b>
        </div>
      </OptionsSidebarText>
      <OptionsSidebarButtonContainer>
        <StyledButton onClick={() => handleSide("BUY")}>Buy</StyledButton>
        <StyledButton onClick={() => handleSide("SELL")}>Sell</StyledButton>
        <StyledButton onClick={() => handleSide("BOTH")}>Both</StyledButton>
      </OptionsSidebarButtonContainer>
    </>
  );
}
