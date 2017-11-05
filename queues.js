/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?

*/

const chalk = require("chalk");
const log = console.log;

function Queue(capacity) {
	// set the maximun capacity of a queue;
	this.capacity = capacity;
	this.size = 0;
	this.queue = {};
}

Queue.prototype.enqueue = function(value) {

	if(this.size >= this.capacity) return log("Max capacity already reached. Remove element before adding a new one.");

	// Add value to queue object;
	log(chalk.green("Adding item to queue!"))
	this.queue[this.size] = value;

	// Increment size of queue object
	return ++this.size;
};
// Time complexity:

Queue.prototype.dequeue = function() {
	log(chalk.red("Dequeuing last item in queue!"))
	// Remove last item from the queue object
	delete this.queue[this.size - 1];
	// Decrement size of queue object
	return --this.size;
};
// Time complexity:

Queue.prototype.peek = function() {
	// Return next[first] object in the queue
	log("Next item in the queue is:", this.queue[0])
	return this.queue[0];
};

Queue.prototype.count = function() {
	log("There are currently", this.size, "items" )
	return this.size;
};
// Time complexity:

Queue.prototype.contains = function (findme) {

	// Convert Stack Into Array
	let found =	Object.values(this.queue)
	// Compare each value to the 'findme'
	.includes(findme);
	// Return true if 'findme' exist in set of value, false if not
	console.log("The item", findme, "is" + (found ? "" :" not"), "in this queue");
	return found;

};

Queue.prototype.until = function (until) {
    // Determine if 'until' actually exist in queue ? *proceed* : *log error*
	let index = Object.values(this.queue).indexOf(until);
	if ( index < 0) {
		 console.error("Value is not contained in queue");
		 return false;
	}

	// Find index of next instance of until
	console.log(`There ${index==1 ? "is" : "are"} ${index} items until value '${until}' is reached`)
	return index;
}

const Q = new Queue(9);
Q.enqueue("red");
Q.enqueue("yellow");
Q.enqueue("green");
Q.enqueue("red");
Q.enqueue("yellow");
Q.enqueue("green");
Q.enqueue("red");
Q.enqueue("yellow");
Q.enqueue("green");
Q.enqueue("red");
Q.enqueue("yellow");
Q.enqueue("green");
Q.dequeue();
Q.contains("white")
Q.contains("green")
Q.peek();
Q.until("green");
Q.count();

/*
*** Exercises:

1. Implement a queue using two stacks.

2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.

3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.


 */
