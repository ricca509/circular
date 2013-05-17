module("circular");

test("Get array", 1, function() {
    var buffer = new Circular(['a', 'b', 'c', 'd', 'e', 'f']);

    ok(buffer.getArray() !== undefined);
});

test("Content test", 2, function() {        
    var buffer = new Circular(['a', 'b', 'c', 'd', 'e', 'f']);
    ok(buffer.getArray().length === 6, "Content length ok");    

    var buffer1 = new Circular();
    ok(buffer1.getArray().length === 0, "Content length ok");    
});

test("Add element", 1, function() {
    var buffer = new Circular();
    buffer.add("element-1");

    ok(buffer.getArray().length === 1);
});

test("Next method", 6, function() {
    var buffer = new Circular(['a', 'b', 'c', 'd', 'e', 'f']);    
    ok(buffer.next() === 'a');
    ok(buffer.next() === 'b');
    ok(buffer.next() === 'c');
    ok(buffer.next() === 'd');
    ok(buffer.next() === 'e');
    ok(buffer.next() === 'f');
});

test("Prev method", 6, function() {
    var buffer = new Circular(['a', 'b', 'c', 'd', 'e', 'f']);    
    ok(buffer.prev() === 'f');
    ok(buffer.prev() === 'e');
    ok(buffer.prev() === 'd');
    ok(buffer.prev() === 'c');
    ok(buffer.prev() === 'b');
    ok(buffer.prev() === 'a');
});
