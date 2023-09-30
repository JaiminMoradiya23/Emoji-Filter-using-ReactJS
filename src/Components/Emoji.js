import React from 'react';
import { emojiList } from '../mock/emojiList';
import Card from './Card';

const Emoji = () => {
	return (
		<div className='container'>
			<div className='emoji_wrapper'>
				{emojiList.slice(0, 50).map((item) => {
					return <Card emoji={item} key={item.symbol} />;
				})}
			</div>
		</div>
	);
};

export default Emoji;
