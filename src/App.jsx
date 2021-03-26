import React,{useState,useEffect} from "react"
import "./App.css"
import Shades from "./Components/Shades"
import ShadeInput from "./Components/ShadeInput"
import randomcolor from "randomcolor"

let App = (props) => {
  let [color,setColor] = useState("#0000");

  useEffect(() => {
    setColor(randomcolor())
  },[])

  let nextColor = () => {
    setColor(randomcolor())        
  }


  let oninputchange = (value) => {
    setColor(value.target.value)
  }
  return(
    <div className="App">
      <ShadeInput color={color} oninputchange={oninputchange} nextColor={nextColor} />
      <Shades color={color} />
    </div>
  )
}

export default App