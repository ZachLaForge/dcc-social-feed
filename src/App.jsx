import React, { useState } from 'react';
import AddEntry from './components/addEntry/AddEntry';
import DisplayEntry from './components/displayEntry/DisplayEntry';
import './App.css'

function App() {

  const [entries, setEntries] = useState([{name: "Zach", post: "Go Pack Go"}, {name: "Landon", post: "I hate school"}])

  function addNewEntry(entry){
    let tempEntries = [...entries, entry]

    setEntries(tempEntries)
  }

  return (
    <div>
      <div>
        <h3 style={{margin: '1em'}}>
          SocialFeed
        </h3>
        <div>
          <div className='border-box'>
            <AddEntry addNewEntry={addNewEntry} />
          </div>
          <div className='border-box'>
            <DisplayEntry parentEntries = {entries} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;