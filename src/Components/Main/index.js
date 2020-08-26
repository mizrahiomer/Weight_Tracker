import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { fetchWeights } from '../../stateManager/actions/user';
import { toggleModal } from '../../stateManager/actions/modal';
import { removeDuplicates } from '../../utils';
import Statistics from '../Statistics';
import Info from '../Info';
import Backdrop from '../hoc/Backdrop';
import Modal from '../hoc/Modal';
import './index.scss';

const Main = props => {
	const { weights, fetchWeights } = props;
	const [data, setData] = useState();
	const [dropdownValue, setDropdownValue] = useState();
	const [filteredData, setFilteredData] = useState();
	const [endDate, setEndDate] = useState(new Date());
	const [startDate, setStartDate] = useState(new Date().setDate(endDate.getDate() - 30));
	const [open, setOpen] = useState(false);
	const filterOptions = [7, 30, 0];

	useEffect(() => {
		async function fetchData() {
			await fetchWeights();
		}
		!weights && fetchData();
	}, []);

	useEffect(() => {
		setData(weights);
		setFilteredData(weights);
	}, [weights]);

	const toggle = () => setOpen(!open);

	const filterDataByNum = days => {
		const dataCopy = [...data];
		if (!days) {
			setFilteredData(data);
		} else {
			const date = new Date();
			days && date.setDate(date.getDate() - days);
			const filteredData = dataCopy.filter(item => item.date >= +date);
			setFilteredData(filteredData);
		}
	};

	const filterDataByDates = () => {
		const dataCopy = [...data];
		const filteredData = dataCopy.filter(item => item.date >= +startDate && item.date <= +endDate);
		setFilteredData(filteredData);
	};

	const filterByMonth = e => {
		const month = e.currentTarget.textContent;
		const dataCopy = [...data];
		const filteredData = dataCopy.filter(item => moment(item.date).format('MMM') === month);
		setFilteredData(filteredData);
		setDropdownValue(e.currentTarget.textContent);
	};

	const handleClick = () => {
		props.toggleModal();
	};

	return data ? (
		<>
			<div className='add-btn'>
				<i onClick={handleClick} className='fas fa-plus-circle'></i>
			</div>
			{filteredData.length > 0 && (
				<div className='date-filter'>
					<DatePicker
						className='date'
						selected={startDate}
						onChange={date => setStartDate(date)}
						selectsStart
						startDate={startDate}
						endDate={endDate}
						dateFormat='dd/MM/yyyy'
					/>
					<DatePicker
						className='date'
						selected={endDate}
						onChange={date => setEndDate(date)}
						selectsEnd
						startDate={startDate}
						endDate={endDate}
						dateFormat='dd/MM/yyyy'
					/>
					<div onClick={filterDataByDates} className='filter__btn'>
						Submit
					</div>
				</div>
			)}
			<Statistics data={filteredData} />
			{filteredData.length > 0 && (
				<>
					<div className='filter'>
						{filterOptions.map(num => {
							return (
								<div key={num} onClick={() => filterDataByNum(num)} className='filter__btn'>
									{num === 0 ? 'All' : `Last ${num} days`}
								</div>
							);
						})}
						<ButtonDropdown isOpen={open} toggle={toggle}>
							<DropdownToggle caret>{dropdownValue || 'Month'}</DropdownToggle>
							<DropdownMenu>
								{}
								{removeDuplicates(data.map(item => moment(item.date).format('MMM'))).map(month => (
									<DropdownItem key={month}>
										<div onClick={filterByMonth}>{month}</div>
									</DropdownItem>
								))}
							</DropdownMenu>
						</ButtonDropdown>
					</div>
				</>
			)}

			{data.length > 0 && <Info />}
			<Modal type={'add'} title={'add weight'} info={'Please enter your weight'} />
		</>
	) : (
		<Backdrop>
			<ClipLoader size={150}></ClipLoader>
		</Backdrop>
	);
};

const mapStateToProps = state => {
	return {
		weights: state.user.weights,
	};
};
export default connect(mapStateToProps, { fetchWeights, toggleModal })(Main);
