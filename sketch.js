let capture;
let song;
let vol;
let h;
let myFont;
let showText = true;

function preload() {
  myFont = loadFont("assets/NeueMetana-Bold.otf");
  song = loadSound("assets/audio.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  capture = createCapture(VIDEO);
  capture.hide();
  background(0);
}
function draw() {
  h = height;

  if (capture.loadedmetadata) {
    push();
    translate(width, 0);
    scale(-1, 1);
    pop();
    image(capture, 0, 0, width, height);

    for (let i = 0; i < h; i++) {
      let p = get(mouseX, i);
      line(1, i, width, i);
      stroke(p);
    }
  }

  if (showText) {
    fill("255");
    textFont(myFont);
    textSize(36);
    textAlign(CENTER);
    let txt = text("CLICK TO START", width / 2, height / 2);
  }
}

function mousePressed() {
  song.play();
  showText = false;
}

function mouseMoved() {
  vol = 1 / (mouseY / 200);
  song.setVolume(vol);
}
