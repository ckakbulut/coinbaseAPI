import React from "react";
import {
  StyledTableEntry,
  TableEntryContainer,
} from "../styles/table.styles.js";

export default function TableEntry({ trade, index, pulse }) {
  return (
    <TableEntryContainer index={index} pulse={pulse}>
      <StyledTableEntry side={trade.side}>{trade.trade_id}</StyledTableEntry>
      <StyledTableEntry side={trade.side}>{trade.side}</StyledTableEntry>
      <StyledTableEntry side={trade.side}>{trade.price}</StyledTableEntry>
      <StyledTableEntry side={trade.side}>{trade.size}</StyledTableEntry>
      <StyledTableEntry side={trade.side}>{trade.time}</StyledTableEntry>
    </TableEntryContainer>
  );
}
