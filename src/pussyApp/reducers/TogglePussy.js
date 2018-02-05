const stateInit = !!Math.round(Math.random());
export const TOGGLE_PUSSY = 'TOGGLE_PUSSY';

export default (state = stateInit, action) => {
  if (action.type === TOGGLE_PUSSY) {
    return action.state;
  }

  return state;
};
