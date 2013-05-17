#Circular

**What**

A simple and tiny Javascript implementation of a circular buffer.

**Usage**

```javascript
var buffer = new Circular();
// or
var buffer2 = new Circular(["a", "b", "c", "d"]); // Initialize with an array

buffer.add("value-1");
buffer.add("value-2");

console.log(buffer.next());	// Output: "value-1"
console.log(buffer.next());	// Output: "value-2"
console.log(buffer.next());	// Output: "value-1"
console.log(buffer.prev());	// Output: "value-2"
```

**Tests**

There is a Grunt file to run QUnit tests and Hinting.

```javascript
$ grunt qunit
$ grunt jshint
```

or, easier

```javascript
$ npm test
```

If you have any questions or feedback, feel free to contact me using [@CoppolaRiccardo](https://twitter.com/CoppolaRiccardo) on Twitter.
