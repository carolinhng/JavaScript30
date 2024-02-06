
window.addEventListener("keyup", (event) =>  {
  if (event.key === 'a') {
    const keyA = document.querySelector("[data-key='65']");
    keyA.classList.add("playing");
    const audioA = new Audio('sounds/clap.wav');
    audioA.play();
  } else if (event.key === 's') {
    const keyS = document.querySelector("[data-key='83']");
    keyS.classList.add("playing");
    const audioS = new Audio('sounds/hihat.wav');
    audioS.play();
  }

});
