const getFromLocalStorage = (storagedValue) => {
  return JSON.parse(localStorage.getItem(storagedValue)) || [];
};

export default getFromLocalStorage;
