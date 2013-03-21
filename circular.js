var Circular = (function () {
    "use strict";

    var module = function (array) {
        this._array = array || [];
        this._index = 0;
    };

    module.prototype.constructor = module;

    module.prototype.add = function (item) {
        return this._array.push(item);
    };

    module.prototype.next = function () {
        if (this._index < this._array.length) {
            this._index = (this._index + 1) % this._array.length;
            return this._array[this._index];
        }

        return undefined;
    };

    module.prototype.prev = function () {
        var ret = this._array[this._array.length - this._index - 1];
        this._index = (this._index + 1) % this._array.length;
        return ret;

        return undefined;
    };

    module.prototype.getArray = function () {
        return this._array;
    };

    module.prototype.toString = function () {
        return "The circular array has " + this._array.length + " items: " + this._array.toString();
    };

    return module;

})();

var buffer = new Circular(['a', 'b', 'c', 'd', 'e', 'f']);

for (var i = 0; i < 10; i++) {
    console.log(buffer.prev() + ' - ' + buffer._index);
}





