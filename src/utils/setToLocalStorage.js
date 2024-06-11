const setToLocalStorage = (storagedValueName, targetValue) => {
  localStorage.setItem(storagedValueName, JSON.stringify(targetValue));
};

export default setToLocalStorage;
