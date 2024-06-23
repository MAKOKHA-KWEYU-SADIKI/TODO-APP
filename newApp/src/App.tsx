
import './App.scss'
import moon  from'./assets/icon-moon.svg'
import { useState } from 'react'
function App() {
  const[list,setList]=useState<string[]>([
    "Reading Qur'an","Listening to Qur'an recitations","Learning Tawhid","Doing exercises"
  ]);
  const [inputValue,setInput]=useState<string>('');
  const addItem=(e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if (inputValue.trim()=='')return;
    setList([...list,inputValue.trim()])
    setInput('');
  }
  const deleteItem=(index:number)=>{
    setList(list.filter((_,i)=>i !==index));
  }
  const editItem=(index:number,newValue:string)=>{
    const updateList=[...list];
    updateList[index]=newValue
    setList(updateList)

  }

  return (
    <div className='mainDiv'>
      <div className='head'>
       <div className='header'>
       <h1>TODO</h1>
       <img src={moon} alt="" />
       </div>
       <div className='formB'>
       <form action="name" onSubmit={addItem}>
          <input type="text" className='form' placeholder='add item' onChange={(e)=>setInput(e.target.value)} />
          <button className='btn'>
            submit
          </button>
        </form>
     
       </div>
      </div>
      
      <div className='InputList'>
  
        <div>
          <ul  className='list'>
            {list.map((item,index)=>(
              <li key={index}>
                <input type='text' value={item} onChange={(e)=>editItem(index,e.target.value)}/>
                <button onClick={()=>deleteItem(index)} className='del'>Delete</button>
              </li>
            ))}
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
