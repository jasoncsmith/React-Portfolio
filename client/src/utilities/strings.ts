export const capitalizeFirstLetter = (str: string) =>
  str.length > 0 ? [str[0].toUpperCase(), ...str.split('').slice(1)].join('') : str
