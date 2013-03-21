var Circular = (function() {
	"use strict";

	var module = function(array) {
		this._array = array || [];
		this._index = 0;
	};

	module.prototype.constructor = module;    

	module.prototype.add = function(item) {
		return this._array.push(item);
	};

	module.prototype.next = function() {		
		if (this._index < this._array.length) {
			this._index = (this._index + 1) % this._array.length;
			return this._array[this._index];		
		}

		return undefined;
	};

	module.prototype.prev = function() {
		if (this._index < this._array.length) {			
			var ret = this._array.reverse()[this._index];		
			this._index = (this._index + 1) % this._array.length;
			this._array.reverse();
			return ret;
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



