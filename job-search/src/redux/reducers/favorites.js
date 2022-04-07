import { ADD_TO_FAVORITES, REMOVE_COMPANY } from '../actions'
import { initialState } from '../store'

const favoritesReducer = (state = initialState.favorites, action) => {
  switch (action.type) {
 
    case ADD_TO_FAVORITES:
     
        return {
          ...state,
         
            companys: [...state.companys, action.payload],
        }
  
    case REMOVE_COMPANY:
          return {
            ...state,
            companys: state.companys.filter((company, i) => i !== action.payload),
           
          }

    default:
      return state
  }
}

export default favoritesReducer