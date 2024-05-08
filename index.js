let container = document.querySelector("#container");
let primaryBtn = document.querySelector(".btn1");
let secondaryBtn = document.querySelector(".btn2");
let gradientCode = document.querySelector(".gradient-code");
let copyCodeBtn = document.querySelector(".copy-clipboard");

const getHexValue = () => {
  let hexCode = "0123456789ABCDEF";
  let colors = "#";

  for (let i = 0; i < 6; i++) {
    colors = colors + hexCode[Math.floor(Math.random() * 16)];
  }
  return colors;
};

const handlePrimaryBtn = () => {
  let rgb1 = getHexValue();
  container.style.background = `linear-gradient(to right, ${rgb1}, #00F795)`;
  gradientCode.textContent = `background: linear-gradient(to right, ${rgb1}, #00F795)`;
  primaryBtn.textContent = `${rgb1}`;
};

const handleSecondaryBtn = () => {
  let rgb2 = getHexValue();
  container.style.background = `linear-gradient(to right, #235FFF, ${rgb2})`;
  gradientCode.textContent = `background: linear-gradient(to right, #235FFF, ${rgb2})`;
  secondaryBtn.textContent = `${rgb2}`;
};

primaryBtn.addEventListener("click", handlePrimaryBtn);
secondaryBtn.addEventListener("click", handleSecondaryBtn);

copyCodeBtn.addEventListener("click", () => {
  const textToCopy = gradientCode.textContent;
  navigator.clipboard
    .writeText(textToCopy)
    .then(() => {
      toastMsg();
    })
    .catch((err) => {
      toastMsg();
    });
});

const toastMsg = () => {
  setTimeout(() => {
    let toastContainer = document.querySelector(".toast-msg");
    if (toastContainer) {
      toastContainer.classList.add("show-toast");
      toastContainer.innerHTML = `<i class="fa-regular fa-circle-check"></i>Copied to Clipboard`;
      setTimeout(() => {
        toastContainer.classList.remove("show-toast");
      }, 2000);
    }
  }, 100);
};
