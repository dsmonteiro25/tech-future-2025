// Botão Voltar ao Topo
const backToTopButton = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Scroll Suave para Links Internos
const menuLinks = document.querySelectorAll('.menu a[href^="#"]');

menuLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Validação Básica do Formulário de Inscrição
const form = document.getElementById('inscricao-form');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // impede envio automático para podermos validar

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();

  if (nome === '' || email === '') {
    alert('Por favor, preencha os campos obrigatórios!');
    return;
  }

  alert('Inscrição enviada com sucesso! 🚀');
  form.reset(); // limpa o formulário
});
