import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { ClipLoader } from 'react-spinners';
import { fetchWeights } from '../../stateManager/actions/user';
import Backdrop from '../hoc/Backdrop';
import Row from './Row';
import './index.scss';

const History = ({ weights, fetchWeights }) => {
	useEffect(() => {
		async function fetchData() {
			await fetchWeights();
		}
		!weights && fetchData();
	}, []);

	const renderRows = () => {
		const reverseWeights = [...weights].reverse();
		return reverseWeights.map(weight => {
			return <Row key={weight.id} weight={weight.weight} id={weight.id} date={weight.date} />;
		});
	};

	return weights ? (
		<div className='table'>{weights.length > 0 ? renderRows() : <div>No Data Found</div>}</div>
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

export default connect(mapStateToProps, { fetchWeights })(History);
