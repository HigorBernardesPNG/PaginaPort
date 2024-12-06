// Função para importar o conteúdo de um arquivo HTML e inserir em um elemento específico
function importarHTML(caminhoDoArquivo, idElementoDestino) {

    console.log("teste");

    // Usando fetch para carregar o conteúdo do arquivo HTML
    fetch(caminhoDoArquivo)
        .then(response => {
            // Verificando se a requisição foi bem-sucedida
            if (!response.ok) {
                alert ("Erro de conexão. Tente recarregar o site, caso o problema persista, contate os administradores.");
            }
            return response.text(); // Retorna o conteúdo do arquivo como texto
        })
        .then(data => {
            // Inserindo o conteúdo carregado no elemento destino
            document.getElementById(idElementoDestino).innerHTML = data;
        })
        .catch(error => {
            console.error(error); // Caso ocorra algum erro
        });
}

// - Chamando a função -

importarHTML('../HtmlExport/header.html', 'secaoHeader');

