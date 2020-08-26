import React from 'react';
import './index.scss';

const Card = ({ title, content, sign }) => {
	return (
		<div className='card'>
			<div className='card__content'>
				{content}
				<span className='sign'>{sign}</span>
			</div>
			<div className='card__title'>{title}</div>
		</div>
	);
};

export default Card;
