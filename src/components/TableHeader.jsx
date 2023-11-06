import React from "react";
import {
  StyledTableHeader,
  StyledTableHeaderContainer,
} from "../styles/table.styles.js";

export default function TableHeader() {
  return (
    <>
      <StyledTableHeaderContainer>
        <StyledTableHeader>
          <b>Trade ID</b>
        </StyledTableHeader>
        <StyledTableHeader>
          <b>Side</b>
        </StyledTableHeader>
        <StyledTableHeader>
          <b>Price</b>
        </StyledTableHeader>
        <StyledTableHeader>
          <b>Size</b>
        </StyledTableHeader>
        <StyledTableHeader>
          <b>Time</b>
        </StyledTableHeader>
      </StyledTableHeaderContainer>
    </>
  );
}
