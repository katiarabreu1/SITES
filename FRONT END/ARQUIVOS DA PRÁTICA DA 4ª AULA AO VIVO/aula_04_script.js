/* =====================================================
   SCRIPT.JS
   Aula 04 - Introdução ao JavaScript

   Objetivo:
   Adicionar interatividade na landing page/currículo
   do Professor Rodolfo Terra.

   Neste arquivo vamos trabalhar:
   - alert()
   - console.log()
   - variáveis
   - seleção de elementos HTML
   - eventos de clique
   - alteração de texto
   - alteração de estilo
   - contador
   - data atual
   - validação de formulário
===================================================== */


/* =====================================================
   1. MENSAGEM INICIAL
   ===================================================== */

/*
O alert() exibe uma mensagem na tela
quando a página é carregada.
*/
alert("Bem-vindo ao currículo do Professor Rodolfo Terra!");



/* =====================================================
   2. VARIÁVEIS
   ===================================================== */

/*
Variáveis armazenam informações.

let é usado para criar uma variável
que pode ter seu valor alterado depois.
*/
let nome = "Rodolfo Terra";
let cargo = "Engenheiro de Dados AWS";

/*
console.log() exibe informações no console do navegador.

Para visualizar:
1. Abra a página no navegador
2. Pressione F12
3. Clique na aba Console
*/
console.log(nome);
console.log(cargo);



/* =====================================================
   3. ALTERANDO O TÍTULO PRINCIPAL
   ===================================================== */

/*
document representa toda a página HTML.

getElementById() busca um elemento pelo seu ID.

Para este código funcionar, o HTML precisa ter:
<h2 id="titulo-principal">Bem-vindo ao meu currículo online</h2>
*/
let tituloPrincipal = document.getElementById("titulo-principal");

/*
Antes de alterar, verificamos se o elemento existe.
Isso evita erro caso o ID não esteja no HTML.
*/
if (tituloPrincipal) {

    /*
    innerHTML altera o conteúdo interno de uma tag HTML.
    */
    tituloPrincipal.innerHTML = "Bem-vindo ao meu Portfólio Profissional";

}



/* =====================================================
   4. BOTÃO DE MENSAGEM
   ===================================================== */

/*
Busca no HTML um botão com o ID btnMensagem.

Exemplo no HTML:
<button id="btnMensagem">Clique aqui</button>
*/
let botaoMensagem = document.getElementById("btnMensagem");

/*
Se o botão existir, adicionamos um evento nele.
*/
if (botaoMensagem) {

    /*
    addEventListener() fica "escutando" uma ação.

    Neste caso:
    - evento: click
    - ação: executar uma função
    */
    botaoMensagem.addEventListener("click", function () {

        alert("Obrigado por visitar meu currículo!");

    });

}



/* =====================================================
   5. BOTÃO PARA ALTERAR COR DO FUNDO
   ===================================================== */

/*
Busca o botão que irá alterar a cor da página.

Exemplo no HTML:
<button id="btnCor">Alterar cor</button>
*/
let botaoCor = document.getElementById("btnCor");

/*
Variável para controlar o estado atual.
false = tema claro
true = tema escuro
*/
let modoEscuro = false;

if (botaoCor) {

    botaoCor.addEventListener("click", function () {

        if (modoEscuro === false) {

            /*
            Ativa modo escuro
            */

            document.body.style.backgroundColor = "#111827";
            document.body.style.color = "#ffffff";

            botaoCor.innerHTML = "Voltar Tema Claro";

            modoEscuro = true;

        } else {

            /*
            Volta para o tema original
            */

            document.body.style.backgroundColor = "#f4f7fb";
            document.body.style.color = "#1f2937";

            botaoCor.innerHTML = "Modo Escuro";

            modoEscuro = false;
        }

    });

}



/* =====================================================
   6. MOSTRAR DATA ATUAL
   ===================================================== */

/*
Date() cria um objeto com a data e hora atuais.
*/
let dataHoje = new Date();

/*
Busca um elemento no HTML para mostrar a data.

Exemplo no HTML:
<p id="dataAtual"></p>
*/
let campoData = document.getElementById("dataAtual");

if (campoData) {

    /*
    toLocaleDateString() formata a data
    conforme o idioma/localidade.
    */
    campoData.innerHTML = dataHoje.toLocaleDateString("pt-BR");

}



/* =====================================================
   7. CONTADOR DE CLIQUES
   ===================================================== */

/*
Criamos uma variável contador começando em zero.
*/
let contador = 0;

/*
Busca o elemento onde o número será exibido.

Exemplo no HTML:
<h3 id="contador">0</h3>
*/
let campoContador = document.getElementById("contador");

/*
Busca o botão que aumenta o contador.

Exemplo no HTML:
<button id="btnContador">Aumentar</button>
*/
let botaoContador = document.getElementById("btnContador");

if (campoContador && botaoContador) {

    botaoContador.addEventListener("click", function () {

        /*
        contador++ significa:
        contador = contador + 1
        */
        contador++;

        /*
        Atualiza o número na tela.
        */
        campoContador.innerHTML = contador;

    });

}



/* =====================================================
   8. CLIQUE NA FOTO DE PERFIL
   ===================================================== */

