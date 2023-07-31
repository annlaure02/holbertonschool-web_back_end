export default function cleanSet(set, startString) {
  if (!startString || !startString.length) {
    return '';
  }
  let newString = '';
  for (const element of set) {
    if (element && element.startsWith(startString)) {
      const replacedElement = element.replace(startString, '');
      if (replacedElement !== '') {
        newString += `${replacedElement}-`;
      }
    }
  }
  newString = newString.slice(0, -1);
  return newString;
}
