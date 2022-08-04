let adviceGenerateBtn = document.getElementById("adviceGenerateBtn");
let adviceContainer = document.getElementById("adviceContainer");
let adviceNumberContainer = document.getElementById("adviceNumberContainer");

let adviceNumber = 1;

function fetchAdvice() {
    adviceNumberContainer.innerText = "#" + adviceNumber;

    fetch("https://api.adviceslip.com/advice", { cache: "no-cache" })
        .then((res) => res.json())
        .then((data) => (adviceContainer.innerText = data.slip.advice))
        .catch((err) => console.log(err));
}

// onload
fetchAdvice();

// on click
adviceGenerateBtn.addEventListener("click", () => {
    adviceNumber = adviceNumber + 1;
    fetchAdvice();
});
