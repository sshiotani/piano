import "./App.css"
import React, { useState } from "react"
import {Piano} from "./Components"

export const App = () => {
	const [history, setHistory] = useState([])
	const [color, setColor] = useState("secondary")

	const keys = ["C", "D", "E", "F", "G", "A", "B"]

	const handleClick = (e) => {
		//const newHistory = history.push(e)
		setColor("primary")
		setTimeout(() => {
			setColor("secondary")
		}, 500)
		//console.log("e", e, newHistory)
	}

	return (
		<div className="App">
			<div className="Button-Group">
					return (
						<Piano keys={keys}></Piano>
					)			
			</div>
		</div>
	)
}

export default App
