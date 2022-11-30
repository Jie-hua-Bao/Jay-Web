let isPlaying = false;
let jay = document.querySelectorAll(".item");
let audiolist = document.querySelectorAll("audio");
let jaylist = document.querySelector(".wrap");
let bd = document.querySelector("body")
let backgroundlist =
  [
    { zero: "./img/星晴.gif" },
    { one: "./img/忍者.gif" },
    { two: "./img/爺爺泡的茶.gif" },
    { three: "./img/以父之名.gif" },
    { four: "./img/我的地盤.gif" },
    { five: "./img/頭文字D.gif" },
    { six: "./img/本草綱目.gif" },
    { seven: "./img/扯.gif" },
    { eight: "./img/稻香.gif" },
    { nine: "./img/跨時代.gif" },
    { ten: "./img/公主病.gif" },
    { eleven: "./img/公公偏頭痛.gif" }
  ]


// for (let i = 0; i < jay.length; i++) {
//   jay[i].addEventListener('click', function (event) {
//     for (let j = 0; j < audiolist.length; j++) {
//       if (isPlaying) {
//         if (audiolist[j].classList[0] === jay[i].classList[1]) {
//           audiolist[j].play();
//           jay[i].classList.add("animate");
//           audiolist[j].addEventListener('ended', function () {
//             jay[i].classList.remove("animate")
//           })
//         }
//       } else {
//         audiolist[j].pause();
//         jay[i].classList.remove("animate");
//       }
//     }
//     isPlaying = !isPlaying;
//   })
// }


jay.forEach(function (item) {
  item.addEventListener("click", function (event) {
    audiolist.forEach(function (list) {
      if (isPlaying) {
        if (list.dataset.audio === item.dataset.id) {
          list.play();
          item.classList.add("animate")
          item.classList.add("animate2");



          list.addEventListener("ended", function () {
            item.classList.remove("animate");
            document.body.style.background = `url("./img/開場.gif")no-repeat`;
            document.body.style.backgroundSize = "100%";
            item.classList.remove("animate2");
          });
        }
      } else {
        // list.addEventListener("pause", function () {
        //   document.body.style.background = `url("../img/開場.gif")no-repeat`;
        //   document.body.style.backgroundSize = "100%";
        // });
        list.pause();
        item.classList.remove("animate");
        item.classList.remove("animate2");
      }
    });
    isPlaying = !isPlaying;
  });
});




jay.forEach(function (item) {
  item.addEventListener('click', function (event) {
    backgroundlist.forEach(function (color) {
      if (item.classList[1] === Object.keys(color)[0]) {
        document.body.style.background = `url("${Object.values(color)[0]}")no-repeat`;
        document.body.style.backgroundSize = "100%";



      }
    })
  })
})


