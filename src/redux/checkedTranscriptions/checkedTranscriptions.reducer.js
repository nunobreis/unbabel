import {
  CHECKED_TRANSCRIPTION,
  POST_TRANSCRIPTIONS_SUCCESS,
  POST_TRANSCRIPTIONS_FAILED
} from '../types/index'

const initialState = {}

export default function checkedTranscriptionsReducer(state = initialState, action) {
  switch (action.type) {
    case CHECKED_TRANSCRIPTION:
      return {
        ...state,
        [action.transcription.id]: { ...action.transcription }
      }
    case POST_TRANSCRIPTIONS_SUCCESS:
      return {
        ...state,
        response: action.response
      }
    case POST_TRANSCRIPTIONS_FAILED:
      return {
        ...state,
        error: action.error
      }
    default:
      return state
  }
}
