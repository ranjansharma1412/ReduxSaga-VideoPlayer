import * as Types from '../ActionType'

const initialState = {
    videos: [],
    loader: false
}

const videoReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_VIDEOS:
            return { ...state, videos: action.payload }
        case Types.FETCH_VIDEOS_LOADER:
            return { ...state, loader: action.payload }
        default:
            return { ...state }
    }
}

export default videoReducer;