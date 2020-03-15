function alterarFundo(){
    document.querySelector(".titulo").style = "background: url(https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia1.tenor.com%2Fimages%2F959c13ab1cc5b017a899efe1210b81aa%2Ftenor.gif%3Fitemid%3D16213530&f=1&nofb=1) repeat";
    document.querySelector(".titulo").style.backgroundSize = "250px 250px";
    document.getElementById("Jornal").style = "color : white";
    document.getElementById("Jornal_sub").style = "color: white";
    document.querySelector(".subtitulo").innerHTML = "<h2 style='font-size: 20px; text-align: center;'>Isso foi um Easter Egg, Parabéns</h2> <br>";
}
function funcaoSupEsquerdo(){
    var titulo = document.getElementById('titulo_sup_esquerdo').innerText;
    var texto = document.getElementById('texto_sup_esquerdo').innerText;
    document.body.innerHTML = "<div class='vamo' style='padding: 15pt; border: 2px solid red; border-radius: 30px; max-width: 60%; margin-left: 20%;'> <h1 style='text-align: center; font-family: Carter One;'>"+titulo+"</h1> <p style='text-align: center;'>"+texto+"</p> <br> <p style='text-align: center'><b>Agora recarrega a pagina porque é só um teste mesmo</p></div>";
}