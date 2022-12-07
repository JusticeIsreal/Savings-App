const reducer = (state, action) => {
  // to hide and show total amount
  if (action.type === "TOTAL_SAVINGS") {
    return {
      ...state,
      seeAmount: !state.seeAmount,
    };
  }

 
  return state;
};
export default reducer;
