let canvas = document.getElementById('movingstuff')
let cty = canvas.getContext('2d');
let anna = document.getElementById('anna');
let frida = document.getElementById('frida');
let ellinor = document.getElementById('ellinor');
let niklas = document.getElementById('niklas');

canvas.addEventListener('click', checkLink);

function Smiley(x, y, xv, yv, r, color, picture){
    this.x = x;
    this.y = y;
    this.xv = xv;
    this.yv = yv;
    this.r = r;
    this.color = color;
    this.picture = picture;
    this.move = function(){
        this.x += this.xv;
        this.y += this.yv;
        if (this.y>=150-this.r){
            this.y = 150-this.r;
            this.yv = this.yv*(-1); //studsfaktor
        } else {
            this.yv += .1; //gravitationsfaktor
        }
        if (this.x>300-this.r){
            this.x = 300-this.r;
            this.xv*=(-1);
        }
        if (this.x<this.r){
            this.x = this.r;
            this.xv*=(-1);
        }
    }
    //målar bild på person eller på en groda om foto inte inkluderats
    this.draw = function(){
        if(picture===""){
            cty.beginPath();
            cty.fillStyle = this.color;
            cty.arc(this.x, this.y, this.r, 0, 2*Math.PI);
            cty.fill();
            cty.fillRect(this.x-this.r,this.y+this.r-this.r/4,this.r*2,this.r/4);
            cty.fillStyle = 'black';
            cty.beginPath();
            cty.arc(this.x-this.r/2, this.y-this.r/2, this.r/2, 0, 2*Math.PI);
            cty.fill();
            cty.beginPath();
            cty.arc(this.x+this.r/2, this.y-this.r/2, this.r/2, 0, 2*Math.PI);
            cty.fill();
            cty.beginPath();
            cty.fillStyle = 'white';
            cty.arc(this.x,this.y+this.r/4,this.r/2, 0, Math.PI);
            cty.fill();
        } else {
            cty.drawImage(this.picture, this.x-this.r, this.y-this.r, this.r*2, this.r*2);
        }
    }
}
let smilies = [new Smiley(150,60,0,0,40,'lightcoral',''), new Smiley(20,110,1,0,20,'cadetblue',frida), new Smiley(70,100,1,0,20,'burlywood',anna), new Smiley(200,105,1,0,20,'burlywood',ellinor), new Smiley(250,100,1,0,20,'cadetblue', niklas)];
animateSmiley();

//målar upp och flyttar figurerna i smilies
function animateSmiley(){
    cty.clearRect(0,0,300,200);
    for(let i=0;i<smilies.length;i++){
        smilies[i].draw();
        smilies[i].move();
    }
    requestAnimationFrame(animateSmiley);
}
//öppnar en linkedin-länk om ett av ansiktena/grodorna blev klickad.
function checkLink(e){
    let rect = canvas.getBoundingClientRect();
    let x = e.clientX - rect.left, y = e.clientY - rect.top; //x,y relativt canvasen
    if(Math.pow((smilies[1].x-x),2)+Math.pow((smilies[1].y-y),2)<Math.pow(smilies[1].r,2)){
        open("https://www.linkedin.com/in/frida-schoultz-683162172/");
        return;
    }
    if(Math.pow((smilies[2].x-x),2)+Math.pow((smilies[2].y-y),2)<Math.pow(smilies[2].r,2)){
        open("https://www.linkedin.com/in/anna-zetterström-585259b0/");
        return;
    }
    if(Math.pow((smilies[3].x-x),2)+Math.pow((smilies[3].y-y),2)<Math.pow(smilies[3].r,2)){
        open("https://www.linkedin.com/in/ellinor-vase-38075716b/");
        return;
    }
    if(Math.pow((smilies[4].x-x),2)+Math.pow((smilies[4].y-y),2)<Math.pow(smilies[4].r,2)){
        open("https://www.linkedin.com/in/niklas-silfverhielm-58554116b/");
        return;
    }
    if(Math.pow((smilies[0].x-x),2)+Math.pow((smilies[0].y-y),2)<Math.pow(smilies[0].r,2)){
        open("https://www.w3schools.com/");
    }
}