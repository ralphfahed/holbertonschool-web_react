interface Teacher {
  readonly firstName: string;           // can only be set during initialization (readonly)
  readonly lastName: string;            // same readonly constraint
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;           // optional property
  location: string;

  // Index signature to allow any additional properties with string keys
  [key: string]: any;
}

// Example usage:
const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,   // extra property not explicitly defined
};

console.log(teacher3);

