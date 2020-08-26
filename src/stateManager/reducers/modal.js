import * as actionTypes from '../actions/modal';

const initialState = {
	show: false,
};
const modal = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.TOGGLE_MODAL:
			return { show: !state.show };

		default:
			return state;
	}
};
export default modal;
