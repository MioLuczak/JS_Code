// Creating Array of random people
const people = [
  {
    id: '664c4e9f664cf2fab2183731',
    isActive: true,
    age: 23,
    firstname: 'Rivas',
    lastname: 'Castaneda',
    email: 'rivascastaneda@poochies.com',
  },
  {
    id: '664c4e9ffd8ca93ad45a6b1c',
    isActive: true,
    age: 16,
    firstname: 'Vivian',
    lastname: 'Weber',
    email: 'vivianweber@poochies.com',
  },
  {
    id: '664c4e9fadc91499cb0cfffb',
    isActive: false,
    age: 30,
    firstname: 'Rene',
    lastname: 'Moses',
    email: 'renemoses@poochies.com',
  },
  {
    id: '664c4e9f25d428ed4ca82217',
    isActive: false,
    age: 22,
    firstname: 'Vance',
    lastname: 'Haney',
    email: 'haneyvance@poochies.com',
  },
  {
    id: '664c4e9f36459e4dbcab375f',
    isActive: true,
    age: 39,
    firstname: 'Clayton',
    lastname: 'Alisha',
    email: 'alishaclayton@poochies.com',
  },
  {
    id: '664c4e9f9fbe7e4a6c44676f',
    isActive: false,
    age: 17,
    firstname: 'Patterson',
    lastname: 'Petty',
    email: 'pettypatterson@poochies.com',
  },
  {
    id: '664c4e9f86dd113f5af2e736',
    isActive: false,
    age: 33,
    firstname: 'Terry',
    lastname: 'Beck',
    email: 'beckterry@poochies.com',
  },
  {
    id: '664c4e9f2588ca93b25c9fa7',
    isActive: true,
    age: 16,
    firstname: 'Vaughan',
    lastname: 'Landry',
    email: 'landryvaughan@poochies.com',
  },
  {
    id: '664c4e9ff4851d030f4529a8',
    isActive: true,
    age: 32,
    firstname: 'Richards',
    lastname: 'Cherry',
    email: 'cherryrichards@poochies.com',
  },
  {
    id: '664c4e9f3ebf841b23d8638d',
    isActive: false,
    age: 17,
    firstname: 'Taylor',
    lastname: 'House',
    email: 'housetaylor@poochies.com',
  },
];

// Function returning Array of names of adult people
function getNamesOfAdults(arr) {
  const result = Array.from(
    arr
      .filter((element) => element.age >= 18)
      .map((element) => element.firstname)
  );
  return result;
}
getNamesOfAdults(people);

// Arrow Function returning Array of names of adult people
const getNamesOfAdults_ArrowFunction = (arr) =>
  arr
    .filter((element) => element.age >= 18)
    .map((element) => element.firstname);
getNamesOfAdults_ArrowFunction(people);