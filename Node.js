class Node {
  // simple node, value will be an object with
  // "data", dateTimeModified and dateTimeCreated
  constructor(key, data, dateTimeModified, dateTimeCreated) {
    this.key = key;
    this.value = {
      "data" : data,
      "dateTimeCreated" : dateTimeCreated,
      "dateTimeModified" : dateTimeModified
    };
    this.next = null;
    this.prev = null;
  }

  getKey(){
    return this.key;
  }

  getVal(){
    return this.value;
  }

}
