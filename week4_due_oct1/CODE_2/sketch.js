p5.disableFriendlyErrors = true;

let bDoExportSvg = false;

let diaMin = 30;
let diaMax = 500;
let diaStep = 18;
let offset = 40;

function setup() {
  createCanvas(500, 500);
  noLoop();
}

function keyPressed() {
  if (key === 's' || key === 'S') {
    bDoExportSvg = true;
    redraw();
  }
}

function draw() {
  if (bDoExportSvg) {
    if (typeof beginRecordSvg !== 'function') {
      console.error('p5.plotSvg is not loaded. Check index.html.');
      bDoExportSvg = false;
    } else {
      beginRecordSvg(this, "myOutput.svg");
    }
  }

  background(255);
  stroke(0);
  strokeWeight(6);
  noFill();

  for (let dia = diaMin; dia <= diaMax; dia += diaStep) {
    ellipse(width / 2 - offset / 2, height / 2, dia, dia);
    ellipse(width / 2 + offset / 2, height / 2, dia, dia);
  }

  if (bDoExportSvg) {
    endRecordSvg();
    bDoExportSvg = false;
  }
}