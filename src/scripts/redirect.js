const form = document.getElementById("contato-form");
const btn = document.getElementById("submit-btn");

/* Validação + loading */
form.addEventListener("submit", () => {
  btn.classList.add("loading");
  btn.textContent = "Enviando...";
});

