const container = document.querySelector(".content");
const rates = document.querySelectorAll(".rating");
const rateResult = document.querySelector(".result");
const submitBtn = document.querySelector(".Submit");
const finalRate = document.querySelector(".finalRate");

console.log(submitBtn);
submitBtn.addEventListener("click", () =>{
    rateResult.classList.remove("hidden");
    container.style.display="none"
})


rates.forEach((rate) =>{
  rate.addEventListener("click", () =>{
    rate.style.background="orange"
    rate.style.color="white"
    finalRate.innerHTML = rate.innerHTML
  })
})
