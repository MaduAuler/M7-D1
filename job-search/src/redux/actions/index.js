export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'
export const GET_RESULTS = 'GET_RESULTS'
export const REMOVE_COMPANY = 'REMOVE_COMPANY'

export const addToFavoritesAction = (company) => ({

  type: ADD_TO_FAVORITES,
  payload: company,
 
})

export const removeAction = (index) => ({
  type: REMOVE_COMPANY,
  payload: index,
})

export const getResultsAction = (search) => {
  return async (dispatch, getState) => {
    try {
      let resp = await fetch(
        `https://strive-jobs-api.herokuapp.com/jobs?search=${search}&limit=10`
      )
      if (resp.ok) {
        let results = await resp.json()

        dispatch({
          type: GET_RESULTS,
          payload: results,
        })

      } else {
        console.log('error')
      }
    } catch (error) {
      console.log(error) 
    }
  }
}