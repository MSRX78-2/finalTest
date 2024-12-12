//let x1,y1,x2,y2,distance;
let randomWalker = [];
let maxWalkers = 4;
let colorPalette = ['#12E0DD','#E1BB00','#1277E0','#E09412','#386160'];
function setup() {
  createCanvas(400, 400);
  background('black');
  
  for(i = 0; i < maxWalkers; i++)
    {
      randomWalker.push(new walker(random(0,width), random(0,height), random(-5,10),colorPalette[i]));
    }
  
  //randomWalker = new walker (width/2,height/2,5,'#E1BB00');
}

function draw() {
  for (i = 0; i < maxWalkers; i++){
      randomWalker[i].display();
      randomWalker[i].walkingDirection();
      randomWalker[i].keepInCanvas();
  }
  
}

/*
 x1 = width/2;
  y1 = height/2;
  
  distance = 5;
  
function display()
{
  stroke('white');
  strokeWeight(2);
  line(x1,y1,x2,y2);
  
  x1=x2;
  y1=y2;
}

function walkingDirection()
{
  let nextPos = floor(random(4));
  if(nextPos == 0)
    {
      x2 = x1 + distance;
    }
  else if (nextPos == 1)
    {
      x2 = x1 - distance;
    }
  else if (nextPos == 2)
    {
      y2 = y1 + distance;
    }
  else if (nextPos == 3)
    {
      y2 = y1 - distance;
    }
}

function keepInCanvas()
{
  if(x2 < 0)
    {
      x2 = 0;
    }
  else if (x2 > width)
    {
      x2 = width;
    }
  if(y2 < 0)
    {
      y2 = 0;
    }
  else if (y2 > height)
    {
      y2 = height;
    }

}    
*/