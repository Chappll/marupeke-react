import React from 'react'
import {useState} from 'react'
import Board from './Board'

function Game(boardSize) {
    boardSize = 3
    const[board, setBoard] = useState([{position: [0,0],mark: '.',blocked: false}, {position: [0,1],mark: 'O',blocked: false}, {position: [0,2],mark: 'O',blocked: false}, {position: [1,0],mark: 'O',blocked: false}, {position: [1,1],mark: 'O',blocked: false}, {position: [1,2],mark: 'O',blocked: false}, {position: [2,0],mark: 'O',blocked: false}, {position: [2,1],mark: 'O',blocked: false}, {position: [2,2],mark: 'O',blocked: false}])
    const changeTile = (position) =>{
        setBoard(board.map((tile) => tile.position === position ? {...tile, mark: markChange(tile)}: tile))
        
    }


    const markChange = (tile) =>{
        if(!tile.blocked)
        {
            illegalities()
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
        return illegalities().length == 0
    }

    const illegalities = () =>{
        var problems = []
        for (let i = 0; i < boardSize; i++) {
            for (let j = 0; j < boardSize; j++) {
                board.map((tile) => tile.position[0] == i && tile.position[1] == j && (tile.mark == 'O' || tile.mark == 'X')?
                null
                :console.log("no verifying needed"))             
            }
        }
        return''
    }

    return (
        <div>
            <Board board={board} changeTile={changeTile} />
        </div>
    )
}

export default Game
