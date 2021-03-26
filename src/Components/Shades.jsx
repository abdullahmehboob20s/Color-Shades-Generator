import React,{useState , useEffect,useRef} from "react"
import values from 'values.js'
import isColor from 'is-color'
import Shade from "./Shade"
import sound from "../Sounds/sound1.mp3"


let Shades = ({color}) => {
    let [shades,setshades] = useState([])
    let [check,setcheck] = useState(false)
    let audioRef = useRef()
     
    useEffect(() => {
        if(isColor(color)){
            generateShades()
            setcheck(false)
        }
        else{
            setcheck(true)
        }
    },[color])
    
    let generateShades = ()=>{
        let shades123 = new values(color).shades(1)
        setshades(shades123)
    }

    let oncopycolor = () => {
        audioRef.current.play()
    }

   
    
    return(
        <div className="Shades">
             <audio ref={audioRef} src={sound}  />
            {shades.map((item , index)=> {
                return <Shade key={index} item={item} color={color} oncopycolor={oncopycolor} />
             } 
            )}
            {/* <div className="noColor"><h1>there is no color</h1></div> */}
            
           
            
        </div>
    )
}

export default Shades