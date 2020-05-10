export const useLocalStorage = (keyName: string): Array<any> => {
  const setLocalSave = (value: string) => localStorage.setItem(keyName, value);

  const getLocalSave = () => localStorage.getItem(keyName);

  const removeLocalSave = () => localStorage.removeItem(keyName);

  return [setLocalSave, getLocalSave, removeLocalSave];
};
