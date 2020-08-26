import React, { useState } from 'react';
import { connect } from 'react-redux';
import DatePicker from 'react-datepicker';
import { addWeight } from '../../../../stateManager/actions/user';
import { toggleModal } from '../../../../stateManager/actions/modal';
import './index.scss';

const Add = props => {
	const [weight, setWeight] = useState('');
	const [date, setDate] = useState(+new Date());
	const { addWeight, toggleModal } = props;

	const handleInputChange = e => {
		const test = /^[0-9\b]+$/.test(e.target.value);
		(test || e.target.value === '') && setWeight(e.target.value);
	};

	const handleDateChange = date => {
		setDate(+date);
	};

	const handleSubmit = async e => {
		e.preventDefault();

		await addWeight({ weight, date });
		toggleModal();
	};

	return (
		<form className='add' onSubmit={handleSubmit}>
			<input
				className='add__input'
				required
				autoFocus
				placeholder='Weight'
				value={weight}
				onChange={handleInputChange}
			></input>
			<DatePicker
				dateFormat='dd/MM/yyyy'
				selected={date}
				className='add__input'
				onChange={date => handleDateChange(date)}
			/>
			<button disabled={weight.trim().length === 0} className='add__btn'>
				done
			</button>
		</form>
	);
};

export default connect(null, { addWeight, toggleModal })(Add);
