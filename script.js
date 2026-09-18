// change the quotes in this array. Be mindful of the quotation marks!
// this is the only part of the file you need to edit!
const quotes = [
  { text: "A bridge between art, design, and computer science", source: "Maddie" },
  { text: "A method for building interactive experiences", source: "Sara" },
  { text: "A way to create generative systems", source: "Sally" },
  { text: "An experimental creative process", source: "Sam" },
  { text: "Code as an artistic medium", source: "Sean" },
  { text: "A combination of programming and visual aesthetics", source: "Scooby" },
  { text: "Expressive rather than purely functional programming", source: "Seth" },
  { text: "Coding for artistic expression", source: "Shifty-eyed Susan" }
];
// no need to edit anything below this line! 
// if you have made an error, you can check your history to see what might have gone wrong

// a variable tht holds the current quote
let current = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  randomSeed(millis());
  pickQuote(); // calls the function to pick a quote
}

function pickQuote() {
  // take a random number and use that to identify what quote to use
  current = quotes[floor(quotes.length)]; 
}

function draw() {
  background(255, 20, 250);
  drawQuote(); // draw the quote on screen
}

function drawQuote() {
  // draw text
  fill(10, 255, 10);
  textAlign(CENTER, CENTER);
  text("Creative Coding is.....", width / 2, height / 2 - 48);
  textSize(32);
  textStyle(BOLD);
  text("“" + current.text + "”", width / 2, height / 2);
  textAlign(RIGHT, CENTER);
  text("-" + current.source, width - 100, height - 100);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function newQuote() {
  pickQuote();
  redraw();
}

function mousePressed() {
  newQuote(); 
}