var circular = function (array) {
    "use strict";

    var module = {};

    module._array = array || [];
    module._index = 0;


    module.add = function (item) {
        return module._array.push(item);
    };

    module.next = function () {
        var ret;
        if (module._index < module._array.length) {
            ret = module._array[module._index];
            module._index = (module._index + 1) % module._array.length;
        }

        return ret;
    };

    module.prev = function () {
        var ret = module._array[module._array.length - module._index - 1];
        module._index = (module._index + 1) % module._array.length;
        
        return ret;
    };

    module.getArray = function () {
        return module._array;
    };

    module.toString = function () {
        return "The circular array has " + module._array.length + " items: " + module._array.toString();
    };

    return {
        add: module.add,
        next: module.next,
        prev: module.prev,
        getArray: module.getArray,
        toString: module.toString
    };

};
