import React from 'react'
import Tile from './Tile'
import {useState} from 'react'

const Board = ({board, changeTile}) => {
    return (
        <div className='tiles'>
            {board.map((tile) => (     
            <Tile tile={tile} changeTile={changeTile} position={board.indexOf(tile)}/>
            ))}
        </div>
    )
}

export default Board
