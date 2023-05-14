const botaoAlterarTema = document.getElementById("botao-alterar-tema");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".imagem-botao")

botaoAlterarTema.addEventListener("click", () => {

    const modoEscuroEstaAtivo = body.classList.contains("modo-escuro")

    if (modoEscuroEstaAtivo) {
        body.classList.remove("modo-escuro")

        //voltar botao para o sol
        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png")

    } else {

        //alterar para tema escuro e trocar imagem para a lua

        body.classList.add("modo-escuro")

        imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png")

        //voltar para o tema claro e trocar imagem para o sol
    }

})