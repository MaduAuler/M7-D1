export const ADD_TO_FAVORITES = 'ADD_TO_FAVORITES'


export const addToFavoritesAction = (company) => ({

  type: ADD_TO_FAVORITES,
  payload: company,
 
})
