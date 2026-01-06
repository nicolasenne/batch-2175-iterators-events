console.log("Hello from JavaScript!");

// const beatles = ["paul", "john", "ringo", "george"];

// beatles.forEach((beatle) => {
//   console.log(beatle.toUpperCase());
// });

// beales each do |beatle|
//   beatle.upcase
// end

// const btn = document.querySelector(".btn");
// console.log(btn);

// const btnBlue = document.getElementById("btn-blue");
// console.log(btnBlue);

// Criar <ul>
// Iteração dos membros
// Pra cada membro, fazemos uma <li>
// Colocar cada <li> dentro da <ul>

// const abba = ['Bjorn', 'Benny', 'Anni-frid', 'Agnetha', 'Nicolas'];
// let li = '';

// abba.forEach((member) => {
//   li += `<li>${member}</li>`;
// });

// const ul = `<ul>${li}</ul>`;

// const container = document.querySelector(".container");
// container.insertAdjacentHTML('beforeend', ul);

// const instrument = document.getElementById("agnetha").dataset.instrument;
// console.log(instrument);

// const abba = document.querySelectorAll(".abba");

// abba.forEach((member) => {
//   member.innerHTML += ` - ${member.dataset.instrument}`;
// });

// const romain = document.getElementById("romain");

// romain.addEventListener("click", (event) => {
//   event.currentTarget.classList.toggle("img-circle");
// });

// const imgs = document.querySelectorAll("img");

// imgs.forEach((img) => {
//   img.addEventListener("click", (event) => {
//     event.currentTarget.classList.toggle("img-circle");
//   });
// });

// const btn = document.querySelector(".btn");

// btn.addEventListener("click", (event) => {
//   event.preventDefault();
//   console.log("Deu certo!");
// });

const selectAll = document.querySelector("#select-all-checkbox");

selectAll.addEventListener("click", (event) => {
  const checkboxes = document.querySelectorAll(".form-check-input");
    checkboxes.forEach((checkbox) => {
      checkbox.checked = true;
    });
});