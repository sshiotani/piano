import React, { useState, useEffect } from "react"
import "./Key.css"

export const Key = ({onMouseDown,onMouseUp,note,backGround}) => {

	return (
		<div className={"key"} style={{backgroundColor:backGround}} onMouseDown={()=>onMouseDown(note)} onMouseUp={()=>onMouseUp(note)} onMouseLeave={()=>onMouseUp(note)}>
			<div className="note">{note}</div>
		</div>
	)
}
