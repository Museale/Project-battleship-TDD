export const battleship = (() =>  {
    
    const createShips = (length) => {
        const ship = {
            length: length,
            hits: function(hit) {
                return hit + 1;
            },
            sunk: false
        }
        return ship;
    }

    const createAllShips = () => {
        let shipArray = [];

        for(let i = 4; i >= 1; i--) {
            for(let j = 4; j >= i; j--) {
                shipArray.push(createShips(i)); 
            }
        }
        return shipArray;
    }

    return {
        createShips,
        createAllShips
    }
})();

console.log(battleship.createAllShips().length)