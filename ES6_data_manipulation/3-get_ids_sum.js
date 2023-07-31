export default function getStudentIdsSum(arrayOfObj) {
  const initialValue = 0;

  return arrayOfObj.reduce((accumulator, currentValue) => accumulator
                            + currentValue.id, initialValue);
}
