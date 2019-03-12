let buttons = document.getElementsByClassName('runcode');
let textfields = document.getElementsByClassName('codefield');
let runcodesound = document.getElementById('runcodesound');
let currentid = '';

for(let i=0;i<buttons.length;i++){
    buttons[i].addEventListener('click', evaluate);
}

//spelar upp ett ljud när man trycker på "kör kod"-knapparna. Kör även koden i motsvarande textarea
function evaluate(){
    let subjectnumber = this.id.substring(1) - 1;
    if(currentid!=''){
        animationreference.clearRect(0,0,300,200);
        cancelAnimationFrame(currentid);
    }
    runcodesound.play();
    eval(textfields[subjectnumber].value);
}