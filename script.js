  var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');  






 function drawZaMoon() {
  ctx.save(); // save state
  ctx.lineWidth = 5;
  ctx.strokeStyle = 'gray'; 
  ctx.fillStyle = 'lightgray';
  
  ctx.beginPath();
  ctx.arc(390, 10, 30, 0, Math.PI * 2, true); 
  ctx.fill();
  
  ctx.fillStyle = 'Gainsboro';
  
  
  ctx.beginPath();
  ctx.arc(389, 30, 7, 0, Math.PI * 2, true); 
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(373, 9, 11, 0, Math.PI * 2, true); 
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(396, 17, 3, 0, Math.PI * 2, true); 
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(392, 0, 5, 0, Math.PI * 2, true); 
  ctx.fill();
  
  
  ctx.fillStyle = 'silver';
  
  ctx.beginPath();
  ctx.arc(378, 22, 8, 0, Math.PI * 2, true); 
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(383, 0, 10, 0, Math.PI * 2, true); 
  ctx.fill();
  
  ctx.beginPath();
  ctx.arc(398, 26, 6, 0, Math.PI * 2, true); 
  ctx.fill();
  
  
  
  
  
  ctx.restore(); 
}



function draw() {
  ctx.restore();
  
  ctx.fillStyle = 'MidnightBlue';
  ctx.fillRect(0, 0, 400, 400);
  drawZaMoon();
  
  ctx.save();
  ctx.translate(Math.random() * 3, Math.random() * 3);
  ctx.rotate(Math.random() * -0.02);
  
  
  
  
  //stars
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
  
  ctx.beginPath();
  ctx.arc(Math.random() * 400, Math.random() * 400, 1, 0, Math.PI * 2, true);
  ctx.stroke();
  
  
  
  
  
  
  
  
  
  
  
  
  //rocket body
  
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
  ctx.moveTo(195, 127);
  ctx.lineTo(196, 128);
  ctx.lineTo(197, 129);
  ctx.lineTo(202, 129);
  ctx.lineTo(203, 129);
  ctx.lineTo(204, 128);
  ctx.lineTo(205, 127);
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
