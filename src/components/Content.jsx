import React, { useEffect, useState } from 'react'
import Note from './Note'

const Content = () => {
	const [note, setNote] = useState('')
	const [notes, setNotes] = useState(
		JSON.parse(localStorage.getItem('notes')) || []
	)

	useEffect(() => {
		localStorage.setItem('notes', JSON.stringify(notes))
	}, [notes])

	const handleSubmit = e => {
		e.preventDefault()
		if (note) {
			setNotes(prev => [
				...prev,
				{
					name: note,
					id: prev.length + 1,
					date: `${new Date().getDate()}/${
						new Date().getMonth() + 1
					}/${new Date().getFullYear()}`
				}
			])
			setNote('')
		}
	}
	return (
		<section>
			<div className="container w-4/5 mx-auto">
				<form onSubmit={handleSubmit}>
					<input
						className="w-full border-2 border-indigo-500 py-2 px-4 rounded-3xl outline-none text-sm text-indigo-600"
						placeholder="Add Note"
						value={note}
						onChange={e => setNote(e.target.value)}
					/>
				</form>
				<div className="flex mt-8 gap-5 pb-5 flex-wrap h-full">
					{notes.map(note => (
						<Note
							{...note}
							key={note.id}
							removeNote={id =>
								setNotes(prev => prev.filter(note => note.id !== id))
							}
						/>
					))}
				</div>
			</div>
		</section>
	)
}

export default Content
