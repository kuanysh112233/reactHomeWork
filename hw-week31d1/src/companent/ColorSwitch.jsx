import React from 'react'
import { useReducer } from 'react'




function reducer (state , action){
    switch(action.type){
        case "Belyi" :
            return 'white';
        case "Chernyi" :
            return 'black' ;
        case "Sinyi" :
            return 'blue' ;
        default:
            return state;
    }
}


export default function ColorSwitch() {

    const[state , dispatch] = useReducer(reducer,"")

  return (
    <>

    <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent:'center',
        backgroundColor: state,
        color: 'orange',

    }}>
        <h1>Current theme {state}</h1>
        <div>
        <button onClick={()=>{dispatch({type:"Belyi"})}}>white</button>
        <button onClick={()=>{dispatch({type:"Chernyi"})}}>black</button>
        <button onClick={()=>{dispatch({type:"Sinyi"})}}>blue</button>
        </div>
    </div>

    </>
  )
}
