let count = 5;
const countdown = document.getElementById("countdown");
const title = document.getElementById("title");
const text = document.getElementById("loveText");
const video = document.getElementById("video");
const music = document.getElementById("music");

const message = `
مراتي نور عيني ،
كل سنة وانتي أجمل صدفة في حياتي،
وجودك بيخلّي الدنيا أهدى، وأجمل، وأقرب للقلب.
ضحكتك أمان، وكلامك راحة،
كل سنه ونتي طبيه ينور عيني وروح قلبي 
ياا اقرب حد ليا ومن غيرك انا مش موجود 
انتي الحياه والامل والروح بسببهم انا عايش 
كل سنه ونتي طيبه يروحي ينورعيني 
كل سنه واحنا جنب بعض
كل سنه وانتي اقرب واجمل حد في حياتي 
بحبك ينور عيني كلمه بحبك قليله علي الوصف،
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

