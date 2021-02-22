import React from 'react'

const Tile = ({tile, changeTile}) => {
    // const id = 1;
    // const[noughtCross, setNoughtCross] = null;
    // const[blocked,setBlocked] = false;
    
    return (
        <div className='tile'>
            <button className={((tile.position[0]+tile.position[1])%2==0)?'tileButton':'darkBlueTileButton'} onClick={() => changeTile(tile.position)}>{tile.mark}</button>
           
        </div>
    )
}

export default Tile
