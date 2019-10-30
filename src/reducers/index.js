import {combineReducers} from 'redux';
import figure from './figure';
import size from './size';
import uuid from './uuid';
import number from './number';
import scene from './scene';

const reducer = combineReducers({
  figure,
  size,
  uuid,
  number,
  scene
});

export default reducer;
