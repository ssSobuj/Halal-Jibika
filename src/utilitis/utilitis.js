export function getItemFromLocalstorage(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
