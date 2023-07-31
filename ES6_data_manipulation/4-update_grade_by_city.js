export default function updateStudentGradeByCity(arrayOfStudents, city, newGrades) {
  return arrayOfStudents.filter((elements) => elements.location === city)
    .map((students) => {
      const grades = newGrades.filter((element) => students.id === element.studentId);
      if (grades.length > 0) {
        return { ...students, grade: grades[0].grade };
      }
      return { ...students, grade: 'N/A' };
    });
}
