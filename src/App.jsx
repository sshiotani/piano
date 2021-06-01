import "./App.css"
import React from "react"
import { Piano } from "./Components"

export const App = () => {
	const keys = [
		{ id: 1, note: "C", backGround: "white" },
		{ id: 1, note: "D", backGround: "white" },
		{ id: 1, note: "E", backGround: "white" },
		{ id: 1, note: "F", backGround: "white" },
		{ id: 1, note: "G", backGround: "white" },
		{ id: 1, note: "A", backGround: "white" },
		{ id: 1, note: "B", backGround: "white" },
	]

	return (
		<div className="App">
			<div className="App-header">Spencer Shiotani Keyboard</div>
			<div className="Key-Group">
				<Piano keys={keys}></Piano>
			</div>
		</div>
	)
}

export default App
