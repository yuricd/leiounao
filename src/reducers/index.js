import { INC_SCORE } from "../constants/actionTypes";

const initialState = {
  score: 0,
}

const rootReducer = (state = initialState, action) => {
  if (action.type === INC_SCORE) {
    const newScore = { score: state.score + 1 };
    return newScore;
  }
  return state;
}

export default rootReducer;