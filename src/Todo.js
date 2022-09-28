import React, { useState } from 'react'

const Todo = () => {
  const [activity,setActivity]=useState("")
  const [list,setList]=useState("")
  function addActivity(){
    //  setList([...list,activity])
    setList((list)=>{
        const updatelist = [...list,activity]
        return updatelist 
    })
  }
  function removeActivity(i){
    const updatedlistData=list.filter((elem,id)=>{
      return i!=id;
    })
    setList(updatedlistData);
  }
  function removeAll(){
    setList([])
  }
    return ( 
    <>
    <div className='container'>
        <h1>To-Do List</h1>
    <input type="text" className='input-element' placeholder='Add Item' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
    <button className='add-btn' onClick={addActivity}>Add </button>
    <p className='list-heading'>Here is your List :{")"}</p>
    {list!=[]&& list.map((data,i)=>{
      return(
        <>
        <p key={i}>
          <div className='list'>{data}</div>
          <button className='remove-btn' onClick={()=>removeActivity(i)}>Remove</button>
          
        </p>
        </>
      )
    })}
    {list.length>=1 && <button className='remove-all-btn' onClick={removeAll}>Remove all</button>}
    </div>
    </>
  )
}

export default Todo