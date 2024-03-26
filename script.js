// const input = prompt()




function gameBoard(){
    let board = {};
    for (i = 1; i <= 9; i++){
        board[i] = i
    };
    
    const printBoard = () => console.log(
        `| ${board[1]} | ${board[2]} | ${board[3]} |\n` +
        `| ${board[4]} | ${board[5]} | ${board[6]} |\n` +
        `| ${board[7]} | ${board[8]} | ${board[9]} |`
        );
    
    const cellChanger = (index, player) => board[index] =  player;
    
    return { printBoard, cellChanger };
    
}

function gameRunner(
    playerOneName = "Player One",
    playerTwoName = "Player Two"
    ){
    
    let player = 'X';

    const game = gameBoard();
    
    const printRound = () => {
        game.printBoard();
        console.log(`${playerOneName}'s turn`)
    }

    const oneRound = (index) => {
        game.cellChanger(index, player)
        printRound();
    }

    return {printRound, oneRound}

}

const game = gameRunner();




