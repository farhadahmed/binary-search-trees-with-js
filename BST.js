function test() {
	let tree = arrToTree();
	console.log(tree);
	tree.traverse();
	console.log(tree.search(20));
	console.log(tree.search(7));
	console.log(tree.search(40));
}

// Create an array of numbers and convert them into a binary tree
function arrToTree() {
	let nums = [10, 5, 15, 3, 20, 7, 13]

	let tree = new Tree();
	for (let i=0; i<nums.length; i++) {
		tree.addValue(nums[i]);
	}

	return tree;
}

// A new node should have a left and right that is null
function Node(val) {
	this.value = val;
	this.left = null;
	this.right = null;
}

// A new tree should have a null root.
function Tree() {
	this.root = null;
}

// If the tree is empty, create a new node at the root using the value passed.
// Otherwise, identify where to place the node in the tree
Tree.prototype.addValue = function (val) {
	let n = new Node(val);

	if (this.root == null) {
		this.root = n;
	} else {
		this.root.addNode(n);
	}
}

// addNode() finds where to place the new node
Node.prototype.addNode = function (n) {
	if (n.value < this.value) {
		if (this.left != null) {
			this.left.addNode(n);
		} else {
			this.left = n;
		}
	} else if (n.value > this.value) {
		if (this.right != null) {
			this.right.addNode(n);
		} else {
			this.right = n;
		}
	}
}

// Traverse and print each node
Tree.prototype.traverse = function() {
	this.root.visit();
}

// The visit() function of Node visits and prints each value
Node.prototype.visit = function() {
	if (this.left != null) {
		this.left.visit();
	}
	console.log(this.value);
	if (this.right != null) {
		this.right.visit();
	}
}

// Search for a value. The Tree basically works as a wrapper for the root node.
Tree.prototype.search = function(val) {
	let found = this.root.search(val);
	return found;
}

// The search() function of Node searches for a value and returns it. Otherwise returns null.
Node.prototype.search = function(val) {
	if (this.value == val) {
		return this;
	} else if (val < this.value && this.left != null) {
		return this.left.search(val);
	} else if (val > this.value && this.right != null) {
		return this.right.search(val);
	}

	return null;
}

test();