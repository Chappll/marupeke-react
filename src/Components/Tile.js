import React from 'react'

const Tile = ({tile, changeTile, position}) => {
    // const id = 1;
    // const[noughtCross, setNoughtCross] = null;
    // const[blocked,setBlocked] = false;
    
    return (
        <div className='tile'>
            <button className={(position%2==0)?'tileButton':'darkBlueTileButton'} onClick={() => changeTile(position)}>{tile.mark}</button>
           
        </div>
    )
}

export default Tile
