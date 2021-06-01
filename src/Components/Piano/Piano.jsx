import React, { Fragment, useState, useEffect } from "react"
import Button from "react-bootstrap/Button"
import ButtonGroup from "react-bootstrap/ButtonGroup"
import "bootstrap/dist/css/bootstrap.min.css"
import { Key } from "../Key/Key"
import "./Piano.css"

/**
 * TODO:
 * handle same keys in series
 *
 * @param {*} keys
 */
export const Piano = ({ keys }) => {
	const [keyPressed, setKeyPressed] = useState([])
	const [keyState, setKeyState] = useState(keys)
	const [replay, setReplay] = useState(false)
	const [replayId, setReplayId] = useState(0)
	const [validNotes, setValidNotes] = useState([])

	useEffect(() => {
		const notes = keys.map((key) => {
			return key.note
		})

		setValidNotes(notes)
	}, [])

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

	const handleReset = () => {
		setKeyPressed([])
	}

	const handleSubmit = (event) => {
		const series = event.target[0].value.split(",")
		console.log("series", series)
		setKeyPressed(series)
		setReplay(true)
		event.preventDefault()
	}

	const getInputNote = (input) => {
		let typedNote = input[input.length - 1].toUpperCase()
		if (validNotes.includes(typedNote)) return typedNote
		else return null
	}

	/**
	 * handles adding notes to playlist.
	 * TODO: handle removing notes
	 * @param {event} e 
	 */
	const handleChange = (e) => {
		if (e.target.value) {
			const newNote = getInputNote(e.target.value)
			if (newNote) {
				const newInputKeys = e.target.value
					.toUpperCase()
					.slice(0, -1)
					.split(",")
				newInputKeys.push(newNote)
				setKeyPressed(newInputKeys)
			}
		}
		else{
			handleReset()
		}
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
			<ButtonGroup>
				<Button className="m-2" onClick={handleReset}>
					Reset
				</Button>
			</ButtonGroup>

			<form onSubmit={handleSubmit}>
				<label>
					<input
						type="text"
						name="Input"
						value={keyPressed}
						onChange={handleChange}
					/>
				</label>
				<input type="submit" value="Play" />
			</form>
		</div>
	)
}
