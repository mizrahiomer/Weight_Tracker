import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeWeight, editWeight } from '../../../stateManager/actions/user';
import DatePicker from 'react-datepicker';
import './index.scss';

const Row = props => {
	const [weight, setWeight] = useState(props.weight);
	const [date, setDate] = useState(props.date);
	const [edit, setEdit] = useState(false);

	const handleInputChange = e => {
		!edit && setEdit(true);
		const test = /^[0-9\b]+$/.test(e.target.value);
		(test || e.target.value === '') && setWeight(e.target.value);
	};

	const handleDateChange = date => {
		!edit && setEdit(true);
		setDate(+date);
	};

	const handleDeleteClick = async () => {
		await props.removeWeight(props.id);
	};

	const handleSubmit = async () => {
		const weightObj = {
			weight,
			date: +date,
		};
		setEdit(false);
		await props.editWeight(props.id, weightObj);
	};

	return (
		<div key={weight.id} className='table__row'>
			<DatePicker
				className='input'
				dateFormat='dd/MM/yyyy'
				onChange={date => handleDateChange(date)}
				selected={date}
			/>
			<input className='input' onChange={handleInputChange} value={weight} />
			<div className='actions'>
				<i onClick={handleDeleteClick} className='fas fa-minus-circle delete'></i>
				<i disabled={!edit} onClick={handleSubmit} className='far fa-check-circle submit'></i>
			</div>
		</div>
	);
};

export default connect(null, { removeWeight, editWeight })(Row);
