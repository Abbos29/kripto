document.addEventListener("DOMContentLoaded", function() {
  var progress = document.querySelector(".progress");
  var counter = document.querySelector(".counter");
  var count = 1;
  var interval = 30 / 8;
  var timer = null;
  var payBtn = document.getElementById("payBtn");

  function updateProgressBar() {
    var width = (count / 1) * 100;
    progress.style.width = width + "%";
    counter.textContent = count + "";
    
    if (count === 1) {
      clearInterval(timer);
      setTimeout(function() {
        document.querySelector(".section-2").classList.add("hidden");
        document.querySelector(".section-3").classList.remove("hidden");
      }, 3000);
    }
    
    count++;
  }

  // Добавляем обработчик события на нажатие кнопки payBtn
  payBtn.addEventListener("click", function() {
    document.querySelector(".section-1").classList.add("hidden"); // Добавляем класс "hidden" к элементу с классом "section-1"
    document.querySelector(".section-2").classList.remove("hidden"); // Удаляем класс "hidden" у элемента с классом "section-2"
    timer = setInterval(updateProgressBar, interval * 1000);
  });
});


// Добавляем 8 белых полосок в блок
var block = document.getElementById("block");
for (var i = 0; i < 7; i++) {
  var divider = document.createElement("div");
  divider.className = "divider";
  block.appendChild(divider);
}