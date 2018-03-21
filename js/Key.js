(function (exports) {

	
	// Singleton
	var Key = {};
	exports.Key = Key;
	var tid; var c = 0;
	var nc_left = window.document.getElementById("nc_left");
	var nc_right = window.document.getElementById("nc_right");
	var nc_top = window.document.getElementById("nc_top");
	var nc_down = window.document.getElementById("nc_down");
	var nc_left1 = window.document.getElementById("nc_left1");
	var nc_right1 = window.document.getElementById("nc_right1");
	var nc_top1 = window.document.getElementById("nc_top1");
	var nc_down1 = window.document.getElementById("nc_down1");
	// Keycodes to words mapping
	var KEY_CODES = {
		37: "left", 38: "up", 39: "right", 40: "down",
		65: "left", 87: "up", 68: "right", 83: "down",
		16: "slow",
		32: "action", 13: "action",
		27: "pause", 80: "pause"
	};

	// Event Handling
	var onKeyDown = function (event) {
		var code = KEY_CODES[event.keyCode];
		Key[code] = true;
		console.warn(Key);
		if (window.STAGE == 4) return;
		event.stopPropagation();
		event.preventDefault();
	}
	var onKeyUp = function (event) {
		var code = KEY_CODES[event.keyCode];
		Key[code] = false;
		if (window.STAGE == 4) return;
		event.stopPropagation();
		event.preventDefault();
	}
	window.addEventListener("keydown", onKeyDown, false);
	window.addEventListener("keyup", onKeyUp, false);

	nc_left.onclick = function (event) {
		console.warn('111')
		var code = KEY_CODES[37];
		Key[code] = true;
		if (window.STAGE == 4) return;
		event.stopPropagation();
		event.preventDefault();
	}
	nc_left.onmousedown = function (event) {
		tid = setInterval(function () {
			console.warn('l222')
			var code = KEY_CODES[37];
			Key[code] = true;
			if (window.STAGE == 4) return;
			event.stopPropagation();
			event.preventDefault();
		}, 100);
	}
	nc_left.onmouseup = function (event) {
		clearInterval(tid);
		var code = KEY_CODES[37];
		Key[code] = false;
		if (window.STAGE == 4) return;
		console.warn('down1')
		event.stopPropagation();
		event.preventDefault();
	}
	nc_left.onmouseout = function (event) {
		clearInterval(tid);
		var code = KEY_CODES[37];
		Key[code] = false;
		if (window.STAGE == 4) return;
		console.warn('down2')
		event.stopPropagation();
		event.preventDefault();
	}
	nc_right.onclick = function (event) {
		console.warn('111')
		var code = KEY_CODES[39];
		Key[code] = true;
		if (window.STAGE == 4) return;
		event.stopPropagation();
		event.preventDefault();
	}
	nc_right.onmousedown = function (event) {
		tid = setInterval(function () {
			console.warn('l222')
			var code = KEY_CODES[39];
			Key[code] = true;
			if (window.STAGE == 4) return;
			event.stopPropagation();
			event.preventDefault();
		}, 100);
	}
	nc_right.onmouseup = function (event) {
		clearInterval(tid);
		var code = KEY_CODES[39];
		Key[code] = false;
		if (window.STAGE == 4) return;
		console.warn('down1')
		event.stopPropagation();
		event.preventDefault();
	}
	nc_right.onmouseout = function (event) {
		clearInterval(tid);
		var code = KEY_CODES[39];
		Key[code] = false;
		if (window.STAGE == 4) return;
		console.warn('down2')
		event.stopPropagation();
		event.preventDefault();
	}


	nc_top.onclick = function (event) {
		console.warn('111')
		var code = KEY_CODES[38];
		Key[code] = true;
		if (window.STAGE == 4) return;
		event.stopPropagation();
		event.preventDefault();
	}
	nc_top.onmousedown = function (event) {
		tid = setInterval(function () {
			console.warn('l222')
			var code = KEY_CODES[38];
			Key[code] = true;
			if (window.STAGE == 4) return;
			event.stopPropagation();
			event.preventDefault();
		}, 100);
	}
	nc_top.onmouseup = function (event) {
		clearInterval(tid);
		var code = KEY_CODES[38];
		Key[code] = false;
		if (window.STAGE == 4) return;
		console.warn('down1')
		event.stopPropagation();
		event.preventDefault();
	}
	nc_top.onmouseout = function (event) {
		clearInterval(tid);
		var code = KEY_CODES[38];
		Key[code] = false;
		if (window.STAGE == 4) return;
		console.warn('down2')
		event.stopPropagation();
		event.preventDefault();
	}


	nc_down.onclick = function (event) {
		console.warn('111')
		var code = KEY_CODES[40];
		Key[code] = true;
		if (window.STAGE == 4) return;
		event.stopPropagation();
		event.preventDefault();
	}
	nc_down.onmousedown = function (event) {
		tid = setInterval(function () {
			console.warn('l222')
			var code = KEY_CODES[40];
			Key[code] = true;
			if (window.STAGE == 4) return;
			event.stopPropagation();
			event.preventDefault();
		}, 100);
	}
	nc_down.onmouseup = function (event) {
		clearInterval(tid);
		var code = KEY_CODES[40];
		Key[code] = false;
		if (window.STAGE == 4) return;
		console.warn('down1')
		event.stopPropagation();
		event.preventDefault();
	}
	nc_down.onmouseout = function (event) {
		clearInterval(tid);
		var code = KEY_CODES[40];
		Key[code] = false;
		if (window.STAGE == 4) return;
		console.warn('down2')
		event.stopPropagation();
		event.preventDefault();
	}
	// 
	nc_left1.onclick = function (event) {
		console.warn('111')
		var code = KEY_CODES[37];
		Key[code] = true;
		if (window.STAGE == 4) return;
		event.stopPropagation();
		event.preventDefault();
	}
	nc_left1.onmousedown = function (event) {
		tid = setInterval(function () {
			console.warn('l222')
			var code = KEY_CODES[37];
			Key[code] = true;
			if (window.STAGE == 4) return;
			event.stopPropagation();
			event.preventDefault();
		}, 100);
	}
	nc_left1.onmouseup = function (event) {
		clearInterval(tid);
		var code = KEY_CODES[37];
		Key[code] = false;
		if (window.STAGE == 4) return;
		console.warn('down1')
		event.stopPropagation();
		event.preventDefault();
	}
	nc_left1.onmouseout = function (event) {
		clearInterval(tid);
		var code = KEY_CODES[37];
		Key[code] = false;
		if (window.STAGE == 4) return;
		console.warn('down2')
		event.stopPropagation();
		event.preventDefault();
	}
	nc_right1.onclick = function (event) {
		console.warn('111')
		var code = KEY_CODES[39];
		Key[code] = true;
		if (window.STAGE == 4) return;
		event.stopPropagation();
		event.preventDefault();
	}
	nc_right1.onmousedown = function (event) {
		tid = setInterval(function () {
			console.warn('l222')
			var code = KEY_CODES[39];
			Key[code] = true;
			if (window.STAGE == 4) return;
			event.stopPropagation();
			event.preventDefault();
		}, 100);
	}
	nc_right1.onmouseup = function (event) {
		clearInterval(tid);
		var code = KEY_CODES[39];
		Key[code] = false;
		if (window.STAGE == 4) return;
		console.warn('down1')
		event.stopPropagation();
		event.preventDefault();
	}
	nc_right1.onmouseout = function (event) {
		clearInterval(tid);
		var code = KEY_CODES[39];
		Key[code] = false;
		if (window.STAGE == 4) return;
		console.warn('down2')
		event.stopPropagation();
		event.preventDefault();
	}


	nc_top1.onclick = function (event) {
		console.warn('111')
		var code = KEY_CODES[38];
		Key[code] = true;
		if (window.STAGE == 4) return;
		event.stopPropagation();
		event.preventDefault();
	}
	nc_top1.onmousedown = function (event) {
		tid = setInterval(function () {
			console.warn('l222')
			var code = KEY_CODES[38];
			Key[code] = true;
			if (window.STAGE == 4) return;
			event.stopPropagation();
			event.preventDefault();
		}, 100);
	}
	nc_top1.onmouseup = function (event) {
		clearInterval(tid);
		var code = KEY_CODES[38];
		Key[code] = false;
		if (window.STAGE == 4) return;
		console.warn('down1')
		event.stopPropagation();
		event.preventDefault();
	}
	nc_top1.onmouseout = function (event) {
		clearInterval(tid);
		var code = KEY_CODES[38];
		Key[code] = false;
		if (window.STAGE == 4) return;
		console.warn('down2')
		event.stopPropagation();
		event.preventDefault();
	}


	nc_down1.onclick = function (event) {
		console.warn('111')
		var code = KEY_CODES[40];
		Key[code] = true;
		if (window.STAGE == 4) return;
		event.stopPropagation();
		event.preventDefault();
	}
	nc_down1.onmousedown = function (event) {
		tid = setInterval(function () {
			console.warn('l222')
			var code = KEY_CODES[40];
			Key[code] = true;
			if (window.STAGE == 4) return;
			event.stopPropagation();
			event.preventDefault();
		}, 100);
	}
	nc_down1.onmouseup = function (event) {
		clearInterval(tid);
		var code = KEY_CODES[40];
		Key[code] = false;
		if (window.STAGE == 4) return;
		console.warn('down1')
		event.stopPropagation();
		event.preventDefault();
	}
	nc_down1.onmouseout = function (event) {
		clearInterval(tid);
		var code = KEY_CODES[40];
		Key[code] = false;
		if (window.STAGE == 4) return;
		console.warn('down2')
		event.stopPropagation();
		event.preventDefault();
	}

	function aaa(){
		console.log(222)
	}
})(window);