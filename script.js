let korzinkaArr = [];
const elSelect = document.querySelector("#select");
const elBread = document.querySelector("#bread");

elSelect.addEventListener("click", function (e) {
  e.preventDefault();

  if (elSelect.value.length > 0) {
    let newObj = {
      id: korzinkaArr.length + 1,
      name: elSelect.value,
    };
    korzinkaArr.push(newObj);
    console.log(korzinkaArr);
    elBread.textContent = elSelect.value;
  }
});

//NON TANLASH

const elRadius = document.querySelectorAll(".size-wrapper__label");
const sizeOfbread = document.querySelector("#sizeOfBread");

elRadius.forEach((item) => {
  item.addEventListener("click", function () {
    sizeOfbread.textContent = item.textContent;
  });
});



//kattaligini tanlash

let ingredients = document.querySelectorAll(".hold__input");
let litag = document.querySelector("#li-wrapper");

ingredients.forEach((tag) => {
  tag.addEventListener("click", function () {
    let li = document.createElement("li");
    li.append(tag.dataset.add);

    litag.appendChild(li);
  });
});

let eladds = document.querySelectorAll(".hold__inputt");
let eladdition = document.querySelector("#additional-wrapper");

eladds.forEach((item) => {
  item.addEventListener("click", function (e) {
    console.log(e);
    let li = document.createElement("li");
    li.append(item.dataset.extra);

    eladdition.appendChild(li);
  });
});
