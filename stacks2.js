/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.


*** Operations:

myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.count()
=> number of elements in stack


*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?



 */

function Stack(capacity) {
	this.capacity = capacity;
	this.stack = {};
	this.size = 0;
}

Stack.prototype.push = function(value) {
	// If size is limited see check if stack is at max ? *log error* : *proceed*
	if (this.capacity && this.size >= this.capacity) {
		return console.error(
			"Max capacity already reached. Remove element before adding a new one."
		);
	}

	console.log("Adding item to the stack!");
	// Add value to top of stack
	this.stack[this.size] = value;

	// Increment Size by 1
	return ++this.size;
};
// Time complexity:

Stack.prototype.pop = function() {
	// If there are any values to remove? *proceed* : *log error*
	if (this.size <= 0) return console.log("This stack is currently empty!");

	// Remove top most from stack
	// Decrement size
	console.log("Removing top item from stack!");
	this.stack[--this.size];

	return this.size;
};
// Time complexity:

Stack.prototype.peek = function() {
	// Return value of top most[a.k.a last in] item
	console.log(`The next item on the stack is: ${this.stack[this.size - 1]}`);
	return this.stack[this.size - 1];
};
// Time complexity:

Stack.prototype.count = function() {
	// Return size of the stack
	console.log(`The stack is currently ${this.size} items large`);
	return this.size;
};
// Time complexity:

Stack.prototype.contains = function(findme) {
	// Create Result Variable
	let found = false;

	// Loop over stack value
	for (const g in this.stack) {
		if (this.stack[g] == findme) {
			found == true;
		}
	}

	found &&
		console.log(
			`This stack does ${found ? "" : "not"} contain the value ${findme}`
		);
	return found;
};

Stack.prototype.until = function(until) {
	let index;
	let currentIndex = this.size - 1;
	// If stack contains value `until` ? *proceed* : *Log Error*
	if (!this.contains(until))
		return console.error(
			`The item ${until} is not contained within this stack!`
		);

	// Loop backward over stack to determine index [property_name] of 'until' value
	while (index && currentIndex < 0) {
		if (this.stack[currentIndex] == until) {
			index = this.stack[currentIndex];
			break;
		}
		--currentIndex;
	}

	console.log(
		`The ${index == 1 ? "is" : "are"} items until ${until} in the stack `
	);
	return this.size - 1 - index;
};

const S = new Stack(5);
S.push("Boston");
S.push("Seattle");
S.push("Cuba");
S.push("Lisbon");
S.push("San Francisco");
S.push("Moscow");
S.count();
S.pop();
S.contains("Cuba");
S.contains("until");
S.until("Boston");
S.peek();

/*
*** Exercises:

1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.

2. Sort a stack so that its elements are in ascending order.

3. Given a string, determine if the parenthesis in the string are balanced.
Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false

4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
   1. only one disk can be moved at a time
   2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
   3. no disk can be placed on top of a disk that is smaller than it
The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
 */
