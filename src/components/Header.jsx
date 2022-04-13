import React, { useLayoutEffect, useState } from 'react'
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md'
import { container } from './../index'

const Header = () => {
	const [dark, setDark] = useState(
		JSON.parse(localStorage.getItem('mode')) || false
	)

	useLayoutEffect(() => {
		localStorage.setItem('mode', dark)
		if (JSON.parse(localStorage.getItem('mode'))) {
			container.classList.remove('light')
			container.classList.add('dark')
		} else {
			container.classList.remove('dark')
			container.classList.add('light')
		}
	}, [dark])

	return (
		<header className="py-5 mb-5">
			<div className="container w-4/5 mx-auto flex justify-between items-center">
				<h1 className="font-bold text-2xl">
					<span className="text-indigo-600">React</span> Notes
				</h1>
				<button
					className="font-semibold text-sm border-2 border-indigo-600 py-1 px-2 rounded-2xl hover:bg-indigo-600 hover:text-white ease duration-300"
					onClick={() => {
						localStorage.setItem('mode', dark)
						setDark(!dark)
					}}
				>
					{dark ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
				</button>
			</div>
		</header>
	)
}

export default Header
