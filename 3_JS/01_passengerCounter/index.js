// document.getElementById("count-el").innerText = 5

let count = 0;
let saveValue = 0;
let countEl = document.getElementById("count-el");

function increment() {
  count = count + 1;
  countEl.innerText = count;
}

function save() {
  console.log(saveValue);
  console.log(count);

  if (saveValue != count) {
    saveValue = count;
  }
  return saveValue;
}

function reset() {
  count = 0;
  countEl.innerText = count;
}

function checkPoint() {
  count = saveValue;
  countEl.innerText = saveValue;
}
