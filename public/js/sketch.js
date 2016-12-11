var snake;
var food;
var canvasScale = 20;
var gameIsStarted = false;

function setup(){

	startMessage();
}

function startGame(){
	gameIsStarted = true;
	var canvas = createCanvas(1200, 550);
	canvas.parent('sketch-holder');
	snake = new Snake();

	// Reduce frame rate to emulate old school snake game
	frameRate(10);

	// create the food (refactor this out later)
	pickFoodLocation();
}

function pickFoodLocation(){

	var cols = floor(width/canvasScale);
	var rows = floor(height/canvasScale);

	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(canvasScale);
}

function draw(){

	if(gameIsStarted){
		background(30);
		snake.death();
		snake.update();
		snake.show();

		// Food stuff goes here
		fill(0);
		rect(food.x, food.y, canvasScale, canvasScale);

		// EAT THE FOOD
		snake.eat(food);
	}
	
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		snake.changeDirection(0, -1);
	}
	else if(keyCode === DOWN_ARROW){
		snake.changeDirection(0, 1);
	}
	else if(keyCode === LEFT_ARROW){
		snake.changeDirection(-1, 0);
	}
	else if(keyCode === RIGHT_ARROW){
		snake.changeDirection(1, 0);
	}
}

function startMessage(){
	swal({
  		title: "Ready to play!?",
  		text: "",
  		type: "info",
  		showCancelButton: false,
  		confirmButtonColor: "green",
  		confirmButtonText: "Yes!",
  		closeOnConfirm: true,
  		customClass: ".startGameModal"
	},
	function(){
  		startGame();
	});
}