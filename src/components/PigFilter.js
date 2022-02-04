import React from 'react'

function PigFilter({onGreasedClick, showGreased, onSort, sortBy}){

    return( 
        <>
        <br></br>
        <input 
            type="checkbox" 
            id="greased" 
            name="greased" 
            checked={showGreased} 
            onChange={onGreasedClick}>
        </input>
        <label for="greased"> Greased Pigs</label>



        <label>

        <select name="category" onChange={onSort} key={sortBy}>
          <option key="name">Sort by Name A-z</option>
          <option key="weight">Sort by Weight</option>

        </select>
      </label>
        </>
    )
}


export default PigFilter 