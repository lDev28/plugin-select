import './App.css'
import Select from './components/UI/Select'

function App() {
	const selectConfig = {
		placeholder: 'Check your FrameWork',
		selectedId: 1,
		options: [
			{ id: 1, value: 'react', label: 'React JS' },
			{ id: 2, value: 'vue', label: 'Vue JS' },
			{ id: 3, value: 'angular', label: 'Angular JS' },
			{ id: 4, value: 'svelte', label: 'Svelte JS' },
			{ id: 5, value: 'next', label: 'Next JS' }
		],
		onSelect(item) {
			console.log('selected option ', item)
		}
	}

	return (
		<>
			<div className='wrap'>
				<Select config={selectConfig} />
			</div>
		</>
	)
}

export default App
