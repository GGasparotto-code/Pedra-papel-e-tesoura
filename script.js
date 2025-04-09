function jogar() {
    //Pergunta o nome do jogador
    let nomeJogador = prompt("Qual é o seu nome?");
    if (!nomeJogador || nomeJogador.trim() == "") {
        alert("Você precisa digitar um nome para jogar!");
        return;
    }

    let idade = prompt(`Olá, ${nomeJogador}! Quantos anos você tem?`);
    idade = parseInt(idade); // Converte a entrada para número

    if (isNaN(idade)) {
        alert("Valor inválido! Digite um número válido para idade.");
        return; // Encerra o jogo se a idade não for válida
    }

    if (idade < 18) {
        alert(`Ops, ${nomeJogador}, você NÃO pode jogar! =C`);
        return; // Encerra o jogo se o jogador for menor de idade
    }

    alert(`Ok, ${nomeJogador}, vamos começar!`);

    // Opções do jogo
    const opcoes = ["pedra", "papel", "tesoura"];

    // Obter a escolha do jogador
    function obterEscolhaJogador() {
        let escolhaJogador = prompt(`${nomeJogador}, Escolha entre: 
            1-Pedra, 
            2-papel 
            3-tesoura 
            Ou digite o nome (Pedra, Papel ou Tesoura):`
        ).toLowerCase();

        // Validação da entrada
        if (escolhaJogador === "1" || escolhaJogador === "pedra") {
            return 1; // Pedra
        } else if (escolhaJogador === "2" || escolhaJogador === "papel") {
            return 2; // Papel
        } else if (escolhaJogador === "3" || escolhaJogador === "tesoura") {
            return 3; // Tesoura
        } else {
            alert("Escolha inválida. Escolha entre 1, 2, 3 ou Pedra, Papel ou Tesoura.");
            return obterEscolhaJogador(); // Retorna para o começo, pedindo uma entrada válida
        }
    }

    const escolhaJogador = obterEscolhaJogador();
    const escolhaComputador = Math.floor(Math.random() * 3) + 1; // 1, 2 ou 3

    // Apresenta a escolha do computador
    alert(`A escolha do computador foi: ${opcoes[escolhaComputador - 1]}`);

    // Determina o vencedor
    let resultado = "";
    if (escolhaJogador === escolhaComputador) {
        resultado = "Empate!";
    } else if (
        (escolhaJogador === 1 && escolhaComputador === 3) || // Pedra vence Tesoura
        (escolhaJogador === 2 && escolhaComputador === 1) || // Papel vence Pedra
        (escolhaJogador === 3 && escolhaComputador === 2)    // Tesoura vence Papel
    ) {
        resultado = `${nomeJogador} venceu!`;
    } else {
        resultado = "Computador venceu!";
    }
 
    alert(resultado);
}