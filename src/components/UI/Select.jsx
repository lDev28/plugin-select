import React, { useEffect, useState } from 'react'
import './Select.scss'
import { BsChevronDown } from 'react-icons/bs'

function Select({ config }) {
	const [openSelect, setOpenSelect] = useState(false)

	const { placeholder, selectedId, options, onSelect } = config

	const select = (id) => {
		document
			.querySelectorAll('[data-type="item"]')
			.forEach((item) => item.classList.remove('selected'))
		document.querySelector(`[data-id="${id}"]`).classList.add('selected')

		onSelect ? onSelect(id) : null
	}

	useEffect(() => {
		options.map((option) => {
			if (option.id === selectedId) {
				select(option.id)
			}
		})
	}, [])

	const [text, setText] = useState(
		options.map((option) => {
			if (option.id === selectedId) {
				return option.label
			}
		}) ?? placeholder
	)

	const handleClick = (e) => {
		setOpenSelect(!openSelect)
		if (e.target.dataset.type === 'input') {
			setOpenSelect(!openSelect)
		} else if (e.target.dataset.type === 'item') {
			setText(e.target.dataset.label)
			select(e.target.dataset.id)
		} else if (e.target.dataset.type === 'backdrop') {
			setOpenSelect(!openSelect)
		}
	}

	return (
		<div className={`select ${openSelect && 'open'}`}>
			<div
				onClick={handleClick}
				className='select__backdrop'
				data-type='backdrop'
			></div>
			<div className='select__input' onClick={handleClick} data-type='input'>
				<span data-type='input'>{text}</span>
				<BsChevronDown
					data-type='input'
					className={`select__icon ${openSelect && 'up'}`}
				/>
			</div>
			<div className='select__dropdown'>
				<ul className='select__list'>
					{options.map((option) => (
						<li
							onClick={handleClick}
							key={option.id}
							data-type='item'
							data-id={option.id}
							data-value={option.value}
							data-label={option.label}
							className='select__item'
						>
							{option.label}
						</li>
					))}
				</ul>
			</div>
		</div>
	)
}

export default Select
