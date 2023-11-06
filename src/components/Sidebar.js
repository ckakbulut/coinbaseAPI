import React from "react";
import Connect from "./Connect";
import FilterButtons from "./FilterButtons";
import {
  ConnectSidebarContainer,
  OptionsSidebarContainer,
} from "../styles/sidebar.styles.js";

function Sidebar({ type, handleMessage, toggleSide }) {
  return type === "left" ? (
    <ConnectSidebarContainer>
      <Connect handleMessage={handleMessage} />
    </ConnectSidebarContainer>
  ) : (
    <OptionsSidebarContainer>
      <FilterButtons toggleSide={toggleSide} />
    </OptionsSidebarContainer>
  );
}

export default Sidebar;
