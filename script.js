


function gameBoard(){
    // doska
    let board = {};
    for (i = 1; i <= 9; i++){
        board[i] = i
    };
    
    // dlya konsol'noi versii otrisovka cherez log

    const printBoard = () => console.log(
        `| ${board[1]} | ${board[2]} | ${board[3]} |\n` +
        `| ${board[4]} | ${board[5]} | ${board[6]} |\n` +
        `| ${board[7]} | ${board[8]} | ${board[9]} |`
        );
    
    const cellChanger = (index, player) => board[index] =  player;
    
    return { printBoard, cellChanger, board};
    
}

function gameRunner(
    playerOne = "Player One",
    playerTwo = "Player Two"
    ){
        
    const game = gameBoard();   

    const players = [ 
        {name: playerOne, mark: 'X'},
        {name: playerTwo, mark: 'O'}    
        ];

    let activeTurn = players[0];

    const getActiceTurn = () => activeTurn; // na budushee dlya DOM elementov

    const changeTurns  = () => {
        activeTurn = activeTurn === players[0] ? players[1] : players[0]
    }
    
    const winCondition = () => {
        const board = game.board;
        const winCon = [
            [1, 2, 3], [4, 5, 6], [7, 8, 9], // win con po gorizontalo
            [1, 4, 7], [2, 5, 8], [3, 6, 9],    // po vertikali
            [1, 5, 9], [3, 5, 7]    //po diagonali
        ];

        for (const con of winCon){
            const [x, y, z] = con; // destruktalizaciya conditiona
            if (board[x] === board[y] && board[y] === board[z]){
                return true
            }
        }
    }

    //otrisovka raunda v konsol'
    const printRound = () => {
        game.printBoard();
        console.log(`${getActiceTurn().name}'s turn`)
    }

    const oneRound = (index) => {
        game.cellChanger(index, getActiceTurn().mark);
        
        
        
        changeTurns();
        printRound();
    }

    printRound();

    return {printRound, oneRound}

}


const game = gameRunner();




