document.addEventListener('DOMContentLoaded', function() {
    function configurarModal(idModal, idBotaoAbrir, idBotaoFechar) {
        var modal = document.getElementById(idModal);
        var botaoAbrir = document.getElementById(idBotaoAbrir);
        var botaoFechar = document.getElementById(idBotaoFechar);

        if (!modal || !botaoAbrir || !botaoFechar) {
            console.error('Um ou mais elementos não foram encontrados. Verifique os IDs fornecidos.');
            return;
        }

        // Função para esconder o modal aplicando display: none com !important
        function esconderModal() {
            modal.style.setProperty('display', 'none', 'important');
            $('body').removeClass('modal-open'); // Remover a classe que impede a rolagem
            $('.modal-backdrop').remove(); // Remover a sobreposição do fundo
        }

        // Fechar o modal quando o botão de fechar for clicado
        botaoFechar.addEventListener('click', function() {
            $(`#${idModal}`).modal('hide');
            esconderModal();
        });

        // Fechar o modal ao clicar fora dele ou no botão de fechar
        $(`#${idModal}`).on('hidden.bs.modal', function() {
            esconderModal();
        });

        // Abrir o modal quando o botão abrir for clicado
        botaoAbrir.addEventListener('click', function() {
            $(`#${idModal}`).modal('show');
        });
    }
console.log ("sexo");
    // Exemplo de uso
    configurarModal('modalCadastro', 'img__button', 'btnCadastroHeader');
});
