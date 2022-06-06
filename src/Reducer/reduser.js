
export const initialState = {
    category:[],
}
export const reducer = ( state= initialState,action) => {
    switch (action.type){
        case "UPLOAD_CATEGORY" :{
            return{...state,category: action.payload}
        }
        default:
            return state
    }
}

export class UPLOAD_CATEGORY {
}