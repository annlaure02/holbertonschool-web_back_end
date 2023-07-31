export default function getListStudentIds(arrayOfObj) {
  if (typeof arrayOfObj !== 'object') {
    return [];
  } else if (arrayOfObj === null) {
    return [];
  }
  return arrayOfObj.map((element) => element.id);
}
