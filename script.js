//  Sistema de busca 
const entradaBusca = document.getElementById('entrada-busca');
const cartoesRestaurante = document.querySelectorAll('.cartao-restaurante');

entradaBusca.addEventListener('input', (e) => {
    const termoBusca = e.target.value.toLowerCase();

    cartoesRestaurante.forEach(cartao => {
        const nome = cartao.getAttribute('data-nome').toLowerCase();
        const tipo = cartao.getAttribute('data-tipo').toLowerCase();

        if (nome.includes(termoBusca) || tipo.includes(termoBusca)) {
            cartao.style.display = 'block';
        } else {
            cartao.style.display = 'none';
        }
    });
});

// 2. Validação do formulário
const formularioContato = document.getElementById('formulario-contato');

formularioContato.addEventListener('submit', (e) => {
    e.preventDefault();

    let ehValido = true;
    const nome = document.getElementById('nome');
    const email = document.getElementById('email');
    const mensagem = document.getElementById('mensagem');

    // Reset erros
    document.querySelectorAll('.erro').forEach(err => err.style.display = 'none');

    // Validação Nome
    if (nome.value.trim() === '') {
        document.getElementById('erro-nome').style.display = 'block';
        ehValido = false;
    }

    // Validação Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        document.getElementById('erro-email').style.display = 'block';
        ehValido = false;
    }

    // Validação Mensagem
    if (mensagem.value.trim() === '') {
        document.getElementById('erro-mensagem').style.display = 'block';
        ehValido = false;
    }

    if (ehValido) {
        alert('Obrigado pelo seu contato, ' + nome.value + '! Recebemos sua mensagem.');
        formularioContato.reset();
    }
});

// Destaque visual ao clicar no card
cartoesRestaurante.forEach(cartao => {
    cartao.addEventListener('click', () => {
        // Remove destaque de outros
        cartoesRestaurante.forEach(c => c.classList.remove('destacado'));
        // Adiciona ao clicado
        cartao.classList.add('destacado');
    });
});

// Rolagem suave
document.querySelectorAll('nav a').forEach(ancora => {
    ancora.addEventListener('click', function (e) {
        e.preventDefault();
        const idAlvo = this.getAttribute('href').replace('#', '');
        const elementoAlvo = document.getElementById(idAlvo);

        if (elementoAlvo) {
            window.scrollTo({
                top: elementoAlvo.offsetTop - 80, // Compensação do header fixo
                behavior: 'smooth'
            });
        }
    });
});

//  Controle do Cabeçalho na Rolagem
const cabecalho = document.querySelector('.cabecalho');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        cabecalho.classList.add('rolagem');
    } else {
        cabecalho.classList.remove('rolagem');
    }
});


