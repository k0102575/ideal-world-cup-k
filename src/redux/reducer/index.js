import { combineReducers } from 'redux';
import testReducer from 'redux/reducer/testReducer';

export default combineReducers({ test: testReducer });
