import React from 'react'
import PigCard from './PigCard';

// import augustus_gloop from '../assets/augustus_gloop.jpg'
// import babe from '../assets/babe.jpg'
// import bailey from '../assets/bailey.jpg'
// import cherub from '../assets/cherub.jpg'
// import galaxy_note from '../assets/galaxy_note.jpg'
// import leggo_my_eggo from '../assets/leggo_my_eggo.jpg'
// import peppa from '../assets/peppa.jpg'
// import piggy_smalls from '../assets/piggy_smalls.jpg'
// import piglet from '../assets/piglet.jpg'
// import porkchop from '../assets/porkchop.jpg'
// import trouble from '../assets/trouble.jpg'
// import truffle_shuffle from '../assets/truffle_shuffle.jpg' 

function PigList({hogs, handleClickCard}){

    const hogsConst = hogs.map((hog) => {
        return(
            <div>
                <PigCard 
                    key={hog.name}
                    name={hog.name}
                    image={hog.image}
                    handleClickCard = {handleClickCard}
                />
            </div> 
        )
    })



    return( 
        <div class="ui grid container">
            <br></br>
            {hogsConst}
        </div>
    )
}

export default PigList; 