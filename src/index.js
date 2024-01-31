import { battleship } from "./ShipFactory";

const driver = (() => {
    console.log(battleship.createAllShips());
})();