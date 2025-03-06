import React from 'react'
import './App.css'

export default function App() {
  let clickOnChange = (event) =>{
    console.log(event.target.value.toUpperCase());
    
  }
  let clickOnKeyDown = (event) =>{
    if(event.key === "Enter"){
      console.log("Submitted");
      
    }
    
  }
  return (
    <>
    <div>
      <h1>Event Handling</h1>
      <input type="text" placeholder='пишите сдезь'
       onChange={clickOnChange}
       onKeyDown={clickOnKeyDown}/>
    </div>
    </>
  )
}


