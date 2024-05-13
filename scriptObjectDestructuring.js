const newEmplyee = {
  name: "Jane",
  surname: "Doe",
  age: 27,
  employeeID: '123123123456ABCABCDEF',
  employeeCardNumber: 'ABC123CD',
  email: 'JaneDoe@example.com',
};

const {
  name: firstName,
  surname: lastName,
  age,
  employeeID,
  employeeCardNumber = "This user haven't got a valid card yet!",
  email,
  profilePicture: profilePicture = "This user doeasn't have a profile picture!",
} = newEmplyee;

console.log(newEmplyee);
console.log(lastName);
console.log(age);
console.log(employeeID);
console.log(employeeCardNumber);
console.log(email);
console.log(profilePicture);
