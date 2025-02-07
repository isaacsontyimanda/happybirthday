function desb() {
    let nome = document.querySelector('input#tname').value.trim();

    // Nome completo esperado
    const nomeCompleto = 'Luma Wavana';

    // Verifica se o campo está vazio
    if (nome === '') {
        alert('[ERRO] Campo vazio, por favor! verifique e tente novamente.');
    }
    // Verifica se o nome inserido tem menos de três palavras
    else if (nome.split(' ').length < 2) {
        alert('[ERRO] Por favor! digite seu nome completo, igual ao do BI (bilhete de identidade).');
    }
    // Verifica se o nome não corresponde ao nome completo
    else if (nome !== nomeCompleto) {
        alert('[ERRO] Nome inválido, desculpa essa surpresa não é para ti 😿');
    }
    // Nome completo correto
    else {
        alert(`Parabéns! 😊🎁 🔹${nome}🔹, você será redirecionada para a sua surpresa 😉`);
        // Redirecionar para a página de surpresa
        redirectToSurprise(nome);
    }

    // Limpa o campo após a tentativa
    document.querySelector('input#tname').value = '';
}

function redirectToSurprise(nome) {
    if (nome) {
        // Redirecionar para a página de surpresa com o nome como parâmetro na URL
        window.location.href = `surprise.html?name=${encodeURIComponent(nome)}`;
    }
}
function pedir() {
    if (pedir() == true) {
        alert('Essa funcionalidade estará disponível em breve, obrigado!')
    }
}
//Lógica para surpresa especial

function especial() {
    let section = document.querySelector(".s8");
    let video = document.querySelector(".video");  // Seleciona o vídeo

    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";  // Exibe a seção que contém o vídeo
    }
    video.play();  // Inicia o vídeo automaticamente
}

const menuBtn = document.querySelector(".btn-menu");
const backBtn = document.querySelector(".btn-b");
const hamburgerBtn = document.querySelector(".btn-h");
const navbar = document.querySelector(".navbar");

menuBtn.addEventListener("click", () => {
    navbar.classList.toggle("active");

    // Alterna visibilidade entre os botões
    if (navbar.classList.contains("active")) {
        backBtn.style.display = "block"; // Mostra o botão "voltar"
        hamburgerBtn.style.display = "none"; // Esconde o botão "hambúrguer"
    } else {
        backBtn.style.display = "none"; // Esconde o botão "voltar"
        hamburgerBtn.style.display = "block"; // Mostra o botão "hambúrguer"
    }
});

// Lógica para reprodução dos áudios
const friends = document.querySelectorAll('.friend');

// Função para pausar todos os áudios
function pauseAllAudios() {
    const allAudios = document.querySelectorAll('audio');
    allAudios.forEach(audio => {
        audio.pause();
        audio.currentTime = 0; // Reinicia o áudio
    });

    // Remove animações de todas as imagens
    const allImages = document.querySelectorAll('.friend img');
    allImages.forEach(img => img.classList.remove('float'));
}

// Adiciona o evento de clique para cada amigo
friends.forEach(friend => {
    friend.addEventListener('click', () => {
        // Pausa todos os outros áudios
        pauseAllAudios();

        // Identifica o áudio e a imagem
        const audio = friend.querySelector('audio');
        const img = friend.querySelector('img');

        // Reproduz o áudio selecionado
        audio.play();

        // Adiciona a classe de animação
        img.classList.add('float');

        // Remove a animação após o áudio terminar
        audio.addEventListener('ended', () => {
            img.classList.remove('float');
        });
    });
});

// Selecione os elementos necessários
const slideContainer = document.querySelector('.photo-slide');
const images = document.querySelectorAll('.photo-slide img');
const prevButton = document.createElement('button');
const nextButton = document.createElement('button');

// Adicione os botões de navegação
prevButton.textContent = '❮';
prevButton.classList.add('gallery-control', 'prev');
nextButton.textContent = '❯';
nextButton.classList.add('gallery-control', 'next');
document.querySelector('.photo-gallery').append(prevButton, nextButton);

// Variáveis de controle
let currentIndex = 0;

// Função para atualizar a posição da galeria
function updateGalleryPosition() {
  const offset = -currentIndex * 100;
  slideContainer.style.transform = `translateX(${offset}%)`;
}

// Navegar para a imagem anterior
prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateGalleryPosition();
});

// Navegar para a próxima imagem
nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateGalleryPosition();
});

//Lógica para tela cheia
