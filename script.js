const btn = document.querySelector(".button");

const id = document.getElementById("id");
const advice = document.querySelector(".advice");

btn.addEventListener("click", () => {
    randomAdvice();
});


const randomAdvice =  async () => {
    try {
        let response = await fetch("https://api.adviceslip.com/advice");
        let data = await response.json();
        data = data.slip;
        id.innerHTML = data.id;
        advice.innerHTML = data.advice;
    } catch(error) {
        console.log(error);
    }
} 

randomAdvice();

