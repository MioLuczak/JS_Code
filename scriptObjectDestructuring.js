const newEmplyee = {
  name: "Jane",
  surname: "Doe",
  age: 27,
  employeeID: '123123123456ABCABCDEF',
  employeeCardNumber: 'ABC123CD',
  contactInfo: {
    email: 'JaneDoe@example.com',
    countryPhonePrefix: "+00",
    phone: "123 456 789"
}
};

const {
  name: firstName,
  surname: lastName,
  age,
  employeeID,
  employeeCardNumber = "This user haven't got a valid card yet!",
  contactInfo: {
    email,
    countryPhonePrefix: phonePrefix,
    phone
  },
  profilePicture: profilePicture = "This user doeasn't have a profile picture!",
} = newEmplyee;
