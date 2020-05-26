import { summaryDataReference } from "../../data/summary-data";
const initialState = {
  headers: summaryDataReference.headers,
  data: summaryDataReference.data,
};

export default (state = initialState, action) => {
  return state;
};
