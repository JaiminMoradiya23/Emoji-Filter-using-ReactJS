import React, { useState } from 'react';
import Emoji from './Components/Emoji';
import SearchInput from './Components/SearchInput';

function App() {
	const [filteredEmojies, setFilteredEmojies] = useState([]);

	return (
		<div className='App'>
			<h2>Emoji filter using ReactJs</h2>
			<SearchInput setFilteredEmojies={setFilteredEmojies} />
			<Emoji filteredEmojies={filteredEmojies} />
		</div>
	);
}

export default App;
