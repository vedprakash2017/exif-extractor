import { exif } from './type'

const initialState = {
  exifcode: 0
}

const codeReducer = (state = initialState, action) => {
  switch (action.type) {
    case exif: return {
      ...state,
      exifcode: state.exifcode + 1
    }

    default: return state
  }
}

export default codeReducer
