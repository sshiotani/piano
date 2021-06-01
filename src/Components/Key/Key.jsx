import React, { useState } from "react"
import "./Key.css"

export const Key = ({onClick,note,backGround}) => {
	const [key, setKey] = useState("white")

	const start = () => {
        setKey("blue")
        setTimeout(() => {
            setKey("white")
        }, 1000);
	}


	const stop = () => {
		setKey("white")
	}

	return (
		<div onClick={()=>onClick(note)} className={"key"} style={{backgroundColor:backGround}} onMouseDown={start} onMouseUp={stop}>
			<div className="note">{note}</div>
		</div>
	)
}
