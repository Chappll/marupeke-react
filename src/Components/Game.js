import React from 'react'
import {useState} from 'react'
import Board from './Board'

function Game(boardSize) {
    boardSize = 3
    const[board, setBoard] = useState([{position: [0,0],mark: '.',blocked: false}, {position: [1,0],mark: 'O',blocked: false}, {position: [2,0],mark: 'O',blocked: false}, {position: [0,1],mark: 'O',blocked: false}, {position: [1,1],mark: 'O',blocked: false}, {position: [2,1],mark: 'O',blocked: false}, {position: [0,2],mark: 'O',blocked: false}, {position: [1,2],mark: 'O',blocked: false}, {position: [2,2],mark: 'O',blocked: false}])
    const changeTile = (position) =>{
        setBoard(board.map((tile) => tile.position === position ? {...tile, mark: markChange(tile)}: tile))
        illegalities(board)
    }


    const markChange = (tile) =>{
        if(!tile.blocked)
        {                     
            switch(tile.mark) {
                case '.':
                    return '-'
                case '-':
                    return 'O'
                case 'O':
                    return 'X'
                case 'X':
                    return '.'
                default:
                    return'.'
                // code block               
            }           
        }
        return tile.mark
    }

    const isLegal = () =>{
        return illegalities(board).length == 0
    }

    const illegalities = (board) =>{
        var problems = []
        for (let i = 0; i < boardSize*boardSize; i++) {
                if(board[i].mark != 'O' && board[i].mark != 'X')
                {
                    //console.log("No verifying needed")
                }
                else{
                        //Horizontal Check
                        if (board[i].position[0] > 0 && board[i].position[0] < (boardSize-1)) {
                            if (board[i-1].mark == board[i].mark && board[i].mark == board[i+1].mark) {
                                problems.push("Horizontal row of three at " + board[i-1].position + " " + board[i].position + " " + board[i+1].position)
                                console.log("HORIZONTAL")
                            }
                        }
                        //Vertical Check
                        if (board[i].position[1] > 0 && board[i].position[1] < (boardSize-1)) {
                            if (board[i-boardSize].mark == board[i].mark && board[i].mark == board[i+boardSize].mark) {
                                problems.push("Vertical row of three at " + board[i-boardSize].position + " " + board[i].position + " " + board[i+boardSize].position)
                                console.log("VERTICLE")
                            }
                        }
                        //Diagonal Checks
                        if (board[i].position[1] > 0 && board[i].position[1] < (boardSize-1) && board[i].position[0] > 0 && board[i].position[0] < (boardSize-1)) {
                                if (board[i-boardSize-1].mark == board[i].mark && board[i].mark == board[i+boardSize+1].mark) {
                                    problems.push("Diagonal row of three at " + board[i-boardSize-1].position + " " + board[i].position + " " + board[i+boardSize+1].position)
                                    console.log("DIAGONAL")
                                }
                                if (board[i+boardSize-1].mark == board[i].mark && board[i].mark == board[i-boardSize+1].mark) {
                                    problems.push("Diagonal row of three at " + board[i+boardSize-1].position + " " + board[i].position + " " + board[i-boardSize+1].position)
                                    console.log("DIAGONAL")
                                }
                            
                            }
                        }
                    }  
                    console.log(problems)     
                    return problems
        }
    
        const createBoard = (boardSize, numBlocked, numX, numO) =>{
            var randomPos
            var createdBoard = []
            
            for (let i = 0; i < boardSize; i++) {
                for (let j = 0; j < boardSize; j++) {
                    createdBoard.push({position: [j, i], mark: '.', blocked: false})
                }
            }

            var testBoard = createdBoard;
           // while(illegalities(testBoard).length != 0) {
                for (let i = 0; i < numBlocked; i++) {
                    randomPos = randomInteger(0, (boardSize*boardSize) -1)
                    console.log(randomPos)
                    testBoard[randomPos].mark = '-'
                    testBoard[randomPos].blocked = true              
                }
                for (let i = 0; i < numX; i++) {
                    randomPos = randomInteger(0, (boardSize*boardSize)-1)
                    testBoard[randomPos].mark = 'X'
                    testBoard[randomPos].blocked = true       
                }
                for (let i = 0; i < numO; i++) {
                    randomPos = randomInteger(0, (boardSize*boardSize)-1)
                    testBoard[randomPos].mark = 'O'
                    testBoard[randomPos].blocked = true    
                }
            //}     
            createdBoard = testBoard
            return createdBoard
        }

        const setNewRandomBoard = (boardSize, numBlocked, numX, numO) =>{
            setBoard(createBoard(boardSize, numBlocked, numX, numO))
        }

        function randomInteger(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }

    return (
        <div>
            <Board board={board} changeTile={changeTile} />
            <button onClick={() => setNewRandomBoard(3,1,1,1)}>{"Create New Board"}</button>
        </div>
    )
}

export default Game
