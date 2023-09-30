import React from 'react';

const SearchInput = ({ setFilteredEmojies }) => {
	const searchInputValue = (e) => {
		setFilteredEmojies(e.target.value);
	};

	return (
		<div>
			<input
				type='text'
				name='search input'
				id='search-input'
				className='search_emoji'
				onChange={searchInputValue}
			/>
		</div>
	);
};

export default SearchInput;
