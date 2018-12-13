class Node {
  // simple node, value will be an object with
  // "data", dateTimeModified and dateTimeCreated
  constructor(key, data, dateTimeCreated, dateTimeModified ){
    this.key = key;
    this.values = {
      "data" : data,
      "dateTimeCreated" : dateTimeCreated,
      "dateTimeModified" : dateTimeModified
    };
    this.next = null;
    this.prev = null;
    Node.preInitInstanceArr.push(this);
  }

  getKey(){
    return this.key;
  }

  getVal(){
    return this.values;
  }

}

Node.preInitInstanceArr = [];
