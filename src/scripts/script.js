// Animação de digitação
const textos = ["DELEON SANTOS"];
const elemento = document.getElementById("typing");
const hand = document.getElementById("hand");

let textoIndex = 0;
let letraIndex = 0;
let apagando = false;

function animarTexto() {
  const textoAtual = textos[textoIndex];

  if (!apagando) {
    if (letraIndex < textoAtual.length) {
      elemento.textContent += textoAtual.charAt(letraIndex);
      letraIndex++;
      setTimeout(animarTexto, 120);
    } else {
      // pausa antes de apagar
      hand.classList.add("wave");
      setTimeout(() => (apagando = true), 1500);
      setTimeout(animarTexto, 1500);
    }
  } else {
    // apagando
    if (letraIndex > 0) {
      elemento.textContent = textoAtual.substring(0, letraIndex - 1);
      letraIndex--;
      setTimeout(animarTexto, 80);
    } else {
      apagando = false;
      textoIndex = (textoIndex + 1) % textos.length;
      setTimeout(animarTexto, 500);
    }
  }
}
animarTexto();

document.querySelectorAll(".mostra-projetos").forEach((item) => {
  item.addEventListener("click", () => {
    const targetId = item.dataset.target;
    const targetSection = document.getElementById(targetId);
    const projetos = document.querySelector(".projetos");

    projetos.classList.add("hidden"); 
    targetSection.classList.add("show");

    setTimeout(() => {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  });
});

document.querySelectorAll(".hide-btn").forEach((button) => {
  button.addEventListener("click", (event) => {
    const section = event.target.closest(".oculta");
    const projetos = document.querySelector(".projetos");

    section.classList.remove("show");
    projetos.classList.remove("hidden");

    setTimeout(() => {
      projetos.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }, 80);
  });
});


// Animação de scroll para revelar seções
const sections = document.querySelectorAll(
  ".home, .label, .redes__sociais, .sobre, .text_sobre, .img_sobre, .titulo, .projetos, .card-projetos, .portfolio, .skills, .footer, .form, input"
);
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("section-visible");
    }
  });
});

sections.forEach((section) => {
  section.classList.add("section-hidden");
  observer.observe(section);
});


// Menu de navegação responsivo
let lastScrollTop = 0;
const cabeca = document.querySelector(".cabeca");

window.addEventListener("scroll", () => {
  if (window.innerWidth > 970) return;

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    cabeca.classList.remove("hide");
  } else {
    cabeca.classList.add("hide");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
