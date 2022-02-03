/**
 *
 * @param {*} name entity name
 * @param {*} payload data
 * @returns performs necessary set and get actions
 */
export const _setUserData = (name, payload) =>
  localStorage.setItem(name, payload);

export const _getUserData = (name) => localStorage.getItem(name);

export const _setToken = (name, payload) => localStorage.setItem(name, payload);

export const _getToken = (name) => localStorage.getItem(name);
