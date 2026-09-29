import { useState } from "react"
function App() {
 const[count,setCount]=useState(0);

  return (
    <>
    <h1>hiii shaik </h1>
    <button onClick={()=>setCount(count+1)}>inc</button>
    </>
  )
}

export default App
