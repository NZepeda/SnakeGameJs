// This is our snake object
function Snake(){
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];

	this.update = function(){

		this.grow();

		this.x = this.x + this.xspeed * canvasScale;
		this.y = this.y + this.yspeed * canvasScale;

		// Constrain our variables (this prevents the snake from leaving the screen)
		this.x = constrain(this.x, 0, width - canvasScale);
		this.y = constrain(this.y, 0, height - canvasScale);
	}

	this.show = function(){
		fill(255);

		for(var i = 0; i < this.total; i++){
			rect(this.tail[i].x, this.tail[i].y, canvasScale, canvasScale);
		}

		rect(this.x, this.y, canvasScale, canvasScale);
	}

	this.changeDirection = function(x, y){
		this.xspeed = x;
		this.yspeed = y;
	}

	this.eat = function(foodPos){
		var pixDistance = dist(this.x, this.y, foodPos.x, foodPos.y);

		if(pixDistance < 1){
			this.total++;
			pickFoodLocation();
		}
	}

	this.grow = function(){
		for(var i = 0; i < this.tail.length - 1; i++){
			this.tail[i] = this.tail[i+ 1];
		}

		this.tail[this.total - 1] = createVector(this.x, this.y)
	}

	this.death = function(){

		for(var i = 0; i < this.tail.length - 1; i++){
			var pos = this.tail[i];

			var bodyDistance = dist(this.x, this.y, pos.x, pos.y);

			if(bodyDistance < 1){
				this.total = 0;
				this.tail = [];
			}
		}
	}

}