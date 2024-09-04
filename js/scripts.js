function desb() {
    let nome = document.querySelector('input#tname').value.trim();

    // Nome completo esperado
    const nomeCompleto = 'Dulce Sumluisse Martelo';

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

//Script para o ParticleJS

particlesJS("particles-js", {
    "particles": {
      "number": {
        "value": 100,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#762945"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#762945",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "grab"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 140,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true
  });