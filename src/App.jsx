import "./App.css"
import React from "react"
import { Piano } from "./Components"

export const App = () => {

	const keys = ["C", "D", "E", "F", "G", "A", "B"]

	return (
		<div className="App">
			<div className="App-header">Spencer Shiotani Keyboard</div>
			<div className="Button-Group">
				<Piano keys={keys}></Piano>
			</div>
		</div>
	)
}

export default App
