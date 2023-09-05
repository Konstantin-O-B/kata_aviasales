export function setItemToLS(key, item) {
  localStorage.setItem(key, item);
}

export function getItemFromLS(key) {
  return localStorage.getItem(key);
}
