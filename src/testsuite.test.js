const ship = require('./index.js')
import { battleship } from './ShipFactory.js';

test('ships created', () => {
    expect((battleship.createAllShips().length)).toBe(10);
});
