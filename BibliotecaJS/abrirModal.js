function configurarModal(idModal, idBotaoAbrir, idBotaoFechar) {
    function esperarElementoDisponivel(id, callback) {
        const verificarElemento = setInterval(() => {
            const elemento = document.getElementById(id);
            if (elemento) {
                clearInterval(verificarElemento);
                callback(elemento);
            }
        }, 100); 
    }

    esperarElementoDisponivel(idModal, (modal) => {
        esperarElementoDisponivel(idBotaoAbrir, (botaoAbrir) => {
            esperarElementoDisponivel(idBotaoFechar, (botaoFechar) => {
                console.log('Elementos do modal encontrados:', { modal, botaoAbrir, botaoFechar });

                function abrirModal() {
                    console.log(`Abrindo o seguinte modal: ${idModal}`);
                    modal.style.display = 'block';
                }

                function fecharModal() {
                    console.log(`Fechando o seguinte modal: ${idModal}`);
                    modal.style.display = 'none';
                }

                botaoAbrir.addEventListener('click', function () {
                    abrirModal();
                });

                botaoFechar.addEventListener('click', function () {
                    fecharModal();
                });
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', function () {
    console.log('DOM carregado.');

    configurarModal('modalCadastro', 'btnCadastroHeader', 'btnFecharModalCadastroHeader');
    configurarModal('modalLogin', 'btnLoginHeader', 'btnFecharModalLoginHeader'); // Exemplo de outro modal
});
