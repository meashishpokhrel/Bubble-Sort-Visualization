//This code is written by Ashish Pokhrel 
//Mini Project Computer Graphics
//Bubble Sort Visualization


let values = [];

let i = 0;
let j = 0;

function setup() {
  createCanvas(windowWidth, windowHeight); 
  //Creating canvas of full window size taking its maximum width and Height.

  values = new Array(width);
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    
  }
}

function draw() {
  background("#0AD7D3");

  if (i < values.length) {
    for (let j = 0; j < values.length - i - 1; j++) {
      let a = values[j];
      let b = values[j + 1];
      if (a > b) {
        swap(values, j, j + 1);
      }
    }
  } else {
    console.log("completed all");
    noLoop();
  }
  i++;

  for (let i = 0; i < values.length; i++) {
    stroke("#2112F3");
    line(i, height, i, height - values[i]);
  }
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

//Completed. For the output please run the code in live p5.js editor or open live server.