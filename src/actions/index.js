import { INC_SCORE } from '../constants/actionTypes';

export const incrementScore = () => {
  return { type: INC_SCORE };
}