import React from 'react';
import { connect } from 'react-redux';
import Card from '../Card';
import './index.scss';

const Info = ({ currWeight, progress, longestSuccessStreak }) => {
	return (
		<div className='info'>
			<Card title={'current weight'} content={currWeight} sign={'Kg'} />

			<Card title={'progress done'} content={progress} sign={'Kg'} />
			<Card
				title={'Success Streak'}
				content={longestSuccessStreak}
				sign={longestSuccessStreak === 1 ? 'Day' : 'Days'}
			/>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		currWeight: state.user.currentWeight,
		progress: state.user.progress,
		longestSuccessStreak: state.user.longestSuccessStreak,
	};
};

export default connect(mapStateToProps)(Info);
