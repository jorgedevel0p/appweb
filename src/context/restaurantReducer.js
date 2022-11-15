import {
  GET_MESAS_LOADING,
  GET_MESAS_SUCCESS,
  GET_MESAS_ERROR,
  GET_RESERVAS_SUCCESS,
} from './types'

export default (state, action) => {
  switch (action.type) {

    case GET_MESAS_LOADING: {
      return {
        ...state,
        mesas: {
          ...state.mesas,
          fetchingStatus: {
            loading: true,
            success: false,
            error: false,
            errorInfo: null
          }
        }
      }
    }

    case GET_MESAS_SUCCESS: {
      return {
        ...state,
        mesas: {
          ...state.mesas,
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

    case GET_MESAS_ERROR: {
      return {
        ...state,
        mesas: {
          ...state.mesas,
          fetchingStatus: {
            loading: false,
            success: false,
            error: true,
            errorInfo: null
          }
        }
      }
    }

    case GET_RESERVAS_SUCCESS: {
      return {
        ...state,
        reservas: {
          ...state.reservas,
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