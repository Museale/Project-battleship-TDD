import { computer } from "./Computer";
import { battleship } from "./ShipFactory";

const driver = (() => {
    console.log('player',battleship.createAllShips());
    console.log('comp', computer());
})();