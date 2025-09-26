export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
export const RESET = 'RESET';

export const increment = () => ({ type: INCREMENT });
export const decrement = () => ({ type: DECREMENT });
export const updateMessage = (message: string) => ({ type: UPDATE_MESSAGE, payload: message });
export const reset = () => ({ type: RESET });

export interface CounterState {
  value: number;
  message: string;
}

const initialState: CounterState = {
  value: 0,
  message: 'Initial message from Redux',
};

const counterReducer = (state = initialState, action: any): CounterState => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, value: state.value + 1 };
    case DECREMENT:
      return { ...state, value: state.value - 1 };
    case UPDATE_MESSAGE:
      return { ...state, message: action.payload };
    case RESET:
      return { value: 0, message: 'Reset message' };
    default:
      return state;
  }
};

export default counterReducer;
