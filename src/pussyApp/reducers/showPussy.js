const stateInit = !!Math.round(Math.random());

export default (state = stateInit, action) => {
  if (action.type === 'TOGGLE_PUSSY') {
    return action.state;
  }

  return state;
};
