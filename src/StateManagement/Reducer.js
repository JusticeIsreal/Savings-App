const reducer = (state, action) => {
  if (action.type === "TOTAL_SAVINGS") {
    return {
      ...state,
      seeAmount: !state.seeAmount,
    };
  }
  return state;
};
export default reducer;
