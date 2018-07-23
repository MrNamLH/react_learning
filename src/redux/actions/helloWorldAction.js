import { ActionTypes } from '../../common/constants';

export default function setTechnology(tech) {
	return {
		type: ActionTypes.SET_TECHNOLOGY,
		tech,
	};
}
