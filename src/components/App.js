import React from "react";
import Table from "./Table";
import PageHeader from "./PageHeader";
import Sidebar from "./Sidebar";
import useTable from "../hooks/useTable";
import { HomePageContainer } from "../styles/home.styles";

function App() {
  const { table, toggleSide, handleMessage, pulse } = useTable();
  return (
    <div>
      <style>
        {
          "body { background-color: #111111; color: #8CA2B0; fontFamily: PT Sans; } "
        }
      </style>
      <div>
        <PageHeader />
      </div>
      <div>
        <HomePageContainer>
          <Sidebar
            type="left"
            handleMessage={handleMessage}
            toggleSide={toggleSide}
          />
          <Table table={table} pulse={pulse} />
          <Sidebar
            type="right"
            handleMessage={handleMessage}
            toggleSide={toggleSide}
          />
        </HomePageContainer>
      </div>
    </div>
  );
}

export default App;
