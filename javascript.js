/* Saker att förbättra:
Objekt bör ta canvasreferensen som argument så att koden kan återanvändas enklare
 */

//exempel 1
let rectcanvas = document.getElementById('rectcanvas');
let squarereference = rectcanvas.getContext('2d');
document.getElementById('b4').addEventListener('click', stopAnimating);
let bellsound = document.getElementById('bellsound');

squarereference.fillStyle = 'orange';
let xstart = 20, ystart = 20, xsize = 20, ysize = 60;
squarereference.fillRect(xstart, ystart, xsize, ysize);

//bonus 1
let face = document.getElementById('face');
let facereference = face.getContext('2d');
facereference.fillStyle = 'orange';
facereference.fillRect(0, 0, 100, 100); //huvud
facereference.fillStyle = 'white';
facereference.fillRect(10, 20, 30, 20);
facereference.fillRect(50, 20, 30, 20); //ögon
facereference.fillStyle = 'red';
facereference.fillRect(30, 70, 20, 20); //mun
facereference.fillStyle = 'pink';
facereference.fillRect(0, 55, 20, 10);
facereference.fillRect(65, 55, 20, 10); //blush
facereference.fillStyle = 'black';
facereference.fillRect(15, 25, 10, 10); //vänster pupill
facereference.fillRect(55, 25, 10, 10); //höger pupill
facereference.fillRect(35, 75, 10, 10); //mun

//exempel 2
let circleCanvas = document.getElementById('circleCanvas');
circlereference = circleCanvas.getContext('2d');

//rektangel
circlereference.beginPath();
circlereference.moveTo(20,10);
circlereference.lineTo(40,30);
circlereference.lineTo(20,50);
circlereference.lineTo(0,30);
circlereference.lineTo(20,10);
circlereference.strokeStyle = 'green';
circlereference.stroke();

//cirkelsektion
circlereference.beginPath();
circlereference.arc(70,30,20,0,Math.PI/2);
circlereference.lineTo(70,30);
circlereference.lineTo(90,30);
circlereference.fillStyle = 'orange';
circlereference.fill();

//bonus 2
let crown = document.getElementById('crown');
crownreference = crown.getContext('2d');

crownreference.beginPath();
crownreference.moveTo(0,50);
crownreference.moveTo(10,0);
crownreference.lineTo(20,50);
crownreference.lineTo(30,0);
crownreference.lineTo(40,50);
crownreference.lineTo(50,0);
crownreference.lineTo(60,50);
crownreference.lineTo(70,0);
crownreference.lineTo(80,50);
crownreference.lineTo(90,0);
crownreference.lineTo(100,50);
crownreference.lineTo(100,80);
crownreference.lineTo(0,80);
crownreference.lineTo(0,50);
crownreference.fillStyle = 'yellow';
crownreference.fill();
crownreference.beginPath();
crownreference.arc(50,60,5,0,2*Math.PI);
crownreference.fillStyle = 'red';
crownreference.fill();
crownreference.beginPath();
crownreference.arc(20,60,5,0,2*Math.PI);
crownreference.strokeStyle = 'green';
crownreference.stroke();
crownreference.beginPath();
crownreference.arc(80,60,5,0,2*Math.PI);
crownreference.stroke();

//exempel 3 + bonusobjektet
dudereference = document.getElementById('dudecanvas').getContext('2d');

function Dude(x, y, boy){
    this.x = x;
    this.y = y;
    this.width = 20;
    this.height = 60;
    this.boy = boy;
    this.draw = function(){
        dudereference.fillStyle = 'pink';
        dudereference.beginPath();
        dudereference.arc(this.x+this.width/2, this.y+this.height/8, this.height/8, 0, 2*Math.PI);
        dudereference.fill();
        dudereference.fillRect(this.x, this.y+this.height/4, this.width, this.height/2);
        dudereference.fillRect(this.x-this.width/4-1, this.y+this.height/4, this.width/4, this.height/3);
        dudereference.fillRect(this.x+this.width+1, this.y+this.height/4, this.width/4, this.height/3);
        if(this.boy){
            dudereference.fillRect(this.x, this.y+this.height/4*3, this.width/3, this.height/4);
            dudereference.fillRect(this.x+this.width/3*2, this.y+this.height/4*3, this.width/3, this.height/4);
        } else {
            dudereference.beginPath();
            dudereference.moveTo(this.x, this.y+this.height/4*3);
            dudereference.lineTo(this.x-this.width/3,this.y+this.height);
            dudereference.lineTo(this.x+this.width/3*4,this.y+this.height);
            dudereference.lineTo(this.x+this.width, this.y+this.height/4*3);
            dudereference.lineTo(this.x, this.y+this.height/4*3);
            dudereference.fill();
        }
    }
}
let dude = new Dude(20,20,true);
for(let i=0;i<5;i++){
    dude.draw();
    dude.x += 40;
    dude.y += 20;
}

//bonus 3
let gender = document.getElementById('gender');
dudereference = gender.getContext('2d');
let girl = new Dude(20,20,false);
girl.draw();
let boy = new Dude(60,20,true);
boy.draw();

//exempel 4
let next = true; //säger om animeringen ska fortsätta i canvasen i exempel 4
animationreference = document.getElementById('animationcanvas').getContext('2d');

function Boll(x, y, xv, yv, r, color){
    this.x = x;
    this.y = y;
    this.xv = xv;
    this.yv = yv;
    this.r = r;
    this.color = color;
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
    this.draw = function(){
        animationreference.beginPath();
        animationreference.arc(this.x, this.y, this.r, 0, 2*Math.PI);
        animationreference.fillStyle = this.color;
        animationreference.fill();
    }
}
let boll = new Boll(20,100,1,0,5,'blue');
animate();

//bonus 4
let cty = document.getElementById('movingstuff').getContext('2d');
function Smiley(x, y, xv, yv, r, color){
    this.x = x;
    this.y = y;
    this.xv = xv;
    this.yv = yv;
    this.r = r;
    this.color = color;
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
    this.draw = function(){
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
        cty.fillStyle = 'red';
        cty.arc(this.x,this.y+this.r/4,this.r/2, 0, Math.PI);
        cty.fill();
    }
}
let smilies = [new Smiley(150,60,0,0,40,'hotpink'), new Smiley(20,110,1,0,20,'green'), new Smiley(70,100,1,0,20,'orange'), new Smiley(200,105,1,0,20,'green'), new Smiley(250,100,1,0,20,'blue')];
animateSmiley();

//Får knapparna att visa bonus canvas.
let bonus = document.getElementsByClassName('bonus');
for(let i=0;i<bonus.length;i++){
    bonus[i].addEventListener('click', revealBonus);
}

//målar upp och flyttar bollen tills next sätts som false.
function animate(){
    animationreference.clearRect(0,0,300,200);
    boll.draw();
    boll.move();
    if(next){
        requestAnimationFrame(animate);
    }
}

//målar upp och flyttar figurerna i arrayen smilies.
function animateSmiley(){
    cty.clearRect(0,0,300,200);
    for(let i=0;i<smilies.length;i++){
        smilies[i].draw();
        smilies[i].move();
    }
    requestAnimationFrame(animateSmiley);
}

//togglar mellan display = block/none. Spelar upp ett ljud när den blir block också.
function revealBonus(){
    let data = this.id;
    let challenge = document.getElementById('challenge' + data);
    if(challenge.style.display == 'block'){
        challenge.style.display = 'none';
    } else {
        challenge.style.display = 'block';
        bellsound.play();
    }
}

function stopAnimating(){
    next = false;
}