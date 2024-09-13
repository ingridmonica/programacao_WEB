async function fetchData(url, dadoId, imgId, index) {
    try {
        let response = await fetch(url);
        let data = await response.json();

        // pegando um personagem específico pelo índice da lista
        let character = data[index];

        // atualizando o nome, casa e patrono 
        document.getElementById(dadoId).innerHTML = `
            Nome: ${character.name} <br>
            Casa: ${character.house} <br>
            Patrono: ${character.patronus || 'Desconhecido'}
        `;

        // atualizando a imagem do personagem
        document.getElementById(imgId).src = character.image;
        document.getElementById(imgId).alt = `Imagem de ${character.name}`;

    } catch (error) {
        document.getElementById(dadoId).textContent = 'Erro ao carregar dados';
        console.error('Erro:', error);
    }
}

// URL da API de personagens de Harry Potter
const apiUrl = 'https://hp-api.herokuapp.com/api/characters/students';

// Realizando 4 requisições diferentes, pegando personagens com índices diferentes
fetchData(apiUrl, 'dado-1', 'img-1', 0);  
fetchData(apiUrl, 'dado-2', 'img-2', 1);  
fetchData(apiUrl, 'dado-3', 'img-3', 2);  
fetchData(apiUrl, 'dado-4', 'img-4', 3);  
