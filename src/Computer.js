import { battleship } from "./ShipFactory";

export const computer = () => {
    const computerShips = battleship.createAllShips();
    return computerShips;
};
