// const user = {
//   name: "Roman",
//   age: 14,
//   isStudent: true,
//   family: undefined,
//   listening: () => {
//     console.log("I am listening");
//   },
// };

// const userJson = JSON.stringify(user);
// console.log(user);
// console.log(userJson);

// const catJson = '{"name": "fasolka","age": 4}';

// try {
//   const cat = JSON.parse(catJson);

//   console.log(cat.name);
// } catch (error) {
//   console.log(error);
// }

const formEl = document.querySelector(".js-feedback-form");
const textareaEl = formEl.querySelector('textarea[name="message"]');
const inputEl = formEl.querySelector('input[name="name"]');
const FORM_DATA = "form-message"
formEl.addEventListener(
  "input",
  (onInputChange = (event) => {
    // console.log(event.target, "target");
    // console.log(event.currentTarget);

    const value = event.target.value;
    localStorage.setItem(FORM_DATA, value);
  }),
);

const populateData = () => {
  const data = localStorage.getItem(FORM_DATA);
  textareaEl.value = data

};
populateData()

const onSubmitForm = (evant) => {
  evant.preventDefault()
  evant.currentTarget.reset()
  localStorage.removeItem(FORM_DATA)
}

formEl.addEventListener("submit", onSubmitForm)

