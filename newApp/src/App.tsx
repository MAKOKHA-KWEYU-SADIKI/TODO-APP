import { useState } from 'react'
import './App.scss'
import moon  from'./assets/icon-moon.svg'
function App() {
  const [list, setCount] = useState([])
  const [input,update]=useState('');
  const additem=()=>{
    if (input.trim()){
      setCount([...input,update.trim()])
    }
  }

  return (
    <div className='mainDiv'>
      <div className='head'>
       <div className='header'>
       <h1>TODO</h1>
       <img src={moon} alt="" />
       </div>
       <div className='formB   '>
          <form action="name">
             <input type="text" className='form' placeholder='currently typing' />
   
          </form>
           <button className='btn' onClick={update}>
             submit
          </button> 
       </div>
      </div>
      
      <div className='InputList'>
  
        <div>
          <ul  className='list'>
            <li>10 minutes meditation</li>
            <li>Read for 1 hour</li>
            <li>Pickup groceries</li>
            <li>complete to do App frontend Mentor</li>
          </ul>
          <div>
        <ul className='listF'>
          <li className='all'>All</li>
          <li className='active'>Active</li>
          <li className='completed'>Completed</li>
          <li className='clear'>Clear Completed</li>
        </ul>
      </div>
  
        </div>
        
      </div>
     
    </div>
  )
}

export default App
