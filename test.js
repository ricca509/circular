// Tests

var buffer = new Circular();
var buffer2 = new Circular(["a", "b", "c", "d"]);

for(var i = 0; i < 10; i++) {
	buffer.add("value-" + i);
	if (i % 2 === 0) {
		buffer2.add("value-" + i);
	}
}

for(var j = 0; j < 22; j++) {
	//console.log("Buffer1: " + buffer.next());
	//console.log("Buffer2: " + buffer2.next());
}

for(var j = 0; j < 22; j++) {
	console.log("Buffer1: " + buffer.prev() + " - " + buffer._index + " - " + buffer._array);
	//console.log("Buffer2: " + buffer2.next());
}

console.log(buffer.toString());
console.log(buffer2.toString());