// Dados dos restaurantes 
const dadosRestaurantes = {
    "Pizza": [
        { nome: "Abaré Pizzarias", nota: "4.6", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkSMiKaN6KCRR0PVCV-zjtIYToLPuFEN1_Gw&s", link: "https://www.google.com/search?q=Abaré+Pizzarias+Curitiba" },
        { nome: "Baggio Pizzeria & Focacceria", nota: "4.7", img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=200", link: "https://www.google.com/search?q=Baggio+Pizzeria+Curitiba" },
        { nome: "Mercearia Bresser", nota: "4.8", img: "https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?w=200", link: "https://www.google.com/search?q=Mercearia+Bresser+Curitiba" }
    ],
    "Sushi": [
        { nome: "Azuki Sabores do Japão", nota: "4.5", img: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=200", link: "https://www.google.com/search?q=Azuki+Curitiba" },
        { nome: "Kan Japanese Restaurant", nota: "4.7", img: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=200", link: "https://www.google.com/search?q=Kan+Japanese+Curitiba" },
        { nome: "Taisho Sushi", nota: "4.4", img: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=200", link: "https://www.google.com/search?q=Taisho+Sushi+Curitiba" }
    ],
    "Hamburguer": [
        { nome: "Madero Prime Steakhouse", nota: "4.6", img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=200", link: "https://www.google.com/search?q=Madero+Curitiba" },
        { nome: "Jeronimo Burger", nota: "4.3", img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=200", link: "https://www.google.com/search?q=Jeronimo+Burger+Curitiba" },
        { nome: "WhataFuck Hamburgueria", nota: "4.7", img: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=200", link: "https://www.google.com/search?q=WhataFuck+Curitiba" }
    ],
    "Massa": [
        { nome: "Barolo Trattoria", nota: "4.9", img: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=200", link: "https://www.google.com/search?q=Barolo+Trattoria+Curitiba" },
        { nome: "Madalosso", nota: "4.7", img: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=200", link: "https://www.google.com/search?q=Madalosso+Curitiba" }
    ],
    "Comida Brasileira": [
        { nome: "Churrascaria Palace", nota: "4.5", img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=200", link: "https://www.google.com/search?q=Churrascaria+Palace+Curitiba" },
        { nome: "Boi na Brasa", nota: "4.4", img: "https://media.istockphoto.com/id/535786572/pt/foto/sagital-bife-grelhado.jpg?s=612x612&w=0&k=20&c=h9JZuPdEFSGvdTZGl5IcYg4DsPLlB3x5CLsGKB341g8=", link: "https://www.google.com/search?q=Boi+na+Brasa+Curitiba" }
    ],
    "Sobremesa": [
        { nome: "Confeitaria das Famílias", nota: "4.6", img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=200", link: "https://www.google.com/search?q=Confeitaria+das+Famílias+Curitiba" },
        { nome: "Balaroti Doceria", nota: "4.5", img: "https://images.unsplash.com/photo-1559715745-e1b33a271c8f?w=200", link: "https://www.google.com/search?q=Doceria+Curitiba" }
    ],
    "Pão": [
        { nome: "Pão Delicia", nota: "4.6", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweozKoOvIcUNOKQoPS1Wo7xw5Xu9LAteElPNOBlGKEjkYPi0398nM5n1JzE4hUj8RHHVV8n1yxoIZx52LTEODpDB0ihoRigG1qKJGHdHt11UqnqQA12cWSnBmvEjHiOpHAWtC1rY-cemdJhY=s1360-w1360-h1020-rw", link: "https://www.google.com/search?q=Pão+Delicia" },
        { nome: "Padarias Curitiba", nota: "4.4", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReoFOUWRZqTp2RRFBZlT5z5H1Gk3u96WliUA&s", link: "https://www.google.com/search?q=Padarias+Curitiba" }
    ],
    "Sorvete": [
        { nome: "Sorveteria Pedacinho do Nordeste", nota: "4.5", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAweqFN86A1Tc6mIJKI6r-bnlrarKfM6OrTNToGrxUWy6yjDbL2xc3KO3RK0EiDXJAyB7OBBZW7FsCL2Ik5FGTUsLdi5-odICQPpCklB8_tUjs0GvjspUnjGuzy5YqzqbiXb4KC-U=w260-h175-n-k-no", link: "https://www.google.com/search?q=Sorveteria+Pedacinho+do+Nordeste" },
        { nome: "Mizpa - Sorvetes Artesanais em Curitibaa", nota: "4.5", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepF75Oqqai76XcS1ksezHWbiZG480PMFWKJSs2C4V25r2oupAbW5-xpAsjLk1DRkV-fUW7Iq5L_Ujqw4ZQgYg_MqEdSlDTtVAuBaCcAPWIeUfGUeZ28NYAQFGIQiYek3eeBJkVu4w=s1360-w1360-h1020-rw", link: "https://www.google.com/search?q=Mizpa+-+Sorvetes+Artesanais+em+Curitibaa" }
    ],

    "Árabe": [
        { nome: "Habib's", nota: "4.1", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW5IYWxkoMhhFq4TitFPCm8fBRchFdXmiFhQ&s", link: "https://www.google.com/search?q=Habib's" },
        { nome: "Mezmiz", nota: "4.2", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwepQ4A8Ka-3ohzaKvKj9sAIE7dnho1sb7cMkU0t4InSIwmz2-m0_6qY3-Z3VEbz2XWvNSx5oHOQIS0-FD-7qgiTEs62QShG8lQv3xV4k6uQUoVymKrie4NqSHnHYT1KXypE7aLOi=s1360-w1360-h1020-rw", link: "https://www.google.com/search?q=Mezmiz" }
    ],

    "Pastel": [
        { nome: "Pastenina", nota: "4.7", img: "https://static.wixstatic.com/media/f9bcf1_41f80da666834466870cd241b33d51c7~mv2.jpg/v1/fit/w_2500,h_1330,al_c/f9bcf1_41f80da666834466870cd241b33d51c7~mv2.jpg", link: "https://www.google.com/search?q=Pastenina" },
        { nome: "Barraca Do Pastel", nota: "4.7", img: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerql5RP6IRxRk8EG9cEjRR1hW17p8yGfd1q8myM_eJLEEAQI4-2aG5WTK7ZDxFhq1CFrWm9Tnzze5AyhgiQNs_otFX0k8I8PLAgJxVNHJbwrevUTqYurnHN9wD82JiIo8xVIyju-A=s1360-w1360-h1020-rw", link: "https://www.google.com/search?q=Barraca+Do+Pastel" }
    ],
};

// Elementos do Modal
const modal = document.getElementById('modal-restaurantes');
const listaMelhores = document.getElementById('lista-melhores');
const tituloModal = document.getElementById('titulo-modal');
const btnFechar = document.querySelector('.fechar-modal');

// Função para abrir o modal com os dados certos    
function abrirAbaInterna(categoria) {
    // Limpa a lista atual
    listaMelhores.innerHTML = '';
    tituloModal.innerText = `Melhores de Curitiba: ${categoria}`;

    const restaurantes = dadosRestaurantes[categoria] || [];

    if (restaurantes.length === 0) {
        listaMelhores.innerHTML = '<p>Nenhum restaurante encontrado para esta categoria.</p>';
    } else {
        restaurantes.forEach(rest => {
            const div = document.createElement('div');
            div.className = 'item-melhor-restaurante';
            div.innerHTML = `
                <img src="${rest.img}" alt="${rest.nome}" class="img-miniatura">
                <div class="info-melhor-restaurante">
                    <h4>${rest.nome}</h4>
                    <span class="avaliacao-google">⭐ ${rest.nota} (Google Reviews)</span>
                    <a href="${rest.link}" target="_blank" class="btn-visitar">Ver no Google Maps</a>
                </div>
            `;
            listaMelhores.appendChild(div);
        });
    }

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden'; // Trava a rolagem do fundo
}

// Adiciona clique em todos os botões "Ver mais"
document.querySelectorAll('.btn-ver-mais').forEach(botao => {
    botao.addEventListener('click', (e) => {
        e.preventDefault();
        // Pega o tipo de comida do card pai
        const cartao = botao.closest('.cartao-restaurante');
        const categoria = cartao.getAttribute('data-tipo');
        abrirAbaInterna(categoria);
    });
});

// Fechar modal ao clicar no X
btnFechar.onclick = function () {
    modal.style.display = "none";
    document.body.style.overflow = 'auto'; // Destrava a rolagem
}

// Fechar modal se clicar fora da caixa branca
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.body.style.overflow = 'auto';
    }
}

// Efeito Scroll 
const observadorScroll = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        // Se o elemento estiver visível na tela
        if (entrada.isIntersecting) {
            entrada.target.classList.add('active');
            // Para de observar o elemento depois que ele já apareceu
            observadorScroll.unobserve(entrada.target);
        }
    });
}, {
    threshold: 0.1, // Mais sensível (10% de visibilidade)
    rootMargin: '0px 0px -20px 0px' // Margem menor para telas pequenas
});

// Seleciona todos os elementos com a classe 'reveal' e começa a observar
document.querySelectorAll('.reveal').forEach((elemento) => {
    observadorScroll.observe(elemento);
});