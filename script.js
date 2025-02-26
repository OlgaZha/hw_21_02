class Range {
    constructor(start, end, step=1){
        this.start = start;
        this.end = end;
        this.step = step;
    }

    [Symbol.iterator] () {
        let current = this.start;
        let end = this.end;
        let step = this.step;
        return {next(){
            if(current <= end) {
                let value = current;
                current += step;
                return {value, done: false}
            } else {
                return {done: true}
            }
        }}
    }
}

let range = new Range(1, 10, 2)
for(let i of range) {
    // console.log(i)
}

// homework
class EvenNumbers {
    constructor(start, end) {
        this.start = start %2===0 ? start : start +1;
        this.end = end; 
    }

    [Symbol.iterator] () {
        let cur = this.start;
        let end = this.end;
        return {next() {
            if(cur <= end) {
                let value = cur;
                cur += 2;
                return {value, done: false}
            } else {
                return {done: true}
            }
        }}
    }
}

let evenNum = new EvenNumbers(1,10) 
for(let i of evenNum) {
    // console.log(i)
}

// Stack 
class Node {
    value
    next
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        let node = new Node(value);
        if(!this.first) {
            this.first = node;
            this.last = node;
        } else {
            let temp = this.first;
            this.first = node;
            this.first.next = temp;
        }
        return this.size++;
    }

    pop() {
        let temp = this.first;
        if(!this.first) {
            return null;
        } else {

            if(this.first === this.last) {
                this.first = null;
            }
            this.first = this.first.next;
            return temp.value;
        }
        this.size --;
    }
}

let newStack = new Stack();
newStack.push(1);
newStack.push(2);
newStack.push(3);
newStack.push(4);

// console.log(newStack.first);
// console.log(newStack.last);

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
//push
    enqueue(value) {
        let node = new Node(value);
        if(!this.first) {
            this.first = node;
            this.last = node;
        } else {
            this.last.next = node;
            this.last = node;
        }
        return this.size++;
    }

    dequeue() {
        let temp = this.first;
        if(!this.first){
            return null;
        } else {

            if(this.first === this.last) {
                this.first = null;
            }
            this.first = this.first.next;
        }
        this.size--;
        return temp.value;
    }
}

let newQueue = new Queue();
newQueue.enqueue(1);
newQueue.enqueue(2);
newQueue.enqueue(3);
newQueue.enqueue(4);

// console.log(newQueue.first);
// console.log(newQueue.last);

class UndoStack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    performOperation(value) {
        let node = new Node(value);
        if(!this.first) {
            this.first = node;
            this.last = node;
        } else {
            let temp = this.first;
            this.first = node;
            this.first.next = temp;
        }
        return this.size++;
    }

    undoOperation() {
        let temp = this.first;
        if(!this.first) {
            return null;
        } else {
            if(this.first === this.last) {
                this.first = null;
            }
            this.first = this.first.next;
            return temp.value;
        }
        this.size --;
    }
}

let stack = new UndoStack()
stack.performOperation(3)
stack.performOperation(1)
stack.performOperation(4)
stack.performOperation(2)
stack.undoOperation()
console.log(stack)
