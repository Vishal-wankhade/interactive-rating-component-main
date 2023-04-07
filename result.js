const container = document.querySelector(".content");
const rate = document.querySelector(".rating");
const rateResult = document.querySelector(".result");
const submitBtn = document.querySelector(".Submit");
const rates = document.querySelector(".finalRate");

console.log(submitBtn);
submitBtn.addEventListener("click", () =>{
    rateResult.claassList.remove("hidden")
    container.style.display="none"
})
