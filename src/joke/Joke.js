import React from 'react'

function Joke() {
    const fetchData = async () => {
        const data = await fetch(
          `https://official-joke-api.appspot.com/random_joke`
        );
        const response = await data.json();
    }
    
    const nxtbtn=()=>{
        <button>Next joke</button> 
    }
    

  return (
    <div>
        <h4>Welcome to joke site</h4>
      <button onClick={fetchData}>Generate jokes</button>
    </div>
  )
}

export default Joke
