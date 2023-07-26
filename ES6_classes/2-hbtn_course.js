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
      throw new TypeError('Name must be a string');
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
      throw new TypeError('Length must be a number');
    }
  }

  // getter and setter for students
  get students() {
    return this._students;
  }

  set students(newStudents) {
    if (Array.isArray(newStudents) === true) {
      this._students = newStudents;
    } else {
      throw new TypeError('Students must be an array of strings');
    }
  }
}
