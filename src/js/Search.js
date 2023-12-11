function Search(){
    let input = document.getElementById('Search').value;
    input = input.toLowerCase();
    let x = document.getElementsByClassName('botao');

    for(i = 0; i < x.length; i++){
        if(!x[i].innerHTML.toLowerCase().includes(input)){
            x[i].style.display = "none"
        }
        else{
            x[i].style.display = "block"
        }
    }
}