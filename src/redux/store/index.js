import { createStore } from 'redux';
import reducers from '../reducers';

const initialState = { tech: 'Redux' };
const store = createStore(reducers, initialState);

export default store;
