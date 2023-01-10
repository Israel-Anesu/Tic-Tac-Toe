const gameBoard = (() => {
    board = ["","","","","","","","","",];
    squares = Array.from(document.getElementsByClassName("square"));
    let player = "X";
    let gameActive = true;

    const winCondition = [[0,1,2], [3,4,5], [6,7,8],
                    [0,3,6], [1,4,7], [2,5,8],
                    [0,4,8], [2,4,6]];

    const checkWin = () => {
        let roundWon = false;
        for (let i = 0; i <= 7; i++) {
            const condition = winCondition[i];
            const a = board[condition[0]];
            const b = board[condition[1]];
            const c = board[condition[2]];

            if (a === "" || b === "" || c === "") {
                continue;
            } else {
                if (a === b && b == c) {
                    roundWon = true;
                    break;
                }
            }
        }

        if (roundWon) {
            turn.innerText = `Player ${player} Has Won`;
            gameActive = false;

        }

        if (!board.includes("") && roundWon === false) {
            console.log(board);
            turn.innerText = "It's a Draw";
            gameActive = false;
        }
    };

    const turn = document.getElementById("turn");

    const restart = document.getElementById("restart");
    restart.addEventListener("click", () => {
        board = ["","","","","","","","","",];
        squares.forEach((element) => {
            element.innerText = "";
            gameActive = true;
        })
    })

    squares.forEach((element, index) => {
        element.innerText = board[index];
        element.addEventListener("click", () => {
            if (element.innerText === "" && gameActive === true) {
                if (player === "X") {
                    element.innerText = "X";
                    board[index] = "X";
                    checkWin();
                    if (gameActive) {
                        player = "O";
                        turn.innerText = "Player O's turn";
                    }
                } else {
                    element.innerText = "O";
                    board[index] = "O";
                    checkWin();
                    if (gameActive) {
                        player = "X";
                        turn.innerText = "Player X's turn";
                    }
                }
            }
        })
    });  
})();