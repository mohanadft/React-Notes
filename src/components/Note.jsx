import React from 'react'
import { MdDeleteOutline } from 'react-icons/md'

const Note = ({ id, name, date, removeNote }) => {
	return (
		<div className="note bg-indigo-500 flex flex-col justify-between w-52 h-36 p-2 rounded-md text-sm font-medium">
			<p>{name}</p>
			<div className="flex justify-between">
				<p>{date}</p>
				<button onClick={() => removeNote(id)}>
					<MdDeleteOutline />
				</button>
			</div>
		</div>
	)
}

export default Note
