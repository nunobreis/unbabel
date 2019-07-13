import {
  requestTranscriptions,
  postTranscriptions
} from '../../../services/transcriptionsApi/index'

import {
  LOAD_TRANSCRIPTIONS_SUCCESS,
  LOAD_TRANSCRIPTIONS_FAILED,
  ADD_NEW_ROW,
  DELETE_ROW,
  POST_TRANSCRIPTIONS_SUCCESS,
  POST_TRANSCRIPTIONS_FAILED
} from '../types/index'

export const loadTranscriptionsSuccess = transcriptions => ({
  type: LOAD_TRANSCRIPTIONS_SUCCESS,
  transcriptions
})

export const loadTranscriptionsFailed = error => ({
  type: LOAD_TRANSCRIPTIONS_FAILED,
  error
})

// request transcriptions thunk:
export const loadTranscriptions = () => dispatch => requestTranscriptions()
  .then(({ data }) => dispatch(loadTranscriptionsSuccess(data)))
  .catch(error => dispatch(loadTranscriptionsFailed(error.message)))

export const addNewRow = defaultTranscription => ({
  type: ADD_NEW_ROW,
  defaultTranscription
})

export const deleteRow = id => ({
  type: DELETE_ROW,
  id
})

export const postTranscriptionsSuccess = response => ({
  type: POST_TRANSCRIPTIONS_SUCCESS,
  response
})

export const postTranscriptionsFailed = error => ({
  type: POST_TRANSCRIPTIONS_FAILED,
  error
})

// post transcriptions thunk:
export const uploadTranscriptions = () => (dispatch, voice, text) => postTranscriptions(voice, text)
  .then(({ data }) => dispatch(postTranscriptionsSuccess(data)))
  .catch(error => dispatch(postTranscriptionsFailed(error.message)))
