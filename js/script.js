let calculate = document.getElementById("calculation");
let count = document.getElementById("buttonCountNumber");

document.getElementById("buttonCountPlus").onclick = function () {
  let countPlus = count.innerHTML;
  if (+countPlus <= 100) {
    count.innerHTML++;
    let countPlus = count.innerHTML;
    calculate.innerHTML = calculations(countPlus);
  }
};

document.getElementById("buttonCountMinus").onclick = function () {
  let countMinus = count.innerHTML;
  if (+countMinus >= 2) {
    count.innerHTML--;
    let countMinus = count.innerHTML;
    calculate.innerHTML = calculations(countMinus);
  }
};
