import {
    GET_USERS_LOADING,
    GET_USERS_SUCCESS,
    GET_USERS_ERROR,
    GET_PLATOS_LOADING,
    GET_PLATOS_SUCCESS,
    GET_PLATOS_ERROR,

} from './types'

export default (state, action) => {
    switch(action.type){

        case GET_USERS_LOADING: {
            return {
                ...state,
                users: {
                    ...state.users,
                    fetchingStatus: {
                        loading: true,
                        success: false,
                        error: false,
                        errorInfo: null
                    }
                }
            }
        }

        case GET_PLATOS_LOADING: {
            return {
                ...state,
                platos: {
                    ...state.platos,
                    fetchingStatus: {
                        loading: true,
                        success: false,
                        error: false,
                        errorInfo: null
                    }
                }
            }
        }

        case GET_PLATOS_SUCCESS: {
            return {
                ...state,
                platos: {
                    ...state.platos,
                    data: action.payload,
                    fetchingStatus: {
                        loading: false,
                        success: true,
                        error: false,
                        errorInfo: null
                    }
                }
            }
        }



    }
}