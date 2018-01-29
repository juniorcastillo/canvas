


var ctx;
var posX1 = 0;
var posX2 = 0;
var posY1 = 0;
var posY2 = 0;
var tap = 0;
var lines = [];
var mousePosY;
var mousePosX;
var start = 

window['funcCall'] = 'drawLine';
function init() {
    var canvas = document.getElementById("canvas");
    ctx = canvas.getContext('2d');
}

function changeFunction(event) {
    window['funcCall'] = event.target.id;
    console.log("Change Func => ", event.target.id)

}


function drawLine(event) {

    console.log("Event=> ", event)
    tap += 1;
    if (tap == 1) {
        posX1 = event.clientX;
        posY1 = event.clientY;

    } else if (tap == 2) {
        console.log("Entro en tap 2 ", 2)
        posX2 = event.clientX;
        posY2 = event.clientY;

        lines.push({ posX1: posX1, posY1: posY1, posX2: posX2, posY2: posY2 })
        drawl(posX1, posY1, posX2, posY2)
        posX1 = "";
        posY1 = "";
        posX2 = "";
        posY2 = "";
        tap = 0;
    }

    console.log("EVETO=> ", tap, '=> ', event.clientX, " ", event.clientY)

    // ctx.context.beginPath();
    if (tap > 1) {
        //    tap = 0;
        //    ctx.beginPath();
        //    ctx.moveTo(posX1, posY1);
        //    ctx.lineTo(posX2,  posY2);
        //    ctx.stroke();
        //    ctx.strokeStyle = 'white';
    }

}

function drawl(x1, y1, x2, y2) {

    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.strokeStyle = 'white';
}

function mouseDraw(x1, y1, x2, y2) {
    if (!posX2) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        lines.forEach(l => {
            ctx.beginPath();
            ctx.moveTo(l.posX1, l.posY1);
            ctx.lineTo(l.posX2, l.posY2);
            ctx.stroke();
            ctx.strokeStyle = 'white';

        });

        ctx.beginPath();
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke();
        ctx.strokeStyle = 'white';


    }


}

function mouseMove(e) {

    mousePosY = e.clientY;
    mousePosX = e.clientX;

    if (posX1 && !posX2) mouseDraw(posX1, posY1, mousePosX, mousePosY)

}

function dradrawLineCurvewArc() {

    ctx.beginPath();
    ctx.moveTo(20, 20);
    ctx.quadraticCurveTo(20, 100, 100, 20);
    ctx.stroke();

}
function mousePosition(event) {

    console.log("CONSOLE=> ", funcCall)
    window[funcCall](event);

    // console.log("event " , event)
}

