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
  <div class="menu">
    <ul class="menu-forma">
      <li class="menu-itens menu-item-1"><a class="caixa-menu caixa-1" href="#">Item da lista 1</a></li>
      <li class="menu-itens menu-item-2"><a class="caixa-menu caixa-2" href="#">Item da lista 2</a></li>
      <li class="menu-itens menu-item-3"><a class="caixa-menu caixa-3" href="#">Item da lista 3</a></li>
      <li class="menu-itens menu-item-4"><a class="caixa-menu caixa-4" href="#">Item da lista 4</a></li>
    </ul>
  </div>
    <div class="titulo" onclick="alterarFundo()">
        <h2 id="Jornal">Jornal Ameno</h2>
        <h5 id="Jornal_sub">"As noticias mais inacreditáveis de todos os tempos"</h5>
    </div>
    <br>
    <div class="subtitulo">
        <h1 id="subtitulo_titulo">Noticias Novas!</h1>
        <h3 style="text-align: center;">Clique nas imagens para ter a noticia completa!</h3>
        <br>
    </div>
    <div class="campo_noticias">
    <div id="sup_esquerdo">
        <img onmouseover="aumentarImagemSupEsquerdo()" onmouseout="diminuirImagemSupEsquerdo()" onclick="funcaoSupEsquerdo()" id="imagem_sup_esquerdo" src="https://s2.glbimg.com/FueGRE6zKxb8xQBG2c6WuEkVWgI=/382x0:1758x774/540x304/smart/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/P/1/3APtO6QXiHtV8YKvpBUQ/corinthians-ituano2.png" alt="teste">
        <hr  width="99%" size="5" color="red" style="margin-bottom: 20px;">
        <h4 id="titulo_sup_esquerdo">Corinthians tropeça de novo e vê classificação mais distante</h4>
        <p id="texto_sup_esquerdo" style='text-align: center;'>Em estádio vazio, time voltou a perder gols e precisa torcer contra o Guarani amanhã.</p>

    </div>

    <div id="central_direito">
        <img onmouseover="aumentarImagemCentralDireito()" onmouseout="diminuirImagemCentralDireito()" onclick="funcaoCentralDireito()" id="imagem_central_direito" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FB93uZPvThKc%2Fmaxresdefault.jpg&f=1&nofb=1" alt="imagem teste">
        <h4 id="titulo_central_direito">Brasil tem 176 casos de coronavírus, segundo relatório do Ministério da Saúde</h4>
        <p id="texto_central_direito"> No relatório, São Paulo é o estado com o maior número de casos confirmados, com 112. Isso representa 63,6% de todos os casos no país. O Rio de Janeiro é o segundo estado com mais casos, com 24. </p>
        <br>
    </div>
    <div id="central_inferior">
    <img onclick="funcaoCentralInferior()" onmouseover="aumentarImagemCentralInferior()" onmouseout="diminuirImagemCentralInferior()" id="imagem_central_inferior" src="https://s2.glbimg.com/_hxOPqGWPifH3bG5_lhslEHhAsU=/0x240:1280x960/540x304/smart/filters:max_age(3600)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2020/S/I/oExxUuSXSVzby6Dt7mAA/whatsapp-image-2020-03-15-at-13.23.43.jpeg" alt="imagem teste">
        <h4 id="titulo_central_inferior">Mesmo com o surto do COVID-19, apoiadores de Bolsonaro vão as ruas</h4>
        <p id="texto_central_inferior"> Apesar da orientação de autoridades da Saúde de vários estados e da Organização Mundial da Saúde (OMS) para suspender a realização de eventos com grandes aglomerações para evitar a disseminação do novo coronavírus (Sars-Cov-2), apoiadores do governo não atenderam ao apelo. </p>
    </div>
    </div>
</body>

</html>
