import React from 'react'
import { useState } from 'react'
const Fun = () => {
    const [run,setRun]=useState("anubhav")  
    const [sun,setSun]=useState("akshit")
    const get=()=>{

if(run=="anubhav"&&sun=="akshit"){
    return setRun("suraj") ,
    setSun("sid")
}
if(run=="suraj"&&sun=="sid"){
    return setRun("sourav"),
    setSun("div")
}
else{
    return setRun("anubhav"),
    setSun ("akshit")
}

    }
         return (
    <>
      <h1>{run}</h1>
      <h2>{sun}</h2>
      <button onClick={get}>fuck</button>
    </>
  )
}

export default Fun
