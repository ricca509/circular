"use strict";

var Circular = function(array) {
	this._array = array !== undefined ? array : [];
	this._index = 0;
};

Circular.prototype.add = function(item) {
	return this._array.push(item);
};

Circular.prototype.next = function() {
	var len = this._array.length;
	var index = this._index % len;
	if (index <= len) {
		this._index = (this._index + 1) % len;
		return this._array[index];		
	}

	return undefined;
};

Circular.prototype.getArray = function() {
	return this._array;
};

Circular.prototype.toString = function() {
	return "The circular array has " + this._array.length + " items: " + this._array.toString(); 
};
