import styled from "styled-components";

export const ConnectSidebarContainer = styled.div`
  background-color: #111111;
  font-family: PT Sans;
  height: auto;
  width: 300px;
  flex-direction: column;
  display: flex;
  position: relative;
  align-items: center;
  font-size: 24px;
  margin-top: 100px;
`;

export const ConnectSidebarText = styled.div`
  text-align: center;
  position: relative;
  top: 100px;
  height: 250px;
  max-width: 80%;
`;

export const OptionsSidebarContainer = styled(ConnectSidebarContainer)``;

export const OptionsSidebarText = styled(ConnectSidebarText)`
  height: auto;
  top: 0px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const OptionsSidebarButtonContainer = styled.div`
  position: relative;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  height: 150px;
  margin-bottom: 50px;
`;
