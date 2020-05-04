const capitalize = (str: string): string => {
  const splittedStr = str.split("");
  splittedStr[0] = splittedStr[0].toUpperCase();
  const capitalizedStr = splittedStr.join("");
  return capitalizedStr;
};

export default capitalize;
