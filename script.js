
function gameBoard(){
    // doska
    let board = {};
    for (i = 1; i <= 9; i++){
        board[i] = i
    };
    
    const resetBoard = () => {
        board = {};
        for (i = 1; i <= 9; i++){
            board[i] = i
        }
    }
    // dlya konsol'noi versii otrisovka cherez log

    const printBoard = () => console.log(
        `| ${board[1]} | ${board[2]} | ${board[3]} |\n` +
        `| ${board[4]} | ${board[5]} | ${board[6]} |\n` +
        `| ${board[7]} | ${board[8]} | ${board[9]} |`
        );
    
    const cellChanger = (index, player) => board[index] =  player;
    
    return { printBoard,
            cellChanger, 
            board,
            resetBoard
            };
    
};

function gameRunner(
    playerOne = "Player One",
    playerTwo = "Player Two"
    ){
        
    const game = gameBoard();   
    const board = game.board;
    const players = [ 
        {name: playerOne, mark: 'X'},
        {name: playerTwo, mark: 'O'}    
        ];

    let activeTurn = players[0];
    
    const getActiceTurn = () => activeTurn; // na budushee dlya DOM elementov

    const changeTurns  = () => {
        activeTurn = activeTurn === players[0] ? players[1] : players[0]
    }
    
    const tieCondition = () => {
        for (let i in board) {
            if (board.hasOwnProperty(i) && typeof board[i] === 'number') {
                return false;
            }
        }
        return true; // no number type values left in the board, therefore its tie
    }

    const winCondition = () => {
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

        return false
    }

    //otrisovka raunda v konsol'
    
    
    const printRound = () => {
        game.printBoard();
        console.log(`${getActiceTurn().name}'s turn`)
    }


    // odin hod

    const oneRound = (index) => {
        if (game.board[index] === 'X' || game.board[index] === 'O'){
            printRound();
            throw new Error('Box already checked!')
        }else{
            game.cellChanger(index, getActiceTurn().mark);
            
            if (winCondition()){
                console.log(`${getActiceTurn().name} WON`)
                printRound();
            }else if(tieCondition()){
                console.log("It's a tie!")
                printRound();
            }else{
                changeTurns();
                printRound();

            }
        }
    }

    const newGame = () => {
        game.resetBoard();
        activeTurn = players[0];
        printRound();
    }


    printRound();

    return {newGame, oneRound}

}


const game = gameRunner();




