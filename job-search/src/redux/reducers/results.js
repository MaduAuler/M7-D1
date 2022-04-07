import { GET_RESULTS} from '../actions'
import { initialState } from '../store'

const resultsReducer = (state = initialState.results, action) => {
  switch (action.type) {
 
    case GET_RESULTS:
        return {
          ...state,
          stock: action.payload,
        }
  

    default:
      return state
  }
}

export default resultsReducer