import moment from 'moment';
import { longestSuccessStreak } from '../../utils';
import * as actionTypes from '../actions/user';

const initialState = {
	weights: null,
	currentWeight: null,
};

const user = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.FETCH_WEIGHTS:
			let weights = [];
			if (action.payload) {
				if (action.payload.weights) {
					const fetchedWeights = action.payload.weights;

					for (let key in fetchedWeights) {
						let displayedDate = moment(fetchedWeights[key].date).format('DD MMM');
						weights.push({
							...fetchedWeights[key],
							weight: +fetchedWeights[key].weight,
							id: key,
							displayedDate,
						});
					}
				}
			}
			weights = weights.sort((a, b) => a.date - b.date);

			return {
				...state,
				weights,
				currentWeight: weights.length > 0 && weights[weights.length - 1].weight,
				progress: weights.length > 0 && weights[weights.length - 1].weight - weights[0].weight,
				longestSuccessStreak: longestSuccessStreak(weights),
			};

		default:
			return state;
	}
};
export default user;
