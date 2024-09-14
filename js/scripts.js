function desb() {
    let nome = document.querySelector('input#tname').value.trim();

    // Nome completo esperado
    const nomeCompleto = 'Nome Completo';

    // Verifica se o campo está vazio
    if (nome === '') {
        alert('[ERRO] Campo vazio, por favor! verifique e tente novamente.');
    }
    // Verifica se o nome inserido tem menos de três palavras
    else if (nome.split(' ').length < 3) {
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

//Lógica para surpresa especial

function especial() {
    let section = document.querySelector(".s8");
    let video = document.querySelector(".video");  // Seleciona o vídeo

    if (section.style.display === "none" || section.style.display === "") {
        section.style.display = "block";  // Exibe a seção que contém o vídeo
    }
    video.play();  // Inicia o vídeo automaticamente
}