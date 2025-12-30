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
        // escrevendo
        if (letraIndex < textoAtual.length) {
            elemento.textContent += textoAtual.charAt(letraIndex);
            letraIndex++;
            setTimeout(animarTexto, 120);
        } else {
            // pausa antes de apagar
            hand.classList.add("wave");
            setTimeout(() => apagando = true, 1500);
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


// Lógica para mostrar/ocultar seções de projetos
document.querySelectorAll('.mostra-projetos').forEach(item => {
    item.addEventListener('click', () => {
        const targetId = item.dataset.target;
        const targetSection = document.getElementById(targetId);

        document.querySelector('.projetos').classList.add('oculta');
        targetSection.classList.add('show');
    });
});
// Lógica para esconder seções de projetos
document.querySelectorAll('.hide-btn').forEach(button => {
    button.addEventListener('click', (event) => {
        const section = event.target.closest('.oculta');

        section.classList.remove('show');
        document.querySelector('.projetos').classList.remove('oculta');
    });
});


// Animação de scroll para revelar seções
const sections = document.querySelectorAll('.home, .label, .redes__sociais, .sobre, .text_sobre, .img_sobre, .titulo, .projetos, .card-projetos, .portfolio, .skills, .footer');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('section-visible');
        }    
    });
});

sections.forEach(section => {
    section.classList.add('section-hidden');
    observer.observe(section);
});


const form = document.getElementById('contato-form');
const btn = document.getElementById('submit-btn');

/* Validação + loading */
form.addEventListener('submit', () => {
    btn.classList.add('loading');
    btn.textContent = 'Enviando...';
});


/* Alerta após redirecionamento */
const params = new URLSearchParams(window.location.search);

if (params.get('success') === 'true') {
    Swal.fire({
        icon: 'success',
        title: 'Mensagem enviada!',
        text: 'Obrigado pelo contato. Retornarei em breve 😊',
        confirmButtonColor: '#3085d6'
    }).then(() => {
        // limpa URL e recarrega
        window.location.href = window.location.pathname;
    });
}


// Menu de navegação responsivo
let lastScrollTop = 0;
const cabeca = document.querySelector('.cabeca');

window.addEventListener('scroll', () => {
  // só executa no mobile
  if (window.innerWidth > 970) return;

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    // scroll para baixo → mostra
    cabeca.classList.remove('hide');
  } else {
    // scroll para cima → oculta
    cabeca.classList.add('hide');
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});
