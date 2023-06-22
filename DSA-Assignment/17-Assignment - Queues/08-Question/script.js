class DataStream {
    constructor(value, k) {
      this.value = value;
      this.k = k;
      this.stream = [];
    }
  
    consec(num) {
      this.stream.push(num);
  
      if (this.stream.length < this.k) {
        return false;
      }
  
      for (let i = this.stream.length - this.k; i < this.stream.length; i++) {
        if (this.stream[i] !== this.value) {
          return false;
        }
      }
  
      return true;
    }
  }
  

// Testing Example :

  const dataStream = new DataStream(4, 3);
  const output = [];
  
  output.push(null); // Initializing the object, so null is added to the output array
  output.push(dataStream.consec(4)); // false
  output.push(dataStream.consec(4)); // false
  output.push(dataStream.consec(4)); // true
  output.push(dataStream.consec(3)); // false
  
  console.log(output);
  