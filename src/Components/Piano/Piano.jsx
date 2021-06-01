import React, { Fragment, useState, useEffect } from "react"
import { Key } from "../Key/Key"
import "./Piano.css"

export const Piano = ({ keys }) => {
	const [keyPressed, setKeyPressed] = useState([])
	const [keyState, setKeyState] = useState(keys)
	const [replay, setReplay] = useState(false)
	const [replayId, setReplayId] = useState(0)

	useEffect(() => {
		if (replay === true) {
			const play = () => {
				nextKey(replayId)
			}

			const interval = setInterval(play, 1000)
			return () => {
				clearInterval(interval)
			}
		}
	})

	const nextKey = (id) => {
		if (id > 0) {
			const prevNote = keyPressed[id - 1]
			releaseKey(prevNote)
		}

		if (id === keyPressed.length) {
			setReplayId(0)
			setReplay(false)
		} else {
			const note = keyPressed[id]
			pressKey(note)
			setReplayId(id + 1)
		}
	}

	const pressKey = (note) => {
		let key = keyState.find((x) => x.note === note)
		key.backGround = "blue"
		setKeyState(keyState)
	}

	const releaseKey = (note) => {
		let key = keyState.find((x) => x.note === note)
		key.backGround = "white"
		setKeyState(keyState)
	}

	const handleClick = (note) => {
		setKeyPressed([...keyPressed, note])

		pressKey(note)
		setTimeout(() => {
			releaseKey(note)
		}, 1000)	
	}

	const handleReplay = () => {
		setReplay(true)
	}

	const handleReset = () => {
		setKeyPressed([])
	}

	return (
		<div>
			<div className="piano">
				{keyState.map(({ id, note, backGround }) => {
					return (
						<Fragment>
							<Key
								key={id}
								note={note}
								onClick={() => handleClick(note)}
								backGround={backGround}
							></Key>
						</Fragment>
					)
				})}
			</div>
			<div>
				<button onClick={handleReplay}>Replay</button>
				<button onClick={handleReset}>Reset</button>
			</div>
			<div>{keyPressed}</div>
		</div>
	)
}
