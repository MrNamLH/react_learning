import { ActionTypes } from '../../common/constants';

const initialState = { tech: 'Redux' };
export default (state = initialState, action) => {
	switch (action.type) {
		case ActionTypes.SET_TECHNOLOGY:
			return {
				...state,
				tech: action.tech,
			};
		default:
			return state;
	}
};
