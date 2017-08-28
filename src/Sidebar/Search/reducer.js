import C from "../../constants";

export default (state = "", action) => {
  const {type, payload} = action;

  switch (type) {
    case C.UPDATE_SEARCH_TERM:
      return payload.searchTerm;

    default:
      return state;
  }
};
