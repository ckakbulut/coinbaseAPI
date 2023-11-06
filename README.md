# coinstratsFE

## Purpose

The purpose of this project was twofold. First, I wanted to be able to gain some experience with the "React" way of writing code, making use of React's hooks and components to modularize my code. Second, having developed an interest in trading and exchanges, I wanted to be able to experiment with obtaining live exchange data - I chose USD-ETH as the exchange option, having invested a bit in ETH. The result was the app created in this repository.


## Usage

In order to run the app on localhost, pull the files from the Github repo. Once you're in the `coinstratsFE` folder, `cd` into "coinstrats" and type `npm start` in the terminal, which should run the web app on localhost, port 3000. Check the [NPM Libraries](#npm-libraries) section to see which libraries are needed to run the app.

My app is fairly easy and straightforward to use. I utilize one button to allow the user to either connect or disconnect to/from the Coinbase WebSocket and show the connection status on the left hand side of the screen (Connection Status: Connected/Disconnected).

On the right hand side of the screen, I created 3 buttons to allow users to toggle between displaying only BUY transactions, only SELL transactions, or both BUY and SELL transactions. The default is set to BOTH, i.e. show all incoming transactions. When BUY or SELL is selected when the previous option is BOTH (as shown below in the line "Currently Displaying: ..."), the previous entries for that option are retained but the other option transactions are removed.

For example, if I have a populated table with 20 entries containing both BUY and SELL transactions, and I select to display only BUY by pressing on the button, then the BUY options that were displayed will be kept (in order of latest to earliest) and new transactions added to the table will only be BUY options. The opposite applies for SELL options. However, when going from only BUY or only SELL to BOTH, all the old transactions displayed will be kept and incoming transactions will be added on top of the previously existing table.

The table itself is fairly easy to understand with each trade's trade ID, side, price, size and time displayed. The table rows can be hovered over and indicate which row the cursor is currently on. Each time a batch of new trades are entered, the first row of the table pulses to indicate that the table has updated.

## Files

I separated the project into separate folders to make it somewhat easier to maintain. All the components used for the Web App are stored under "src/components", the `useTable` hook (which handles all the logic for the table) is stored under "/src/hooks" and all the css files used to style the components are stored under "src/styles".

## NPM Libraries

### styled-components

I used version `5.3.10` of the styled-components library to style my React components such as buttons and divs to make them more aesthetically pleasing and also keep my css code managable where possible

### react-use-websocket

I used version `9.6.7` of the react-use-websocket library to connect to the Coinbase WebSocket through the library's useWebSocket hook which simplifies the process of connecting to a WebSocket and allows for actions when a message is received from the socket

### Full list of Dependencies

- "react": "^18.2.0",
- "react-dom": "^18.2.0",
- "react-scripts": "5.0.1",
- "react-use-websocket": "^4.3.1",
- "styled-components": "^5.3.10",
- "web-vitals": "^2.1.4"
