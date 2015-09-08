function init(){
	var stage = new createjs.Stage("canvas-id");
	var game_instance = new game(stage);
	game_instance.setup();

	createjs.Ticker.addEventListener("tick", handleTick);
	function handleTick(event) {
	     stage.update();
	}
};

var game = function(stage){
	this.stage = stage;
};

game.prototype.setup = function(){
	this.base = new createjs.Bitmap("public/background.png");
	this.base.x = 100;
	this.base.y = 25;
	this.stage.addChild(this.base);
};
