import React,{useState} from 'react'
import './Form.css'

function Forms() {
    const [email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[condition,setCondition]= useState(true)
    console.log(email,password)
     const handlesubmit =(e)=>{
         e.preventDefault();
         setCondition(false)
     }

  return (
   
      <div>
        <h1>Welcome to this site</h1>
      <form onSubmit={handlesubmit}>
        <div>
        <input className='input1' type="email" placeholder="enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
        </div>
        <div>
        <input className='input2' type="password" placeholder="enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
        </div>
        <button >Submit</button>
        
      </form>
      {!condition &&(
        <>
        <h1>your email is :{email}</h1>
        <h1>your password is:{password}</h1>
        </>
      )}
    </div>
    
  )
}

export default Forms
