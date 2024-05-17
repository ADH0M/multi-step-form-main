let allElemnt = document.querySelectorAll(".allElemnt");
let step = document.querySelectorAll(".step");
console.log(step);
step.forEach(function (ele) {
  ele.onclick = function () {
    step.forEach(function (ele) {
      if (ele.classList.contains("active") === true) {
        ele.classList.remove("active");
      }
    });
    this.classList.add("active");
  };
});
