import { db } from '../../firebase';

export const ADD_WEIGHT = 'ADD_WEIGHT';
export const REMOVE_WEIGHT = 'REMOVE_WEIGHT';
export const FETCH_WEIGHTS = 'FETCH_WEIGHTS';

export const fetchWeights = () => async dispatch => {
	await db.on('value', snapshot => {
		dispatch({
			type: FETCH_WEIGHTS,
			payload: snapshot.val(),
		});
	});
};

export const addWeight = weightObj => async dispatch => {
	await db.child('weights').push().set(weightObj);

	dispatch(fetchWeights());
};

export const removeWeight = weightId => async dispatch => {
	await db.child('weights').child(weightId).remove();

	dispatch(fetchWeights());
};

export const editWeight = (weightId, weightObj) => async dispatch => {
	await db.child('weights').child(weightId).set(weightObj);

	dispatch(fetchWeights());
};
