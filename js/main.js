(function(window, document) {
	'use strict';
	var firstElement = new Component(0, 0, 50, 50, '#00AAFF');
	function loadPage() {
		game.start();
	}
	var game = {
		canvas: document.createElement('canvas'),
		start: function() {
			this.canvas.width = 600;
			this.canvas.height = 300;
			this.canvas.ctx = this.canvas.getContext('2d');
			document.getElementById('gameArea').appendChild(this.canvas);
			init();
		}
	}

	function Component(x, y, width, height, color) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.color = color;
	}

	Component.prototype.update = function() {
		var ctx = game.canvas.ctx;
		ctx.fillStyle = this.color;
		ctx.fillRect(this.x, this.y, this.width, this.height);
	}

	function init() {
		actions(game.canvas.width, game.canvas.height);
		paint(game.canvas.ctx, game.canvas.width, game.canvas.height);
		window.requestAnimationFrame(init);
	}

	function actions(gameWidth, gameHeight) {
		if(firstElement.x > gameWidth) {
			firstElement.x = 0;
		}
		firstElement.x += 2;
	}

	function paint(ctx, gameWidth, gameHeight) {
		//Don't erase
		ctx.clearRect(0, 0, gameWidth, gameHeight);
		//Don't erase
		firstElement.update();
	}

	window.addEventListener('load', loadPage);
})(window, document);