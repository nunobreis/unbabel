import {
  LOAD_TRANSCRIPTIONS_SUCCESS,
  LOAD_TRANSCRIPTIONS_FAILED
} from '../types/index'

const initialState = {}

export default function transcriptionsReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_TRANSCRIPTIONS_SUCCESS:
      return {
        ...state,
        messages: [...action.transcriptions]
      }
    case LOAD_TRANSCRIPTIONS_FAILED:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}
