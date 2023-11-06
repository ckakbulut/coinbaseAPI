import React, { useState, useEffect } from "react";

const TABLE_PROPS = {
  MAX_ROWS: 20,
  COLUMNS: {
    trade_id: "Trade ID",
    side: "Side",
    price: "Price",
    size: "Size",
    time: "Time",
  },
};

const SIDE = {
  BUY: "BUY",
  SELL: "SELL",
  BOTH: "BOTH",
};

export default function useTable() {
  const [table, setTable] = useState([]);
  const [tableSide, setTableSide] = useState("BOTH");
  const [pulse, setPulse] = useState(false);

  // add pulse animation to style component whenever first index of table changes
  useEffect(() => {
    setPulse(true);
  }, [table]);

  // set pulse to false once animation is complete using animationend event
  useEffect(() => {
    const handleAnimationEnd = () => {
      setPulse(false);
    };
    document.addEventListener("animationend", handleAnimationEnd);
  }, []);

  const convertTime = (time) => {
    const date = new Date(time);
    const formattedTime = date.toTimeString().slice(0, 9);
    return formattedTime;
  };

  const handleMessage = (message) => {
    const data = JSON.parse(message.data);
    if (!data) {
      return;
    }
    if (data.type !== "match") {
      return;
    }

    const { price, size, time, trade_id, side } = data;

    const newTrade = {
      price: parseFloat(price).toFixed(2), // price of the trade
      size: parseFloat(size).toFixed(6), // product id of the trade
      time: convertTime(time), // time of the trade
      trade_id, // trade id of the trade
      side: side.toUpperCase(), // side of the trade
    };

    if (tableSide === newTrade.side || tableSide === SIDE.BOTH) {
      setTable((prevTable) => [
        newTrade,
        ...prevTable.slice(0, TABLE_PROPS.MAX_ROWS - 1),
      ]);
      return table;
    } else {
      return;
    }
  };

  const toggleSide = (side) => {
    setTable((prevTable) => [
      ...prevTable.filter(function (trade) {
        if (side === SIDE.BOTH) {
          return true;
        } else {
          return trade.side === side;
        }
      }),
    ]);
    setTableSide(side);
  };
  return {
    table,
    setTable,
    tableSide,
    setTableSide,
    pulse,
    setPulse,
    convertTime,
    handleMessage,
    toggleSide,
  };
}
