import React, { Fragment, useState } from "react"
import { Key } from "../Key/Key"
import "./Piano.css"

export const Piano = ({ keys }) => {
	const [keyPressed, setKeyPressed] = useState([])

	const handleClick = (key) => {
		setKeyPressed([...keyPressed, key])
	}

	return (
		<div>
			<div className="piano">
				{keys.map((key) => {
					return (
						<Fragment>
							<Key
								key={key}
								note={key}
								onClick={() => handleClick(key)}
							></Key>
						</Fragment>
					)
				})}
			</div>
			<div>{keyPressed}</div>
		</div>
	)
}
