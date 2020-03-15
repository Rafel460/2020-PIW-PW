<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="teste.css">
    <link href="https://fonts.googleapis.com/css?family=Bowlby+One+SC|Carter+One|Cutive|IM+Fell+English|Patua+One|Tinos&display=swap" rel="stylesheet"> 
    <script src="teste.js"></script>
    <title>Pagina PIW</title>

 
</head>
<body>
    <div class="titulo" onclick="alterarFundo()">
        <h2 id="Jornal">Jornal Ameno</h2>
        <h5 id="Jornal_sub">"As noticias mais inacreditáveis de todos os tempos"</h5>
    </div>
    <br>
    <div class="subtitulo">
        <h1 style="text-align: center; font-family: 'Carter One';">Noticias Novas!</h1>
        <h3 style="text-align: center;">Clique nas imagens para ter a noticia completa!</h3>
        <br>
    </div>
    <div class="campo_noticias">
    <div id="sup_esquerdo">
        <img onmouseover="aumentarImagemSupEsquerdo()" onmouseout="diminuirImagemSupEsquerdo()" onclick="funcaoSupEsquerdo()" id="imagem_sup_esquerdo" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.F3ZXJDddRVJBeQ8Vm_aepQD6D6%26pid%3DApi&f=1" alt="teste">
        <hr  width="99%" size="5" color="red" style="margin-bottom: 20px;">
        <h4 id="titulo_sup_esquerdo">Texto Noticia 1</h4>
        <p id="texto_sup_esquerdo" style='text-align: center;'>Coloca um paragrafo aqui e abaixo disso um botao que expande</p>
        
    </div>

    <div id="central_direito">
        <img onclick="funcaoCentralDireito()" id="imagem_central_direito" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP._Am20gSHjCXhhCN-W86_zgHaEK%26pid%3DApi&f=1" alt="imagem teste">
        <h4 id="titulo_central_direito">Texto Noticia 2</h4>
        <p id="texto_central_direito">Colocarei ouro texto para tentar tornar esse negocio bonito!</p>
        <br><br>
    </div>

    </div>
</body>

</html>
