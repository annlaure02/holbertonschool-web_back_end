export default function getStudentsByLocation(arrayOfObj, city) {
  return arrayOfObj.filter((element) => element.location === city);
}
