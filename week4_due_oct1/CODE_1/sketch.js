// sketch.js
// Press 'S' (or 's') to export the SVG.
// p5.js global mode + p5.plotSvg library

p5.disableFriendlyErrors = true;

let bDoExportSvg = false;

let diaMin = 30;
let diaMax = 500;
let diaStep = 18;

function setup() {
  createCanvas(500, 500);
  noLoop(); // Draw only once
}

function keyPressed() {
  // Accept both lowercase and uppercase
  if (key === 's' || key === 'S') {
    bDoExportSvg = true; // 1) Turn the flag on first
    redraw();            // 2) Then redraw once, which records the SVG
  }
}

function draw() {
  if (bDoExportSvg) {
    // Guard: check that the p5.plotSvg library is loaded
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
    ellipse(width / 2, height / 2, dia, dia);
  }

  if (bDoExportSvg) {
    endRecordSvg();       // Finish recording and download the file
    bDoExportSvg = false; // Reset so the next key press works again
  }
}