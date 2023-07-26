export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getter and setter for name
  get name() {
    return this._name;
  }

  set name(newName) {
    if (typeof newName === 'string') {
      this._name = newName;
    } else {
      throw new Error('Name must be a string');
    }
  }

  // getter and setter for length
  get length() {
    return this._length;
  }

  set length(newLength) {
    if (typeof newLength === 'number') {
      this._lentgh = newLength;
    } else {
      throw new Error('Length must be a number');
    }
  }

  // getter and setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (typeof newStudents === 'object') {
      this._students = newStudents;
    } else {
      throw new Error('Students must be an array of strings');
    }
  }
}
