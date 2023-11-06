import styled, { css, keyframes } from "styled-components";

export const TableContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const StyledTableHeader = styled.div`
  flex-direction: row;
  justify-content: space-between;
  font-family: "PT Sans", sans-serif;
  align-items: center;
  text-align: center;
  padding: 5px;
  width: 100%;
  max-width: 500px;
  color: #c3ced6;
`;

export const StyledTableHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  background-color: #2f3a42;
  border: 1px solid black;
  border-radius: 5px;
  margin: 0 auto;
`;

const pulse = keyframes`
    0% {opacity: 10%;}
    25% {opacity: 25%;}
    50% {opacity: 50%;}
    75% {opacity: 75%;}
    100% {opacity: 100%;}`;

export const StyledTableEntry = styled.div`
  flex-direction: row;
  font-family: "PT Sans", sans-serif;
  font-size: 18px;
  align-items: center;
  text-align: center;
  padding: 5px;
  width: 100%;
  max-width: 500px;
  color: ${(props) => (props.side === "BUY" ? "#028a0f" : "red")};
`;

export const TableEntryContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  background-color: ${(props) =>
    props.index % 2 === 0 ? "#2f3a42" : "#36454f"};
  border: 1px solid black;
  border-radius: 5px;
  ${(props) =>
    props.pulse &&
    props.index === 0 &&
    css`
      animation: ${pulse};
      animation-duration: 0.5s;
      animation-iteration-count: 1;
    `}
  &:hover {
    opacity: 0.9;
  }
`;
