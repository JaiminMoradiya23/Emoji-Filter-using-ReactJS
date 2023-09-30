import React, { useState } from 'react';

const Card = ({ emoji }) => {
	const [isCopyClicked, setIsCopyClicked] = useState(false);

	const handleCopy = () => {
		navigator.clipboard.writeText(emoji.symbol);
		setIsCopyClicked(true);
	};

	setTimeout(() => {
		setIsCopyClicked(false);
	}, [2000]);

	return (
		<div className='card' onClick={handleCopy} title='click to copy...'>
			<button
				className={`copy_button copy_button_success ${
					isCopyClicked ? 'copy_button_clicked' : ''
				}`}
			>
				Copied!
			</button>
			<div className='emoji'>{emoji.symbol}</div>
			<div>{emoji.title}</div>
		</div>
	);
};

export default Card;
