import "./App.css"
import React, { useState } from "react"
import { Piano } from "./Components"

export const App = () => {
	const [keyPressed, setKeyPressed] = useState([])

	const keys = ["C", "D", "E", "F", "G", "A", "B"]

	// Use click event to update history

	return (
		<div className="App">
			<div className="Button-Group">
				return (<Piano keys={keys} ></Piano>)
			</div>
		</div>
	)
}

export default App
