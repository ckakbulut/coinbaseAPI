import { useState } from "react";
import useWebSocket from "react-use-websocket";
import {
  ConnectSidebarContainer,
  ConnectSidebarText,
} from "../styles/sidebar.styles.js";
import { ConnectButton, StyledButton } from "../styles/button.styles.js";

const socketURL = "wss://ws-feed.exchange.coinbase.com";

const subscribe = {
  type: "subscribe",
  channels: ["matches"],
  product_ids: ["ETH-USD"],
};

const unsubscribe = {
  type: "unsubscribe",
  product_ids: ["ETH-USD"],
  channels: ["matches"],
};

export default function Connect({ handleMessage }) {
  const [connection, setConnection] = useState(false); //
  const { sendJsonMessage } = useWebSocket(socketURL, {
    onOpen: () => console.log("opened"),
    shouldReconnect: () => false,
    // handles what happens when a new trade comes in from the Coinbase websocket
    onMessage: (message) => handleMessage(message),
  });

  const handleConnection = (connected) => {
    if (connected) {
      sendJsonMessage(unsubscribe);
      setConnection(!connection);
    } else {
      sendJsonMessage(subscribe);
      setConnection(!connection);
    }
  };

  return (
    <>
      <ConnectSidebarText>
        Connection Status: {connection ? <b>Connected</b> : <b>Disconnected</b>}
      </ConnectSidebarText>
      <ConnectButton
        onClick={() => {
          handleConnection(connection);
        }}
      >
        {connection ? "Disconnect" : "Connect"}
      </ConnectButton>
    </>
  );
}
