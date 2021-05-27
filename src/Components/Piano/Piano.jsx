import React, { Fragment, useState } from "react"
import { Key } from "../Key/Key"
import "./Piano.css"

export const Piano = (props) => {
    

	return (
		<Fragment>
			<div className="piano">
				{props.keys.map((key) => {
					return (
						<Key
							note={key}
						></Key>
					)
				})}
			</div>
		</Fragment>
	)
}
