import React from 'react';
import Emoji from './Components/Emoji';
import SearchInput from './Components/SearchInput';

function App() {
	return (
		<div className='App'>
			<h2>Emoji filter using ReactJs</h2>
			<SearchInput />
			<Emoji />
		</div>
	);
}

export default App;
