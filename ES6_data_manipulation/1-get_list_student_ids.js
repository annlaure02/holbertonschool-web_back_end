export default function getListStudentIds(arrayOfObj) {
  if (typeof arrayOfObj !== 'object') {
    return [];
  }
  return arrayOfObj.map((element) => element.id);
}
