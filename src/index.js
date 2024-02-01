import { computer } from "./Computer";
import { gameboard } from "./GameLogic";
import { battleship } from "./ShipFactory";
import './style.scss';


const driver = (() => {
    console.log('player',battleship.createAllShips());
    console.log('comp', computer());
    gameboard();
})();