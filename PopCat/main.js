const cat = document.querySelector(".cat");
const voice = document.querySelector(".voice");
const voice2 = document.querySelector(".voice2");
const rotate = document.querySelector(".title2");
const clicknumber = document.querySelector(".number");
let numberBox = Number(clicknumber.innerText);

cat.addEventListener("click", function (event) {
  let target = event.target;
  if (target.hasAttribute("src")) {
    target.setAttribute("src", "./img/one.png");
    numberBox += 1;
    clicknumber.style.color = `rgb(50,${numberBox},${numberBox})`;
    if (numberBox >= 100) {
      clicknumber.style.color = "#ff0000";
      voice2.play();
      voice2.currentTime = 0;
      voice.pause();
      document.body.style.backgroundImage =
        "url('./img/當家.jpg')";
    }
    clicknumber.innerText = numberBox;
    rotate.style.transform = "rotate(0turn)";
    rotate.style.color = "#ff0000";
  }
});

cat.addEventListener("mousedown", function (event) {
  let target = event.target;
  if (target.hasAttribute("src"))
    target.setAttribute("src", "./img/two.png");
  voice.play();
  voice.currentTime = 0;
  rotate.style.transform = "rotate(0.3turn)"; //翻轉字體
  rotate.style.color = "#000000";
});
