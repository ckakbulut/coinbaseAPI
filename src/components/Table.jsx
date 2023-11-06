import TableEntry from "./TableEntry";
import TableHeader from "./TableHeader";
import { TableContainer } from "../styles/table.styles.js";

export default function Table({ table, pulse }) {
  return (
    <TableContainer>
      <TableHeader />
      {table.map((trade, index) => (
        <TableEntry trade={trade} index={index} pulse={pulse} />
      ))}
    </TableContainer>
  );
}
