import C from "../../constants";

export const updateSearch = searchTerm => ({
  type: C.UPDATE_SEARCH_TERM,
  payload: {searchTerm},
});
