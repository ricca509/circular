describe("Circular library (implemented with Prototype pattern)", function () {
    it("should handle an input array", function () {
        var buffer = new Circular(['a', 'b', 'c', 'd', 'e', 'f']);

        expect(buffer.getArray()).toBeDefined();
    });

    it("should return the same array passed as input", function() {
        var buffer = new Circular(['a', 'b', 'c', 'd', 'e', 'f']);
        var buffer1 = new Circular();

        expect(buffer.getArray().length).toBe(6);
        expect(buffer1.getArray().length).toBe(0);
    });

    it("should allow a user to add more items", function() {
        var buffer = new Circular();
        buffer.add("element-1");

        expect(buffer.getArray().length).toBe(1);
    });

    it("should move to the next item when the 'next' method is called", function() {
        var buffer = new Circular(['a', 'b', 'c', 'd', 'e', 'f']);

        expect(buffer.next()).toBe('a');
        expect(buffer.next()).toBe('b');
        expect(buffer.next()).toBe('c');
        expect(buffer.next()).toBe('d');
        expect(buffer.next()).toBe('e');
        expect(buffer.next()).toBe('f');
        expect(buffer.next()).toBe('a');
        expect(buffer.next()).toBe('b');
    });

    it("should move to the previous item when the 'prev' method is called", function() {
        var buffer = new Circular(['a', 'b', 'c', 'd', 'e', 'f']);

        expect(buffer.prev()).toBe('f');
        expect(buffer.prev()).toBe('e');
        expect(buffer.prev()).toBe('d');
        expect(buffer.prev()).toBe('c');
        expect(buffer.prev()).toBe('b');
        expect(buffer.prev()).toBe('a');
        expect(buffer.prev()).toBe('f');
        expect(buffer.prev()).toBe('e');
    });
});

describe("Circular library (implemented with Module pattern)", function () {
    it("should handle an input array", function () {
        var buffer = circular(['a', 'b', 'c', 'd', 'e', 'f']);

        expect(buffer.getArray()).toBeDefined();
    });

    it("should return the same array passed as input", function() {
        var buffer = circular(['a', 'b', 'c', 'd', 'e', 'f']);
        var buffer1 = circular();

        expect(buffer.getArray().length).toBe(6);
        expect(buffer1.getArray().length).toBe(0);
    });

    it("should allow a user to add more items", function() {
        var buffer = circular();
        buffer.add("element-1");

        expect(buffer.getArray().length).toBe(1);
    });

    it("should move to the next item when the 'next' method is called", function() {
        var buffer = circular(['a', 'b', 'c', 'd', 'e', 'f']);

        expect(buffer.next()).toBe('a');
        expect(buffer.next()).toBe('b');
        expect(buffer.next()).toBe('c');
        expect(buffer.next()).toBe('d');
        expect(buffer.next()).toBe('e');
        expect(buffer.next()).toBe('f');
        expect(buffer.next()).toBe('a');
        expect(buffer.next()).toBe('b');
    });

    it("should move to the previous item when the 'prev' method is called", function() {
        var buffer = circular(['a', 'b', 'c', 'd', 'e', 'f']);

        expect(buffer.prev()).toBe('f');
        expect(buffer.prev()).toBe('e');
        expect(buffer.prev()).toBe('d');
        expect(buffer.prev()).toBe('c');
        expect(buffer.prev()).toBe('b');
        expect(buffer.prev()).toBe('a');
        expect(buffer.prev()).toBe('f');
        expect(buffer.prev()).toBe('e');
    });
});