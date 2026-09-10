const user = {
  name: "Roman",
  age: 14,
  isStudent: true,
  family: undefined,
  listening: () => {
    console.log("I am listening");
  },
};

const userJson = JSON.stringify(user);
console.log(user);
console.log(userJson);

const catJson = '{"name": "fasolka","age": 4}';

try {
  const cat = JSON.parse(catJson);

  console.log(cat.name);
} catch (error) {
  console.log(error);
}
