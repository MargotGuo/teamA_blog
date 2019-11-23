var startCanvas = document.getElementById("startCanvas");
var startCtx = startCanvas.getContext("2d");
startCtx.beginPath();
startCtx.moveTo (25, 0);
startCtx.lineTo (25, 200);
startCtx.moveTo (10, 198.5);
startCtx.lineTo (40, 198.5);
startCtx.lineWidth = 5;
startCtx.strokeStyle = "white";
startCtx.stroke();

startCtx.beginPath();
startCtx.arc(25, 15, 12, 0, 2 * Math.PI);
startCtx.fillStyle = "rgb(66, 227, 245)";
startCtx.fill();
startCtx.lineWidth = 5;
startCtx.strokeStyle = "black";
startCtx.stroke();

var middleCanvas = document.getElementById("middleCanvas");
var middleCtx = middleCanvas.getContext("2d");
middleCtx.beginPath();
middleCtx.moveTo (25, 0);
middleCtx.lineTo (25, 200);
middleCtx.lineWidth = 5;
middleCtx.strokeStyle = "white";
middleCtx.stroke();

middleCtx.beginPath();
middleCtx.arc(25, 15, 12, 0, 2 * Math.PI);
middleCtx.fillStyle = "rgb(66, 227, 245)";
middleCtx.fill();
middleCtx.strokeStyle = "black";
middleCtx.stroke();

var endCanvas = document.getElementById("endCanvas");
var endCtx = endCanvas.getContext("2d");
endCtx.beginPath();
endCtx.moveTo (25, 0);
endCtx.lineTo (25, 200);
endCtx.lineWidth = 5;
endCtx.strokeStyle = "white";
endCtx.stroke();

endCtx.beginPath();
endCtx.arc(25, 15, 7, 0, 2 * Math.PI);
endCtx.fillStyle = "black";
endCtx.fill();
endCtx.strokeStyle = "rgb(66, 227, 245)";
endCtx.stroke();
endCtx.beginPath();
endCtx.arc(25, 15, 12, 0, 2 * Math.PI);
endCtx.strokeStyle = "black";
endCtx.stroke();

var endMark = document.getElementById("endMark");
var endMarkCtx = endMark.getContext("2d");
endMarkCtx.beginPath();
endMarkCtx.moveTo (10, 2.5);
endMarkCtx.lineTo (40, 2.5);
endMarkCtx.moveTo (25, 0);
endMarkCtx.lineTo (25, 50);
endMarkCtx.lineWidth = 5;
endMarkCtx.strokeStyle = "white";
endMarkCtx.stroke();