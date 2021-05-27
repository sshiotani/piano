import React, { useState } from "react"
import "./Key.css"

export const Key = (props) => {
	const [key, setKey] = useState("white")

	const start = () => {
        setKey("blue")
	}

	const stop = () => {
		setKey("white")
	}

	return (
		<div className={"key"} style={{backgroundColor:key}} onMouseDown={start} onMouseUp={stop}>
			<div className="note">{props.note}</div>
		</div>
	)
}
