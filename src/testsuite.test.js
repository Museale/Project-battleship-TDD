const ship = require('./index.js')
import { battleship } from './ShipFactory.js';

test('ships created', () => {
    expect((battleship.createAllShips().length)).toBe(10);
});

test('ships are placed at correct coordinates', () => {

})

test('registers hits and misses', () => {

});

test('reports if ship is sunk', () => {

});

