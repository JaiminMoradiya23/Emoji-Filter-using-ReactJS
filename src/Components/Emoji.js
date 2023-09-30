import React from 'react';
import { emojiList } from '../mock/emojiList';
import Card from './Card';

const Emoji = ({ filteredEmojies }) => {
	return (
		<div className='container'>
			<div className='emoji_wrapper'>
				{emojiList
					.filter(
						(items) =>
							items.keywords.includes(filteredEmojies) ||
							items.title.includes(filteredEmojies)
					)
					.map((item) => {
						return <Card emoji={item} key={item.symbol} />;
					})}
			</div>
		</div>
	);
};

export default Emoji;
