let isDarkTheme = false;
const listeners = [];

export const setIsDarkTheme = (value) => {
  isDarkTheme = value;
  listeners.forEach((listener) => listener(isDarkTheme));
};

export const getIsDarkTheme = () => isDarkTheme;

export const addThemeListener = (listener) => {
  listeners.push(listener);
};

export const removeThemeListener = (listener) => {
  const index = listeners.indexOf(listener);
  if (index !== -1) {
    listeners.splice(index, 1);
  }
};
