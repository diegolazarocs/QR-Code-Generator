const wrapper = document.querySelector(".wrapper");
const qrInput = document.querySelector(".form input");
const generatorBtn = document.querySelector(".form button");
const qrImg = document.querySelector(".qr-code img");
let prevalue;

generatorBtn.addEventListener("click", () => {
  let qrValue = qrInput.value.trim();
  if (!qrValue || prevalue === qrValue) return;
  prevalue = qrValue;
  generatorBtn.innerText = "Generating Qr Code ...";
  qrImg.src =
    "https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=$(qrValue)";
  qrImg.addEventListener("load", () => {
    wrapper.classList.add("active");
    generatorBtn.innerText = "Generate Qr Code";
  });
});
qrInput.addEventListener("keyup", () => {
  if (!qrInput.value.trim()) {
    wrapper.classList.remove("active");
    prevalue = "";
  }
});
