//Array de todos os objetos
let jogadores = [
    {nome: "Higor", vitorias: 0, empates: 0, derrotas: 0, pontos: 0},
    {nome: "Guilherme", vitorias: 0, empates: 0, derrotas: 0, pontos: 0},
    {nome: "Paulo", vitorias: 0, empates: 0, derrotas: 0, pontos: 0},
    {nome: "Rafa", vitorias: 0, empates: 0, derrotas: 0, pontos: 0}
]

// Calculando os pontos
function calculaPontos(jogador) {
    let pontos = (jogador.vitorias * 3) + jogador.empates
    return pontos
}
//Exibindo os jogadores na tela com o uso do for
exibirJogadores(jogadores)

function exibirJogadores(jogadores) {
    
    let html5 = ""
    for(let i = 0; i < jogadores.length; i++) {
        html5 += "<tr><td>" + jogadores[i].nome + "</td>"
        html5 += "<td>"  + jogadores[i].vitorias + "</td>"
        html5 += "<td>" + jogadores[i].empates + "</td>"
        html5 += "<td>" + jogadores[i].derrotas + "</td>"
        html5 += "<td>" + jogadores[i].pontos + "</td>"
        html5 += "<td><button class= btn-style onclick='adicionarVitoria("+ i + ")'>Vitória</button></td>"
        html5 += "<td><button class= btn-style onclick='adicionarEmpate("+ i + ")'>Empate</button></td>"
        html5 += "<td><button class= btn-style onclick='adicionarDerrota("+ i + ")'>Derrota</button></tr></td>"

      
    }
    let tabelaJogadores = document.querySelector("tbody#tabelaJogadores")
    tabelaJogadores.innerHTML = html5
    jogadores.pontos = calculaPontos(jogadores[0]) // Aqui como se fosse a "rafa" porém utilizando uma array com os objetos.    
}
//Adicionando jogadores
function player_add() {
  let playerName = document.querySelector("#addplayer").value
  let newPlayer = {
    nome: playerName,
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0,  
    playerName = ""
  }
  jogadores.push(newPlayer)
  exibirJogadores(jogadores)
  //Tratamento de erros
  if(playerName.length == 0) {
    alert("Digite um nick válido !")
  }
  
}

//Reiniciando os pontos do jogo
function Reiniciar(valores = 0) {
  for(var i = 0; i < jogadores.length; i++){   
        jogadores[i].vitorias = valores
        jogadores[i].empates = valores
        jogadores[i].derrotas = valores
        jogadores[i].pontos = valores
        exibirJogadores(jogadores)
   }
}

//Botão vitória

function adicionarVitoria(i) {
  let jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadores(jogadores)
}
//Botão empate
function adicionarEmpate(i) {
  let jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadores(jogadores)
}
//Botão derrota
function adicionarDerrota(i) {
  let jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadores(jogadores)
 

}