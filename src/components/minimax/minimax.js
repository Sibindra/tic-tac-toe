let human = "O";
let ai = "X";

// replace null elements in an array with their index
function fixArray(arr) {
    return arr.map((element, index) => (element === null ? index : element));
}

// check win condition
function winCheck(board, player) {
    if (
        (board[0] == player && board[1] == player && board[2] == player) ||
        (board[3] == player && board[4] == player && board[5] == player) ||
        (board[6] == player && board[7] == player && board[8] == player) ||
        (board[0] == player && board[3] == player && board[6] == player) ||
        (board[1] == player && board[4] == player && board[7] == player) ||
        (board[2] == player && board[5] == player && board[8] == player) ||
        (board[0] == player && board[4] == player && board[8] == player) ||
        (board[2] == player && board[4] == player && board[6] == player)
    ) {
        return true;
    } else {
        return false;
    }
}

// get empty spots
function getEmptyList(board) {
    let list = [];
    for (let i = 0; i < board.length; i++) {
        if (board[i] != "X" && board[i] != "O") {
            list.push(i);
        }
    }
    return list;
}

export default function minimax(newBoard, player) {
    newBoard = fixArray(newBoard);

    let availableSpots = getEmptyList(newBoard);

    if (winCheck(newBoard, human)) {
        return { score: -10 };
    } else if (winCheck(newBoard, ai)) {
        return { score: 10 };
    } else if (availableSpots.length === 0) {
        return { score: 0 };
    }

    let moves = [];

    for (let i = 0; i < availableSpots.length; i++) {
        let move = {};
        move.index = newBoard[availableSpots[i]];

        newBoard[availableSpots[i]] = player;

        if (player == ai) {
            let result = minimax(newBoard, human);
            move.score = result.score;
        } else {
            let result = minimax(newBoard, ai);
            move.score = result.score;
        }

        newBoard[availableSpots[i]] = move.index;

        moves.push(move);
    }

    let bestMove;
    if (player === ai) {
        let bestScore = -10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score > bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    } else {
        let bestScore = 10000;
        for (let i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) {
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }
    let best = moves[bestMove];
    return best;
}
