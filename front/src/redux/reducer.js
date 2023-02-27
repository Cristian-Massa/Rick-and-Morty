import { ADD_FAVORITE, DELETE_FAVORITE } from "./actions";

const initialState = {
    myFavorites: []
}

const rootReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_FAVORITE:
            return{
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
        case DELETE_FAVORITE:
            const filter = state.myFavorites.filter(char => char.id !== action.payload);
            return{
                myFavorites: filter
            }
    }

};

export default rootReducer;