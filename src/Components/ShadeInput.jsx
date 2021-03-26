import React from "react"

let ShadeInput = (props) => {
    return(
        <div className="ShadeInput">
            <input type="text" value={props.color} onChange={(e) => props.oninputchange(e)} placeholder="Search Color" className="ShadeSearch" name="" id=""/>
            <div>
                <button className="nextColor" onClick={() => props.nextColor()}>next Color</button>
            </div>
        </div>
    )
}

export default ShadeInput