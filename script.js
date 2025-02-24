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
    console.log(i)
}

// homework
class EvenNumbers {
    constructor(start, end, step=1) {
        this.start = start;
        this.end = end; 
        this.step = step;
    }

    [Symbol.iterator] () {
        let cur = this.start % 2 === 0;
        let end = this.end;
        let step = this.step + 1;
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
    console.log(i)
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
    constructor(first, last, size) {
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
    }
}

