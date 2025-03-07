// Função para importar o conteúdo de um arquivo HTML e inserir em um elemento específico
function importarHTML(caminhoDoArquivo, idElementoDestino) {

    fetch(caminhoDoArquivo)
        .then(response => {

            if (!response.ok) {
                console.log ("Erro de conexão. Tente recarregar o site, caso o problema persista, contate os administradores.");
            }
            return response.text(); 
        })
        .then(data => {
            document.getElementById(idElementoDestino).innerHTML = data;
        })
        .catch(error => {
            console.error(error); 
        });
}

importarHTML('../../HtmlExport/header.html', 'secaoHeader');

importarHTML('../../HtmlExport/footer.html', 'secaoFooter');

importarHTML('../../Paginas/modalCadastro/modalCadastro.html', 'secaoModalCadastro');

importarHTML('../../Paginas/modalLogin/modalLogin.html', 'secaoModalLogin');