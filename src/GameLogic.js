
// [x] create ships for player and computer
// [] create gameboard
// [] player should be able to place ships on board
// [] computer should randomly place ships on board
// [] ships cannot be placed next to another ship
// [] ships cannot be placed on a taken square
// [] on click add one 'hit'
// [] when hit = length sunk = true, then remove ship from gameboard && update score
// [] when player.ships.length = 0, then computer won and vice versa / alternatively add a score for each hit


export const gameboard = () => {
    const wrapper = document.getElementById('wrapper');
    const gameboard  = document.getElementById('gameboard');

    const createGrid = () => {
        for (let i = 0; i <= 9; i++)
            for (let j = 0; j <= 9; j++) {
                const div = document.createElement('div');
                gameboard.appendChild(div);
                div.classList.add('square');
                div.id = [i,j];
            }
    }

    createGrid();
}
