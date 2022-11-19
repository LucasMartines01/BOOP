b_usuario.innerHTML = sessionStorage.NOME_USUARIO;

var contador = 0
var pontos = 0
var resposta = ''
const inicioQuiz = document.querySelector('.iniciar')
const divQuiz = document.querySelector('.iniciarQuiz')
const conteudox = document.querySelector('.conteudoQuiz')

inicioQuiz.addEventListener("click", () => {
    divQuiz.style.display = 'none'
    conteudox.style.display = 'flex'
    atualizar();
})


function atualizar() {
    const Perguntas = [{
        pergunta: "Agora vocês podem me admirar",
        resposta: [{ text: "Ahri", isCorrect: false },
        { text: "Renata Glasc", isCorrect: false },
        { text: "Qiyana", isCorrect: true },
        { text: "Evelynn", isCorrect: false }
        ]

    },
    {
        pergunta: "Precisão é a diferença entre um açougueiro e um cirurgião",
        resposta: [{ text: "Camille", isCorrect: true },
        { text: "Shen", isCorrect: false },
        { text: "Kennen", isCorrect: false },
        { text: "Olaf", isCorrect: false }
        ]

    },
    {
        pergunta: "Não confie em nada além da sua força",
        resposta: [{ text: "Darius", isCorrect: false },
        { text: "Trundle", isCorrect: false },
        { text: "Ornn", isCorrect: false },
        { text: "Sejuani", isCorrect: true }
        ]

    },
    {
        pergunta: "A rosa negra irá desabrochar novamente",
        resposta: [{ text: "Zyra", isCorrect: false },
        { text: "Illaoi", isCorrect: false },
        { text: "Leblanc", isCorrect: true },
        { text: "Gwen", isCorrect: false }
        ]

    },
    {
        pergunta: "Enquanto eu viver ninguém há de sofrer",
        resposta: [{ text: "Seraphine", isCorrect: false },
        { text: "Morgana", isCorrect: false },
        { text: "Janna", isCorrect: false },
        { text: "Soraka", isCorrect: true }
        ]

    },
    {
        pergunta: "Eu sou o terror de todos que se opõem à mim",
        resposta: [{ text: "Darius", isCorrect: false },
        { text: "Nocturne", isCorrect: false },
        { text: "Shyvana", isCorrect: true },
        { text: "Mordekaiser", isCorrect: false }
        ]

    },
    {
        pergunta: "Vão tremer diante da minha perfeição",
        resposta: [{ text: "Ahri", isCorrect: false },
        { text: "Leona", isCorrect: false },
        { text: "Diana", isCorrect: false },
        { text: "Kayle", isCorrect: true }
        ]

    }
    ]

    const frase = document.querySelector('#pergunta')
    const alternativa1 = document.querySelector('#op1')
    const alternativa2 = document.querySelector('#op2')
    const alternativa3 = document.querySelector('#op3')
    const alternativa4 = document.querySelector('#op4')

    frase.innerText = Perguntas[contador].pergunta
    alternativa1.innerText = Perguntas[contador].resposta[0].text
    alternativa2.innerText = Perguntas[contador].resposta[1].text
    alternativa3.innerText = Perguntas[contador].resposta[2].text
    alternativa4.innerText = Perguntas[contador].resposta[3].text

    alternativa1.value = Perguntas[contador].resposta[0].isCorrect
    alternativa2.value = Perguntas[contador].resposta[1].isCorrect
    alternativa3.value = Perguntas[contador].resposta[2].isCorrect
    alternativa4.value = Perguntas[contador].resposta[3].isCorrect

    alternativa1.addEventListener("click", () => {
        op1.style.color = '#000000'
        op2.style.color = '#FFFFFF'
        op3.style.color = '#FFFFFF'
        op4.style.color = '#FFFFFF'
        op1.style.backgroundColor = "#FFFFFF";
        op2.style.backgroundColor = "#000000";
        op3.style.backgroundColor = "#000000";
        op4.style.backgroundColor = "#000000";
        resposta = alternativa1.value;
    })

    alternativa2.addEventListener("click", () => {
        op1.style.color = '#FFFFFF'
        op2.style.color = '#000000'
        op3.style.color = '#FFFFFF'
        op4.style.color = '#FFFFFF'
        op1.style.backgroundColor = "#000000";
        op2.style.backgroundColor = "#FFFFFF";
        op3.style.backgroundColor = "#000000";
        op4.style.backgroundColor = "#000000";
        resposta = alternativa2.value;
    })

    alternativa3.addEventListener("click", () => {
        op1.style.color = '#FFFFFF'
        op2.style.color = '#FFFFFF'
        op3.style.color = '#000000'
        op4.style.color = '#FFFFFF'
        op1.style.backgroundColor = "#000000";
        op2.style.backgroundColor = "#000000";
        op3.style.backgroundColor = "#FFFFFF";
        op4.style.backgroundColor = "#000000";
        resposta = alternativa3.value;
    })

    alternativa4.addEventListener("click", () => {
        op1.style.backgroundColor = "#000000";
        op2.style.backgroundColor = "#000000";
        op3.style.backgroundColor = "#000000";
        op1.style.color = '#FFFFFF'
        op2.style.color = '#FFFFFF'
        op3.style.color = '#FFFFFF'
        op4.style.color = '#000000'
        op4.style.backgroundColor = "#FFFFFF";
        resposta = alternativa4.value;
    })
}

const respondeu = document.querySelector('#responder')

respondeu.addEventListener("click", () => {
    if (resposta == "true") {
        pontos++
    }
    else {
        pontos = pontos
    }

    if (contador < 6) {
        contador++
        atualizar();
    }
    else {
        finalizarQuiz();
    }
})

function finalizarQuiz() {
    const conteudo = document.querySelector('.conteudoQuiz')
    const nota = document.querySelector('.finalizarQuiz')
    conteudo.style.display = 'none'
    nota.style.display = 'flex'
    if (pontos <= 3) {
        imagem__nota.src = 'img/AmumuIcon_16.webp'
        nota.style.backgroundColor = '#000000'
        nota.style.color = '#FFFFFF'
        botao__finalizar.style.backgroundColor = '#FFFFFF'
        botao__finalizar.style.color = '#000000'
    }
    else if (pontos <= 6) {
        imagem__nota.src = 'img/gif__vi.gif'
        nota.style.backgroundColor = '#000000'
        nota.style.color = '#FFFFFF'
        botao__finalizar.style.backgroundColor = '#FFFFFF'
        botao__finalizar.style.color = '#000000'
    }
    else {
        imagem__nota.src = 'img/Zilean_Gif.webp'
        nota.style.backgroundColor = '#000000'
        nota.style.color = '#FFFFFF'
        botao__finalizar.style.backgroundColor = '#FFFFFF'
        botao__finalizar.style.color = '#000000'
    }
    notaFinal.innerHTML = `Você acertou: ${pontos} de 7!`
}

function finalizar() {
    window.location = 'quiz.html'
}