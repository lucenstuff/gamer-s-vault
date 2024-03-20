const dispatchLocalStorageUpdate = () => {
  const event = new Event("localStoragesUpdate");
  window.dispatchEvent(event);
};

const saveGameIdToLocalStorage = (gameId) => {
  const existingGameIds = JSON.parse(localStorage.getItem("cartGameIds")) || [];

  if (!existingGameIds.includes(gameId)) {
    existingGameIds.push(gameId);
    localStorage.setItem("cartGameIds", JSON.stringify(existingGameIds));
    localStorage.setItem(`cartGameIds-${gameId}`, gameId);
    dispatchLocalStorageUpdate();
  }
};

const removeGameIdFromLocalStorage = (gameId) => {
  let existingGameIds = JSON.parse(localStorage.getItem("cartGameIds")) || [];

  existingGameIds = existingGameIds.filter((id) => id !== gameId);
  localStorage.setItem("cartGameIds", JSON.stringify(existingGameIds));
  localStorage.removeItem(`cartGameIds-${gameId}`);
  dispatchLocalStorageUpdate();
};

export {
  dispatchLocalStorageUpdate,
  saveGameIdToLocalStorage,
  removeGameIdFromLocalStorage,
};
