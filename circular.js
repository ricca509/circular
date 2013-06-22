var Circular = (function () {
    "use strict";

    var Module = function (array) {
        this._array = array || [];
        this._index = 0;
    };

    Module.prototype.add = function (item) {
        return this._array.push(item);
    };

    Module.prototype.next = function () {
        var ret;
        if (this._index < this._array.length) {            
            ret = this._array[this._index];
            this._index = (this._index + 1) % this._array.length;                        
        }

        return ret;
    };

    Module.prototype.prev = function () {
        var ret = this._array[this._array.length - this._index - 1];
        this._index = (this._index + 1) % this._array.length;
        
        return ret;
    };

    Module.prototype.getArray = function () {
        return this._array;
    };

    Module.prototype.toString = function () {
        return "The circular array has " + this._array.length + " items: " + this._array.toString();
    };

    return Module;

})();
