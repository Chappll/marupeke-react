import React from 'react'

const Tile = ({tile, changeTile}) => {
    // const id = 1;
    // const[noughtCross, setNoughtCross] = null;
    // const[blocked,setBlocked] = false;
   // {((tile.position[0]+tile.position[1])%2==0)?'tileButton':'darkBlueTileButton'}
    return (
        <div className='tile'>
            <button className={tile.blocked?'darkBlueTileButton' + ((tile.mark=='X'||tile.mark=='O')?tile.mark:''):'tileButton' +((tile.mark=='X'||tile.mark=='O')?tile.mark:'')} 
            onClick={() => changeTile(tile.position)}></button>
            
        </div>
    )
}

export default Tile
