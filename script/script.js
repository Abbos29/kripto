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


// // Добавляем 8 белых полосок в блок
// let block = document.getElementById("block");
// for (let i = 0; i < 7; i++) {
//   let divider = document.createElement("div");
//   divider.className = "divider";
//   block.appendChild(divider);
// }