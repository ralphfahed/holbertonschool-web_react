// Interface for the constructor parameters
interface StudentClassConstructor {
  firstName: string;
  lastName: string;
}

// Interface describing the class instance (methods & properties)
interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

// Class implementing the interfaces
class StudentClass implements StudentClassInterface {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

// Example usage:
const student = new StudentClass("Ralph", "Fahed");
console.log(student.displayName());    // Ralph
console.log(student.workOnHomework()); // Currently working

