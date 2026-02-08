let count = 5;
const countdown = document.getElementById("countdown");
const title = document.getElementById("title");
const text = document.getElementById("loveText");
const video = document.getElementById("video");
const music = document.getElementById("music");

const message = `
مروه،
كل سنة وانتي أجمل صدفة في حياتي،
وجودك بيخلّي الدنيا أهدى، وأجمل، وأقرب للقلب.
ضحكتك أمان، وكلامك راحة،
وأتمنى كل سنة أكون جنبك،
وأحتفل بيكي قبل أي حاجة في الدنيا ❤️
`;

document.body.addEventListener("click", () => {
  music.play();
}, { once: true });

const timer = setInterval(() => {
  count--;
  countdown.textContent = count;

  if (count === 0) {
    clearInterval(timer);
    countdown.classList.add("hidden");
    title.classList.remove("hidden");
    startTyping();
  }
}, 1000);

function startTyping() {
  let i = 0;
  const typing = setInterval(() => {
    text.textContent += message[i];
    i++;

    if (i >= message.length) {
      clearInterval(typing);
      video.classList.remove("hidden");
      video.play();
    }
  }, 60);
}