/*
Busca a imagem de perfil.

Para funcionar, a imagem precisa ter:
id="fotoPerfil"
*/
let fotoPerfil = document.getElementById("fotoPerfil");

if (fotoPerfil) {

    fotoPerfil.addEventListener("click", function () {

        alert("Olá, eu sou Rodolfo Terra!");

    });

}



/* =====================================================
   9. MOSTRAR E ESCONDER COMPETÊNCIAS
   ===================================================== */

let botaoCompetencias =
    document.getElementById("btnCompetencias");

let textoCompetencias =
    document.getElementById("textoCompetencias");

/*
Controla se o texto está visível ou não.

false = escondido
true = visível
*/
let competenciasVisiveis = false;

if (botaoCompetencias && textoCompetencias) {

    botaoCompetencias.addEventListener("click", function () {

        if (competenciasVisiveis === false) {

            textoCompetencias.innerHTML =
                "Minhas principais competências são: AWS Glue, Athena, Terraform, SQL, PySpark, Python, Data Lake e Power BI.";

            botaoCompetencias.innerHTML =
                "Esconder Competências";

            competenciasVisiveis = true;

        } else {

            textoCompetencias.innerHTML = "";

            botaoCompetencias.innerHTML =
                "Mostrar Competências";

            competenciasVisiveis = false;

        }

    });

}


/* =====================================================
   10. MOSTRAR E ESCONDER CERTIFICAÇÕES
   ===================================================== */

let botaoCertificacoes =
    document.getElementById("btnCertificacoes");

let textoCertificacoes =
    document.getElementById("textoCertificacoes");

/*
Controla se as certificações estão visíveis.

false = escondidas
true = visíveis
*/
let certificacoesVisiveis = false;

if (botaoCertificacoes && textoCertificacoes) {

    botaoCertificacoes.addEventListener("click", function () {

        if (certificacoesVisiveis === false) {

            textoCertificacoes.innerHTML =
                "Certificações: AWS Certified Cloud Practitioner, AZ-900 Microsoft Azure Fundamentals e Business Metrics for Data-Driven Companies.";

            botaoCertificacoes.innerHTML =
                "Esconder Certificações";

            certificacoesVisiveis = true;

        } else {

            textoCertificacoes.innerHTML = "";

            botaoCertificacoes.innerHTML =
                "Mostrar Certificações";

            certificacoesVisiveis = false;

        }

    });

}



/* =====================================================
   11. VALIDAÇÃO DO FORMULÁRIO
   ===================================================== */

/*
Busca o formulário pelo ID.

Para funcionar, o form precisa estar assim:
<form id="formContato">
*/
let formulario = document.getElementById("formContato");

if (formulario) {

    /*
    O evento submit acontece quando o usuário
    tenta enviar o formulário.
    */
    formulario.addEventListener("submit", function (evento) {

        /*
        preventDefault() impede o comportamento padrão
        do formulário, que seria recarregar a página.
        */
        evento.preventDefault();

        /*
        Pegamos os valores digitados nos campos.

        Para funcionar, os inputs precisam ter:
        id="nome"
        id="email"
        id="assunto"
        id="mensagem"
        */
        let campoNome = document.getElementById("nome").value;
        let campoEmail = document.getElementById("email").value;
        let campoAssunto = document.getElementById("assunto").value;
        let campoMensagem = document.getElementById("mensagem").value;

        /*
        trim() remove espaços em branco
        do começo e do final do texto.
        */
        if (campoNome.trim() === "") {

            alert("Por favor, digite seu nome.");

        } else if (campoEmail.trim() === "") {

            alert("Por favor, digite seu e-mail.");

        } else if (campoAssunto.trim() === "") {

            alert("Por favor, digite o assunto.");

        } else if (campoMensagem.trim() === "") {

            alert("Por favor, digite sua mensagem.");

        } else {

            alert("Mensagem enviada com sucesso!");

            /*
            reset() limpa os campos do formulário.
            */
            formulario.reset();

        }

    });

}



/* =====================================================
   12. ALTERAR TEXTO DO RODAPÉ
   ===================================================== */

/*
Busca um elemento do rodapé.

Exemplo no HTML:
<p id="textoRodape">Professor Rodolfo Terra...</p>
*/
let textoRodape = document.getElementById("textoRodape");

if (textoRodape) {

    textoRodape.innerHTML =
        "Professor Rodolfo Terra | Engenheiro de Dados AWS | Aula de JavaScript";

}



/* =====================================================
   13. EXIBIR ANO ATUAL
   ===================================================== */

/*
getFullYear() retorna apenas o ano atual.

Exemplo:
2026
*/
let anoAtual = new Date().getFullYear();

/*
Busca onde o ano será exibido.

Exemplo no HTML:
<span id="anoAtual"></span>
*/
let campoAno = document.getElementById("anoAtual");

if (campoAno) {

    campoAno.innerHTML = anoAtual;

}



/* =====================================================
   14. MENSAGEM FINAL NO CONSOLE
   ===================================================== */

/*
Essa mensagem aparece apenas no console do navegador.

Serve para confirmar que o arquivo JavaScript
foi carregado corretamente.
*/
console.log("Arquivo script.js carregado com sucesso!");