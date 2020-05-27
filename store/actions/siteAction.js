export const EDIT_SITE = "EDIT_SITE";
export const ADD_SITE = "ADD_SITE";
export const DELETE_SITE = "DELETE_SITE"

export const editSite = (site) => {
  return { type: EDIT_SITE, site };
};

export const addSite = (site) => {
  return { type: ADD_SITE, site };
};

export const deleteSite = (siteId) => {
  return {type: DELETE_SITE,siteId}
} 