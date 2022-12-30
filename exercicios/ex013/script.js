function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = 22
    //var minuto = data.getMinutes()
    //var segundo = data.getSeconds()
    
    
    msg.innerHTML = `Agora são ${hora}`

if (hora >= 0 && hora < 12) {
    //bom dia
    img.src = 'imagens/manha.png'
} else if(hora >= 12 && hora < 18){
    //boa tarde
    img.src = 'imagens/tarde.png'
} else {
    img.src = 'imagens/noite.png'

}
}