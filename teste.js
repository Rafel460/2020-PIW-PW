//funções menu

//Funções do plano de fundo
function alterarFundo(){
    document.querySelector(".titulo").style = "background: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F959c13ab1cc5b017a899efe1210b81aa%2Ftenor.gif%3Fitemid%3D16213530&f=1&nofb=1) repeat";
    document.querySelector(".titulo").style.backgroundSize = "250px 250px";
    document.getElementById("Jornal").style = "color : white";
    document.getElementById("Jornal_sub").style = "color: white";
    document.querySelector(".subtitulo").innerHTML = "<h2 style='font-size: 20px; text-align: center;'>Isso foi um Easter Egg, Parabéns</h2> <br>";
}

//Funções do canto-esquerdo
function aumentarImagemSupEsquerdo(){
    document.getElementById('imagem_sup_esquerdo').style = "width: 150%";
}
function diminuirImagemSupEsquerdo(){
    document.getElementById('imagem_sup_esquerdo').style = "width: 100%";
}
function funcaoSupEsquerdo(){
    var titulo = document.getElementById('titulo_sup_esquerdo').innerText;
    var texto = document.getElementById('texto_sup_esquerdo').innerText;
    var textocont1 = " O Corinthians empatou por 1 a 1 com o Ituano neste domingo, em Itaquera, pela décima rodada do Campeonato Paulista – o jogo foi de portões fechados por prevenção à pandemia de coronavírus. Após falha de Cássio, o time do interior saiu na frente com gol de Breno Lopes. O Timão igualou com Luan. É a sexta partida seguida do Corinthians sem vitória. O último triunfo no estadual foi no dia 2 de fevereiro, contra o Santos. De lá para cá, quatro empates e duas derrotas. Até por isso, o time alvinegro está ameaçado de ficar fora das quartas de final.";
    document.body.innerHTML = "<div class='vamo' style='padding: 15pt; border: 2px solid red; border-radius: 30px; max-width: 60%; margin-left: 20%;'> <h1 style='text-align: center; font-family: Carter One;'>"+titulo+"</h1> <p style='text-align: center;'>"+texto+textocont1+"</p> <br> <a href='https://globoesporte.globo.com/sp/futebol/campeonato-paulista/jogo/15-03-2020/corinthians-ituano.ghtml' target='_blank' style='font-family: Bowlby One; text-align: center;'>Disponivel aqui</a> <br> <p style='text-align: center'><b>Recarregue a pagina para voltar</p></div>";
}

//Funções do centro-direita
function funcaoCentralDireito(){
    var titulo = document.getElementById('titulo_central_direito').innerText;
    var texto = document.getElementById('texto_central_direito').innerText;
    var textocont1 = "No relatório, São Paulo é o estado com o maior número de casos confirmados, com 112. Isso representa 63,6% de todos os casos no país. O Rio de Janeiro é o segundo estado com mais casos, com 24. ";
    var textocont2 = "Em relação ao relatório divulgado no sábado, Amazonas e Sergipe tiveram os primeiros casos confirmados pelo Ministério da Saúde. ";
    var textocont3= "O Ministério da Saúde informou ainda que nas duas cidades há casos de transmissão comunitária. De acordo com a pasta, os casos de transmissão comunitária são aqueles em que não é possível identificar a trajetória de infecção do vírus. ";
    document.body.innerHTML = "<div class='vamo' style='padding: 15pt; border: 2px solid red; border-radius: 30px; max-width: 60%; margin-left: 20%;'> <h1 style='text-align: center; font-family: Carter One;'>"+titulo+"</h1> <p style='text-align: center;'>"+texto+textocont1+textocont2+textocont3+"</p> <br> <a href='https://g1.globo.com/bemestar/coronavirus/noticia/2020/03/15/brasil-tem-176-casos-de-coronavirus-segundo-relatorio-do-ministerio-da-saude.ghtml' target='_blank' style='font-family: Bowlby One; text-align: center;'>Disponivel aqui</a> <br> <p style='text-align: center'><b>Recarregue a pagina para voltar</p></div>";
}
function aumentarImagemCentralDireito(){
    document.getElementById('imagem_central_direito').style = "width: 100%";

}
function diminuirImagemCentralDireito(){
    document.getElementById('imagem_central_direito').style = "width: 80%";
}

//Funções do centro-inferior
function funcaoCentralInferior(){
    var titulo = document.getElementById('titulo_central_inferior').innerText;
    var texto = document.getElementById('texto_central_inferior').innerText;
    var textocont1 = "Capitais brasileiras e cidades do interior registraram, na manhã deste domingo (15), atos de apoio ao governo de Jair Bolsonaro. Capitais como Rio de Janeiro (RJ), Belo Horizonte (MG), Brasília (DF), Belém (PA), Maceió (AL) registraram protestos pacíficos. ";
    var textocont2 = "Na quinta-feira (12), em pronunciamento em rede nacional, Bolsonaro afirmou que as manifestações marcadas para este domingo (15) deveriam ser repensadas diante do cenário de pandemia do coronavírus. O presidente havia dito que os movimentos eram 'legítimos e espontâneos', mas que não se podia colocar em risco a saúde da população em razão da pandemia de Covid-19. ";
    var textocont3= "Porém, neste domingo, em uma rede social, o presidente compartilhou vídeos de manifestações em cidades como Salvador, Belém e Brasília. ";
    document.body.innerHTML = "<div class='vamo' style='padding: 15pt; border: 2px solid red; border-radius: 30px; max-width: 60%; margin-left: 20%;'> <h1 style='text-align: center; font-family: Carter One;'>"+titulo+"</h1> <p style='text-align: center;'>"+textocont1+texto+textocont2+textocont3+"</p> <br> <a href='https://g1.globo.com/politica/noticia/2020/03/15/cidades-brasileiras-tem-atos-pro-governo.ghtml' target='_blank' style='font-family: Bowlby One; text-align: center;'>Disponivel aqui</a> <br> <p style='text-align: center'><b>Recarregue a pagina para voltar</p></div>";
}
function aumentarImagemCentralInferior(){
    document.getElementById('imagem_central_inferior').style = "width: 100%";

}
function diminuirImagemCentralInferior(){
    document.getElementById('imagem_central_inferior').style = "width: 80%";
}
