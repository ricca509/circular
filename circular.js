var Circular = (function() {
	"use strict";

	var module = function(array) {
		this._array = array !== undefined ? array : [];
		this._index = 0;
	};

	module.prototype.constructor = module;    

	module.prototype.add = function(item) {
		return this._array.push(item);
	};

	module.prototype.next = function() {
		var len = this._array.length;
		var index = this._index % len;
		if (index <= len) {
			this._index = (this._index + 1) % len;
			return this._array[index];		
		}

		return undefined;
	};

	module.prototype.getArray = function() {
		return this._array;
	};

	module.prototype.toString = function() {
		return "The circular array has " + this._array.length + " items: " + this._array.toString(); 
	};

	return module;

})();

