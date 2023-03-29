import axios from 'axios'

export const ADD_FAVORITE = 'ADD_FAVORITE'
export const DELETE_FAVORITE = 'DELETE_FAVORITE'
export const GET_FAVALL = 'GET_FAVALL'

export function addFavorite(char){
    console.log(char)
    return async function(dispatch) {
      try {
        await axios.post("http://localhost:3001/rickandmorty/fav", char);
        return dispatch({
          type: ADD_FAVORITE,
          payload: char
        });
      } catch (err) {
        console.log(err.message);
      }
    }
  }
  
  
  

export function deleteFavorite (id){
  try{
    return async function (dispatch){
        await axios.delete(`http://localhost:3001/rickandmorty/fav/${id}`)
        return dispatch({
            type: DELETE_FAVORITE,
            payload: id
        })
    }
}catch (err) {
  console.log(err.message);
}
}

export function getFavorite (){
  return async function(dispatch) {
    try {
      const response = await axios.get("http://localhost:3001/rickandmorty/fav");
      const data = response.data;
      console.log(data)
      return dispatch({
        type: GET_FAVALL,
        payload: data
      });
    } catch (err) {
      console.log(err.message);
    }
  }
}