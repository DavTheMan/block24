import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'
import {puppyList} from './data.js'
import './index.css'

function App() {
  //const [count, setCount] = useState(0)
  //const [puppies, setPuppies] = useState(puppyList);
  //console.log(puppyList)
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup)=> pup.id === featPupId);
  //console.log()
  console.log(puppies);
  console.log("puppyList: ", puppyList);
  console.log(featuredPup);
  return (
    <>
      <div className="App">
        {featPupId && <p>{ featPupId }</p> }
        {
        puppies.map((puppy) => {
          return <p onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}
          </p>
          })
        }
        {featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>
      )}
      </div>
    </>
  );
}

export default App
