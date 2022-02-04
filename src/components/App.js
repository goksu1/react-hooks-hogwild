import React, {useState} from "react";
import Nav from "./Nav";

import hogs from "../porkers_data";
import PigDetails from "./PigDetails";
import PigList from "./PigList";
import PigFilter from "./PigFilter";

function App() {
const [showGreased, setShowGrease] = useState(false)
const [selectedHog, setSelectedHog] = useState(null)
const [sortBy, setSortBy] = useState("name")

  function handleClickCard(pigName) {
    setSelectedHog(pigName)
  }

  function onGreasedClick(){
    setShowGrease(!showGreased)
  }
  console.log(showGreased)


  const greasedHog = hogs.filter((hog) => {
    return !showGreased ? true : hog.greased === true
  })

  const hogDetails = hogs.filter((hog) => {
    return selectedHog ? hog.name.toLowerCase() === selectedHog.toLowerCase() : null
  })

  const sortPigsByName = greasedHog.sort((hogA, hogB) => hogA.name.localeCompare(hogB.name))


  function onSort(){
    console.log(sortBy)
  }


  return (
    <div className="App">
      <Nav />
      <PigDetails hogDetails={hogDetails}/>
      <PigFilter 
        onGreasedClick= {onGreasedClick} 
        showGreased={showGreased}
        onSort = {onSort}
        sortBy = {sortBy}
        />
      <PigList hogs={sortPigsByName} handleClickCard={handleClickCard}/>
    </div>
  );
}