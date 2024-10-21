// TODO: strings and text
//       iterate letters
//       iterate words


let mString = "Computers and networks are more than mere tools: They are like living things, themselves.";

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);

  textSize(16)

  // print(mString);
  print(mString, mString.length, mString.toLowerCase());

  // textAlign(LEFT, TOP)
  // text(mString,100,100)

  for (let idx=0; idx< mString.length; id++){
    let mChar = mString[idx];
    let x = random(width);
    let y = random(height);
    if(mChar == 'a'){
      textSize(64);
    } else{
      textSize(16);
    }

    text (mChar, x, y);

  }
}

function draw() {}
