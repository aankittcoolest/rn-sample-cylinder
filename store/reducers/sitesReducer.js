import sites from "../../data/sites";
import { EDIT_SITE, ADD_SITE } from "../actions/siteAction";

const initialState = {
  sites,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case EDIT_SITE: {
      return {
        ...state,
        sites: { ...state.sites, [action.site.id]: action.site },
      };
    }
    case ADD_SITE: {
      return {
        ...state,
        sites: [...state.sites, action.site],
      };
    }
  }
  return state;
};
