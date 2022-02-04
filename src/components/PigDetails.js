import React from 'react'


function PigDetails({hogDetails}) {

    let renderPigDetails

    // const renderPigDetails = {
        if (!hogDetails[0]) {
            renderPigDetails =  <h2>Select a pig to see more information</h2>
        } else  {
            renderPigDetails = (
                <div>
                    <h2>About Selected Pig:</h2>
                    <h4>Name: {hogDetails[0].name}</h4>
                    <h4>Specialty: {hogDetails[0].specialty}</h4>
                    <h4>Weight: {hogDetails[0].weight} kg</h4>
                    <h4>Greased: {hogDetails[0].greased? "Yes" : "No"}</h4>
                    <h4>Highest Medal Achieved: {hogDetails[0]['highest medal achieved']}</h4>
                </div>
            )
        }


        console.log("pig detail:", hogDetails[0])




    return( 
        <div className="details">
           {renderPigDetails}
        </div>
       )




}

export default PigDetails