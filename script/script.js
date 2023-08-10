document.addEventListener("DOMContentLoaded", function() {
  let progress = document.querySelector(".progress");
  let counter = document.querySelector(".counter");
  let count = 1;
  let interval = 30 / 8;
  let timer = null;
  let payBtn = document.getElementById("payBtn");
  let number = 0

  function updateProgressBar() {
    // let width = (count / 1) * 100;
    // progress.style.width = width + "%";
    counter.textContent = count + "";
    
    if (count === 5) {
      clearInterval(timer);
      setTimeout(function() {
        document.querySelector(".section-2").classList.add("hidden");
        document.querySelector(".section-3").classList.remove("hidden");
      }, 3000);
    }

    // for(let i = 0; i < count; i++){
    //   number = i
    // }

    // if(number > count){
    //   progress.style.width = "0%";
    // }
    
    count++;

    // setTimeout(()=>{
    //   // let width = (count / 1) * 100;
    //   progress.style.width = "0%";
    // }, (interval / count) * 2000)

  //  cb()
    
  }

  // Добавляем обработчик события на нажатие кнопки payBtn
  payBtn.addEventListener("click", function() {
    document.querySelector(".section-1").classList.add("hidden"); // Добавляем класс "hidden" к элементу с классом "section-1"
    document.querySelector(".section-2").classList.remove("hidden"); // Удаляем класс "hidden" у элемента с классом "section-2"
    timer = setInterval(updateProgressBar, interval * 1000);
  });
});




document.addEventListener("DOMContentLoaded", function() {
  var copyButton = document.querySelector("#copy1");
  var inputField = document.querySelector("#copy11");
  var copyButton2 = document.querySelector("#copy2");
  var inputField2 = document.querySelector("#copy22");

  copyButton.addEventListener("click", function() {
    var placeholderText = inputField.getAttribute("placeholder");
    placeholderText = placeholderText.slice(0, -3);
    navigator.clipboard.writeText(placeholderText);
  });

  copyButton2.addEventListener("click", function() {
    var placeholderText = inputField2.getAttribute("placeholder");
    navigator.clipboard.writeText(placeholderText);
  });
});




document.addEventListener("DOMContentLoaded", function() {
  var toggle1 = document.getElementById("toggle1");
  var toggle2 = document.getElementById("toggle2");
  var toggle3 = document.getElementById("toggle3");
  var toggle4 = document.getElementById("toggle4");
  var section1 = document.querySelector(".section-1");
  var section2 = document.querySelector(".section-2");
  var section3 = document.querySelector(".section-3");
  var section4 = document.querySelector(".section-4");

  toggle1.addEventListener("click", function() {
    section1.classList.remove("hidden");
    section2.classList.add("hidden");
    section3.classList.add("hidden");
    section4.classList.add("hidden");
  });

  toggle2.addEventListener("click", function() {
    section1.classList.add("hidden");
    section2.classList.remove("hidden");
    section3.classList.add("hidden");
    section4.classList.add("hidden");
  });

  toggle3.addEventListener("click", function() {
    section1.classList.add("hidden");
    section2.classList.add("hidden");
    section3.classList.remove("hidden");
    section4.classList.add("hidden");
  });

  toggle4.addEventListener("click", function() {
    section1.classList.add("hidden");
    section2.classList.add("hidden");
    section3.classList.add("hidden");
    section4.classList.remove("hidden");
  });
});





// // Добавляем 8 белых полосок в блок
// let block = document.getElementById("block");
// for (let i = 0; i < 7; i++) {
//   let divider = document.createElement("div");
//   divider.className = "divider";
//   block.appendChild(divider);
// }