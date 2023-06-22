class FrontMiddleBackQueue {
    constructor() {
      this.queue = [];
    }
  
    pushFront(val) {
      this.queue.unshift(val);
    }
  
    pushMiddle(val) {
      const middleIndex = Math.floor(this.queue.length / 2);
      this.queue.splice(middleIndex, 0, val);
    }
  
    pushBack(val) {
      this.queue.push(val);
    }
  
    popFront() {
      if (this.queue.length === 0) return -1;
      return this.queue.shift();
    }
  
    popMiddle() {
      if (this.queue.length === 0) return -1;
      const middleIndex = Math.floor((this.queue.length - 1) / 2);
      return this.queue.splice(middleIndex, 1)[0];
    }
  
    popBack() {
      if (this.queue.length === 0) return -1;
      return this.queue.pop();
    }
  }
  
  const operations = [
    "FrontMiddleBackQueue",
    "pushFront",
    "pushBack",
    "pushMiddle",
    "pushMiddle",
    "popFront",
    "popMiddle",
    "popMiddle",
    "popBack",
    "popFront",
  ];
  const values = [
    [],
    [1],
    [2],
    [3],
    [4],
    [],
    [],
    [],
    [],
    [],
  ];
  
  const queue = new FrontMiddleBackQueue();
  const output = [];
  
  for (let i = 1; i < operations.length; i++) {
    const operation = operations[i];
    const value = values[i][0];
    let result;
  
    switch (operation) {
      case "pushFront":
        queue.pushFront(value);
        result = null;
        break;
      case "pushMiddle":
        queue.pushMiddle(value);
        result = null;
        break;
      case "pushBack":
        queue.pushBack(value);
        result = null;
        break;
      case "popFront":
        result = queue.popFront();
        break;
      case "popMiddle":
        result = queue.popMiddle();
        break;
      case "popBack":
        result = queue.popBack();
        break;
      default:
        break;
    }
  
    output.push(result);
  }
  
  console.log(output);
  