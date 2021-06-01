import React, { useState, useEffect } from "react"
import "./Key.css"

export const Key = ({onClick,note,backGround}) => {
	const [key, setKey] = useState("white")

	useEffect(() => {
		setKey(backGround)
	},[backGround])

	const start = () => {
        setTimeout(() => {
            setKey("white")
        }, 400);
	}

	return (
		<div onClick={()=>onClick(note)} className={"key"} style={{backgroundColor:key}} onMouseDown={start} >
			<div className="note">{note}</div>
		</div>
	)
}
