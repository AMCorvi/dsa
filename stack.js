function Stack() {
    this.stack = "";
}

Stack.prototype.push = function (val) {
   console.log("Adding", val, "to stack!")

	// if this is no value on the stack add plain value
   if (this.stack === "") return this.stack = `${val}`;

	// when stack contains value prepend value 'word' in format `word-`
   else return this.stack = `${val}-`.concat(this.stack);
}

Stack.prototype.pop = function () {

	// Break stack down IT OWN array;
	let one = this.stack.split("-");

	// Edit array of value in by removing 0 index;
	const removed = one.splice(0,1);

	// Set the stack as string interpretaion of remaining values in array
	this.stack = one.join("-")
	console.log("Removed the value:", removed, "from the top of the stack!")
}

Stack.prototype.size = function () {
	// Determine length of stack by converting to array & counting length
    return console.log("Stack is a size of: ", this.stack.split("-").length );
}

Stack.prototype.peek = function () {
	// Log value of stack
	return console.log("The current stack is:", this.stack)
}

const myStack = new Stack();
myStack.push("this");
myStack.push("bow");
myStack.push("bliss");
myStack.pop();
myStack.peek();
myStack.size();
