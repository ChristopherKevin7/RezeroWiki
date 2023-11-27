var radio = document.querySelector('.manual-btn')
var cont = 1

document.getElementById('bt1').checked =true

setInterval(() => {
    proximaimg()
}, 5000)

function proximaimg(){
    cont++
    if(cont > 5){
        cont = 1
    }
document.getElementById("bt" + cont).checked =true

}