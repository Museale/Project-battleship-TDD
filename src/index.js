import { computer } from "./Computer";
import { gameboard } from "./Gameboard";
import { battleship } from "./ShipFactory";



const driver = (() => {
    console.log('player',battleship.createAllShips());
    console.log('comp', computer());
})();