
import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import favoritesReducer from '../reducers/favorites'
import resultsReducer from '../reducers/results'

import thunk from 'redux-thunk'

const composeFunctionThatAlwaysWorks =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export const initialState = {
  favorites: {
    companys: [
     
    ],
  },

  results:{
      stock: []
  }
}

const bigReducer = combineReducers({
  favorites: favoritesReducer,
  results: resultsReducer,
 
})

const configureStore = createStore(
  bigReducer,
  initialState,
  composeFunctionThatAlwaysWorks(applyMiddleware(thunk))
)

export default configureStore