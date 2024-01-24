import React from 'react'
import { useReducer } from 'react'


// const reducer=(state,action)=>{
//   console.log(state,action)
// }
const reducer=(state,action)=>{
  switch(action.type){
    case "red":
      return {color:action.payload}

      default:
        return state
  }
  

}


function App() {
  // const[count,setcount]= useState(0)
  // const[state,dispatch]=useReducer(reducer,{count:0})
  // return (
  //   <div>

  //   <h1>{0}</h1>
  //   <button onClick={()=>dispatch({type:"one"})}>Increment by 1</button>
  //   <button>Increment by 2</button>
  //   <button>Increment by 3</button>
  //   <button>Increment by 4</button>
    
     
  //   </div>
  // )
const[state,dispatch]=useReducer(reducer,{color:"white"})
return (
  <>
  <div>
    
    <div style={{height:"200px" , width:"200px" , backgroundcolor:state.color , border:"2px solid red"}}>
           
    </div>

      <button onClick={()=>dispatch({type:"red" , payload:"red"})}>Red</button>
      <button onClick={()=>dispatch({type:"red" , payload:"black"})}>Black</button>
      <button onClick={()=>dispatch({type:"red" , payload:"green"})}>Green</button>
      <button onClick={()=>dispatch({type:"red" , payload:"orange"})}>Orange</button>
      <button onClick={()=>dispatch({type:"red" , payload:"pink"})}>Pink</button>

      
  </div>
  </>
) 
}

export default App
