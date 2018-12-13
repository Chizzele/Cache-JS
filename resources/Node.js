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
  }

  getKey(){
    return this.key;
  }

  getVal(){
    return this.values;
  }

}

const testerNode = new Node("TESTNODE", "T1", yesterday, today);
const testerNode2 = new Node("TESTNODE", "T2", yesterday, today);
