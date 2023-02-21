export const ADD_FAVORITE = 'ADD_FAVORITE'
export const DELETE_FAVORITE = 'DELETE_FAVORITE'

export function addFavorite (char){
    return{
        type: ADD_FAVORITE,
        payload: char
    }
}

export function deleteFavorite (id){
    return{
        type: DELETE_FAVORITE,
        payload: id
    }
}