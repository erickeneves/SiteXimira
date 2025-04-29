function esconder(){
    let dits = document.getElementsByClassName('ditadosximira');
    if (dits[0].style.display == 'none'){
        for (let i = 0;i < dits.length;i++){
            dits[i].style.display = 'block';
        }
    } else {
        for (let i = 0;i < dits.length;i++){
            dits[i].style.display = 'none';
        }
    }
}

function vinculaEvento(){
    document.getElementById("clkHide").addEventListener('click',esconder);
}