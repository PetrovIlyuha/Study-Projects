class MySum {
  constructor(initialValue = 1) {
    this.sum = initialValue;
  }

  add(value) {
    this.sum += value;
    return this;
  }

  substract(value) {
    this.sum -= value;
    return this;
  }
}

const sum1 = new MySum();
console.log(sum1.add(8).add(10).substract(3));