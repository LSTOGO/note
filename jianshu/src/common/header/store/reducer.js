import * as constants from './constants';
import {fromJS} from 'immutable';

//immutable库
//immutable对象
const defaultState = fromJS({
  focused: false,
  list: [],
  mouseIn: false,
  page: 1,
  totalPage: 1
});

export default (state = defaultState,action) => {
  switch(action.type){
    //immutable对象的set方法，会结合之前immutable对象的值和设置的值
    //返回一个全新的对象
    case constants.SEARCH_FOCUS: return state.set('focused',true);
    case constants.SEARCH_BLUR: return state.set('focused',false);
    case constants.GET_LIST: return state.merge({
      list: action.data,
      totalPage: action.totalPage
    })
    case constants.MOUSE_ENTER: return state.set('mouseIn',true);
    case constants.MOUSE_LEAVE: return state.set('mouseIn',false);
    case constants.CHANGE_PAGE: return state.set('page',action.page);
    default: return state;
  }
}