function doFirst(){
	var x = document.getElementById('canvas');
	var canvas = x.getContext('2d');
	
	// canvas.moveTo(500,50);
	// canvas.lineTo(450,200);
	// canvas.stroke();

	canvas.lineWidth = 5;
	canvas.strokeStyle = 'red';
	
	canvas.arc(400,400,120,0,2*Math.PI,false);	
	canvas.stroke();
	
	canvas.lineWidth = 1;
	canvas.strokeStyle = 'blue';
	canvas.beginPath();
	canvas.translate(400,400);	
	canvas.moveTo(0,0);
	canvas.lineTo(0,-120);
	canvas.lineTo(0,120);
	canvas.lineTo(120,0);
	canvas.lineTo(-120,0);//
	canvas.lineTo(0,-120);
	canvas.lineTo(120,0);
	canvas.lineTo(-120,0);
	canvas.lineTo(0,120);
	canvas.stroke();

	canvas.lineWidth = 1;
	canvas.strokeStyle = 'green';
	canvas.beginPath();
	canvas.moveTo(0,0);
	canvas.lineTo(90,90);
	canvas.lineTo(-90,-90);
	canvas.lineTo(-90,90);
	canvas.lineTo(90,-90);
	canvas.lineTo(90,90);
	canvas.stroke();

	canvas.lineWidth = 1;
	canvas.strokeStyle = 'orange';
	canvas.beginPath();
	canvas.moveTo(0,0);
	canvas.lineTo(-90,-90);
	canvas.lineTo(-90,-270);
	canvas.lineTo(0,-120);
	canvas.lineTo(90,-270);
	canvas.lineTo(90,-90);
	canvas.lineTo(270,-90);
	canvas.lineTo(120,0);
	canvas.lineTo(270,90);
	canvas.lineTo(90,90);
	canvas.lineTo(90,270);
	canvas.lineTo(0,120);
	canvas.lineTo(-90,270);
	canvas.lineTo(-90,90);
	canvas.lineTo(-270,90);
	canvas.lineTo(-120,0);
	canvas.lineTo(-270,-90);
	canvas.lineTo(-90,-90);
	canvas.stroke();



}
window.addEventListener('load', doFirst, false);


