p5.disableFriendlyErrors = true;

let bDoExportSvg = false;

let lineStep = 18;
let tilt = 40;

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

  for (let x = 0; x <= width; x += lineStep) {
    line(x, 0, x, height);
  }

  for (let x = -tilt; x <= width + tilt; x += lineStep) {
    line(x, 0, x + tilt, height);
  }

  if (bDoExportSvg) {
    endRecordSvg();
    bDoExportSvg = false;
  }
}