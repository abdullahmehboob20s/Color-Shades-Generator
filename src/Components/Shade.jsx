import React ,{useState,useEffect} from "react"
import {CopyToClipboard} from 'react-copy-to-clipboard';
import "../App.css"


let Shade = ({item,oncopycolor}) => {
    let [copied,setcopied] = useState(false)
    useEffect(()=>{
        let interval;
        if(copied === true){
            interval = setInterval(() => {
                setcopied(false)
            }, 1000);

            return () => {
                clearInterval(interval)
            }
        }
    },[copied])
    let copyingColor = () => {
        setcopied(true)
        if(copied === false){
            oncopycolor()
        }
    }
    return(
        <CopyToClipboard text={item.hexString()} onCopy={copyingColor}>
        <div style={{backgroundColor : item.hexString() , cursor : "pointer"}}  className="item">
            {copied ?(  
            <span className="copied">copied</span>
            )
            :( 
            <span>{item.hexString()}</span>
            )}
        </div>
    </CopyToClipboard>
    )
}

export default Shade