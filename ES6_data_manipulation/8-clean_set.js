export default function cleanSet(set, startString) {
  if (startString.length === 0) {
    return '';
  }
  let newString = '';
  for (const element of set) {
    if (element.startsWith(startString)) {
      newString += `${element.replace(startString, '')}-`;
    }
  }
  newString = newString.slice(0, -1);
  return newString;
}
