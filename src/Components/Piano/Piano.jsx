import userEvent from "@testing-library/user-event"
import React, { Fragment, useState, useEffect, useRef } from "react"
import Button from "react-bootstrap/Button"
import { Key } from "../Key/Key"
import "./Piano.css"

/**
 * TODO:
 * handle same keys in series
 * style buttons
 * handle long press
 *
 * @param {*} keys
 */
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

	/**
	 * replay of the pressed keys from id in keyPressed array
	 * @param {*} id
	 */
	const nextKey = (id) => {
		// set previous played key back to white
		let prevNote
		if (id > 0) {
			prevNote = keyPressed[id - 1]
			changeKeyColor(prevNote, "white")
		}

		if (id === keyPressed.length) {
			setReplayId(0)
			setReplay(false)
		} else {
			const note = keyPressed[id]
			changeKeyColor(note, "red")
			setReplayId(id + 1)
		}
	}

	const changeKeyColor = (note, color) => {
		let keys = [...keyState]
		let key = keys.find((x) => x.note === note)
		key.backGround = color
		setKeyState(keys)
	}

	const handleClick = (note) => {
		setKeyPressed([...keyPressed, note])
		changeKeyColor(note, "green")
	}

	const handleRelease = (note) => {
		changeKeyColor(note, "white")
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
								onMouseDown={() => handleClick(note)}
								onMouseUp={() => handleRelease(note)}
								backGround={backGround}
							></Key>
						</Fragment>
					)
				})}
			</div>
			<div>
				<button variant="primary" onClick={handleReplay}>
					Replay
				</button>{" "}
				<button variant="primary" onClick={handleReset}>
					Reset
				</button>
			</div>
			<div>{keyPressed}</div>
		</div>
	)
}
