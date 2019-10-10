var max_rainDrops = 1000; 
var rainDrops = [];
var rainSound;

var mode = 'MOON';

// create environment for background
let bg;
let y=0;

// create the song
// let song;

function rainDrop(x, y, vy, sz, c) { 
  this.x = x;
  this.y = y;
  this.vy = vy;
  this.sz = sz; this.c = c;
  this.move = function() {
    this.y += this.vy;
    // this.y>1080 as 1080 is the size of the background image
    if (this.y>1080) 
      this.y = 0; 
    if (mouseIsPressed) {
      var xdif = abs(this.x-mouseX);
      if (xdif < 100 + random(-100, 100)) {
          if ( (this.y- mouseY) > random(-100,100)) { 
        this.y=0;
      } 
    }
  }
}

  this.render = function() {
    noStroke();
    fill(this.c);
    ellipse(this.x, this.y, 2, this.sz);
  } 
}

// preload background song for the webpage
// function preload() {
//   song[0] = loadSound("dhalfmoon.mp3");
//   song[1] = loadSound("deaninstagram.mp3");
//   song[2] = loadImage("day6.mp3");

  rainSound = loadSound("dhalfmoon.mp3");
  switch(mode) {
    case 'MOON' : loadSound("dhalfmoon.mp3");
    break;
    case 'STAR' : loadSound("deaninstagram.mp3");
    break;
    case 'EMILY' : loadSound("day6.mp3");
    break;

    // load all music at once and then using the keys play whichever 
    // one you want and make sure to turn the one playing off to play the next
    // should make this an array instead of putting in preload
    // preload only loads once when you open the webpage!!

  // rainSound[0] = loadSound("dhalfmoon.mp3");
  // switch(mode) {
  //   case 'MOON' : rainSound[1] = loadSound("dhalfmoon.mp3");
  //   break;
  //   case 'STAR' : rainSound[2] = loadSound("deaninstagram.mp3");
  //   break;
  //   case 'EMILY' : rainSound[3] = loadSound("day6.mp3");
  //   break;
  // }
  // if (keyIsPressed) {
  //   rainSound = loadSound("deaninstagram.mp3");
  // }

  // img = loadImage("lamp.png");
}


function setup() { 
  // This brings up the background image
  bg = loadImage("lamp.png");
  // Brings song up
  // song = loadSound("dhalfmoon.mp3");
  // Create canvas size according to image size
  createCanvas(1920, 1080);
  var i;
  for (i=0; i<max_rainDrops; i++) {
    rainDrops[i] = new rainDrop(
      // Instead of windowWidth and windowHeight, change it to 
      // 1920(width) and 1080(height) to fit background image
      random(0, 1920), random(0, 1080),
      random(30, 100),
      random(30, 100), color(random(100, 255)) );
}
  
  rainSound.loop(); 

  // image(img, 0, 0);
}


function draw() { 
  background(bg);
  var i;
  for (i=0; i<max_rainDrops; i++) {
    rainDrops[i].move();
    rainDrops[i].render(); 
  }

  // in order to make the fading effect, you need to make a new sketchbook on top
  // this is advanced coding using createGraphics()
  // using photos from textbook and createGraphics() can make fading lines

  // This creates the line that illustrates the dancing in the rain
  stroke(255, 255, 255);
  strokeWeight(20);
  line(mouseX, mouseY, pmouseX, pmouseY);

  // easier version is to make a wave of ecllipse instead
  // 
}

function keyPressed() {
  // if (song[0].isPlaying()){
  //   song[1].stop();
  //   song[2].stop();
  // }
  // if (song[1].isPlaying()){
    // song[0].stop();
    // song[2].stop();
  // }
  // if (song[2].isPlaying()){
    // song[0].stop();
    // song[1].stop();
  // }

  switch(key) {
    case '2' : mode = "STAR";
    break;
    case '3' : mode = "EMILY";
    break;
    default: mode = "MOON";
    break;
  }
  print(mode);
}