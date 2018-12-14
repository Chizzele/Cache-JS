class Node {
  // simple node, value will be an object with
  // "data", dateTimeAccessed and dateTimeCreated
  constructor(key, data, dateTimeCreated, dateTimeAccessed ){
    this.key = key;
    this.values = {
      "data" : data,
      "dateTimeCreated" : dateTimeCreated,
      "dateTimeAccessed" : dateTimeAccessed
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
