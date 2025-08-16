var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');       

function draw() {
  
  
  
  

  
  
  
  //rocket body
  
  ctx.restore();
  
 
  
  
  
  
  
  ctx.fillStyle = 'darkblue';
  ctx.fillRect(0, 0, 400, 400);
  
  ctx.save();
  ctx.translate(Math.random() * 3, Math.random() * 3);
  ctx.rotate(Math.random() * -0.02);
  
  
  
  
  ctx.lineWidth = 3;
  ctx.strokeStyle = 'white';
  
  ctx.beginPath();
  ctx.arc(Math.random() * 400, Math.random() * 400, 1, 0, Math.PI * 2, true);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(Math.random() * 400, Math.random() * 400, 1, 0, Math.PI * 2, true);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(Math.random() * 400, Math.random() * 400, 1, 0, Math.PI * 2, true);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(Math.random() * 400, Math.random() * 400, 1, 0, Math.PI * 2, true);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(Math.random() * 400, Math.random() * 400, 1, 0, Math.PI * 2, true);
  ctx.stroke();
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  ctx.fillStyle = 'lightgray';
  ctx.fillRect(160, 100, 80, 200);
  
  ctx.beginPath();
  ctx.moveTo(200, 20);
  ctx.lineTo(240, 100);
  ctx.lineTo(160, 100);
  ctx.fill();
  
  ctx.beginPath();
  ctx.moveTo(150, 310);
  ctx.lineTo(160, 300);
  ctx.lineTo(240, 300);
  ctx.lineTo(250, 310);
  ctx.fill();
  
  
  
  //windows
  ctx.lineWidth = 5;
  ctx.strokeStyle = 'darkgray';
  ctx.fillStyle = 'lightblue';
  
  ctx.beginPath();
  ctx.arc(200, 125, 19, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(200, 175, 17, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(200, 225, 15, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.stroke();
  
  
  
  
  
  
  
  
  // face and body
  ctx.lineWidth = 1;
  ctx.strokeStyle = 'black';
  ctx.fillStyle = 'white';
  
  ctx.beginPath();
  ctx.arc(200, 125, 10, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(200, 135);
  ctx.lineTo(200, 141);
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(204, 123, 1, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.stroke();
  
  ctx.beginPath();
  ctx.arc(196, 123, 1, 0, Math.PI * 2, true);
  ctx.fill();
  ctx.stroke();
  
  ctx.beginPath();
  ctx.moveTo(196, 129);
  ctx.lineTo(204, 129);
  ctx.stroke();
  
  
  
  
  
  //fire
  ctx.fillStyle = 'orange';
  ctx.beginPath();
  ctx.moveTo(160, 310);
  ctx.lineTo(180 + Math.random() * 30, 350 + Math.random() * 40);
  ctx.lineTo(240, 310);
  ctx.fill();
  
  ctx.fillStyle = 'yellow';
  ctx.beginPath();
  ctx.moveTo(180, 310);
  ctx.lineTo(190 + Math.random() * 20, 320 + Math.random() * 20);
  ctx.lineTo(220, 310)
  ctx.fill();
  
  
  
  
  
  
  
}


setInterval(draw, 30);
