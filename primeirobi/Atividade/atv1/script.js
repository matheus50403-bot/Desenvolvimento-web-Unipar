// ==============================
// QUIZ DO GRÊMIO
// ==============================

// Seleciona o formulário
const formulario = document.querySelector("form");

// Cria o espaço onde o resultado será exibido
const resultado = document.createElement("div");

// Adiciona a classe CSS ao resultado
resultado.classList.add("resultado");

// Coloca o resultado depois do formulário
formulario.appendChild(resultado);


// ==============================
// ENVIO DO FORMULÁRIO
// ==============================

formulario.addEventListener("submit", function (evento) {

    // Impede que a página seja recarregada
    evento.preventDefault();


    // ==============================
    // GABARITO
    // ==============================

    const respostasCorretas = {

        questao1: "cesar",

        questao2: "hamburgo",

        questao3: "renato",

        questao4: "1989",

        questao5: "olimpico"

    };


    // ==============================
    // CONTADOR DE ACERTOS
    // ==============================

    let acertos = 0;

    const totalQuestoes = 5;


    // ==============================
    // VERIFICA AS RESPOSTAS
    // ==============================

    for (let questao in respostasCorretas) {

        const respostaSelecionada = document.querySelector(
            `input[name="${questao}"]:checked`
        );

        if (
            respostaSelecionada &&
            respostaSelecionada.value === respostasCorretas[questao]
        ) {

            acertos++;

        }

    }


    // ==============================
    // PEGA O NOME
    // ==============================

    const nome = document.querySelector("#nome").value;


    // ==============================
    // CRIA A MENSAGEM
    // ==============================

    let mensagem = "";


    if (acertos === 5) {

        mensagem = `
            <h3>🏆 Parabéns, ${nome}!</h3>

            <p>
                Você acertou
                <strong>${acertos} de ${totalQuestoes}</strong>
                questões!
            </p>

            <p>
                Você realmente conhece a história do Tricolor! 🔵⚫⚪
            </p>
        `;

    } else if (acertos >= 3) {

        mensagem = `
            <h3>👏 Muito bem, ${nome}!</h3>

            <p>
                Você acertou
                <strong>${acertos} de ${totalQuestoes}</strong>
                questões!
            </p>

            <p>
                Você conhece bastante da história do Grêmio!
            </p>
        `;

    } else {

        mensagem = `
            <h3>⚽ Continue tentando, ${nome}!</h3>

            <p>
                Você acertou
                <strong>${acertos} de ${totalQuestoes}</strong>
                questões.
            </p>

            <p>
                Que tal conhecer um pouco mais da história do Grêmio
                e tentar novamente?
            </p>
        `;

    }


    // ==============================
    // MOSTRA O RESULTADO
    // ==============================

    resultado.innerHTML = mensagem;


    // ==============================
    // ROLA A PÁGINA ATÉ O RESULTADO
    // ==============================

    resultado.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});