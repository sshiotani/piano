import React from "react"
import {Key} from "../Key/Key"
import "./Piano.css"


export const Piano = (props) => {
    return(
        <div className="piano">
            {props.keys.map((key) => {
					return (
                        <Key key={key}></Key>
					)
				})}
            
        </div>
        
    )
}