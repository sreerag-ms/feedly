/* eslint-disable import/prefer-default-export */

export const debounce = (callBack, delay = 500) => {
  let timeout;
  return (...args) => {
    const later = () => {
      clearTimeout(timeout);
      callBack(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, delay);
  };
};
