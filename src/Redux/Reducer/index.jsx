import {combineReducers} from 'redux'
import Reducer from './Reducer'

const rootReducer = combineReducers({
  Reducer1: Reducer,
})

export default rootReducer