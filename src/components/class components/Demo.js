
import React, {useState} from "react";

 export default class lifecycle extends React.Component{
    render(){
        const [Count,setCount] =usestate(0)

        shouldComponentUpdate(nextprops,nextstate)={
            
                 
        }
        return(
            <div>
                <h1>{usestate}</h1>
                <button onclick={(this.state.count=this.state.count+1)}>increment</button>
            </div>
            

        )
    }
}