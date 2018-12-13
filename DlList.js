class DlList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = null; // not really needed but its nice to have
  }

  appendNewNode(nodeKey, data, dateTimeCreated){ // appends a node to the end of list
    if(this.length == null) this.length = 0;
    let dateTimeModified = new Date(); // for testing
    let node = new Node(nodeKey, data, dateTimeCreated, dateTimeModified);
    if(!this.head){ //null no need to set node prev/next as there is nothing else in list
      this.head = node;
      this.tail = node;
    }else{ //not null, head is set, will not change
      node.prev = this.tail; //linked list so only really need to move the tail
      this.tail.next = node;
      this.tail = node;
    }
    this.length = this.length + 1;
  }

  // append (n) amount of nodes to the list
  appendNewNode_n(amount){
    let dateTimeCreated = new Date(); // for testing
    dateTimeCreated  = dateTimeCreated.setDate(dateTimeCreated.getDate()-1);
    for(var x = 0; x < amount; x++){
      this.appendNewNode("testData_"+amount , x, dateTimeCreated);
    }
    console.log('List Updated! ', amount, "entries added");
    return true;
  }

  logListOfNodes(){ //traverses nodes and logs them out
    var curr = this.head;
    while( curr != null){
      console.log(curr);
      curr = curr.next
    }
  }

  // pass a function to work on the list, you can do the above by passing console.log
  // by passing console.log for instance
  // example ...... list.traverseNodes(console.log)
  traverseNodes(fn){
    var curr = this.head;
    while( curr != null){
      fn(curr);
      curr = curr.next
    }
  }

  reset() { // resets the list back to initialized list (no nodes)
    let curr = this.head;
    while( curr ) {
      if( curr.data === undefined ) {
        if( curr == this.head && curr == this.tail ) {
          this.head = null;
          this.tail = null;
        } else if ( curr == this.head ) {
          this.head = this.head.next
          this.head.prev = null
        } else if ( curr == this.tail ) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        } else {
          curr.prev.next = curr.next;
          curr.next.prev = curr.prev;
        }
     }
     curr = curr.next
    }
    list.length = null;
  }

  //  remove an item at a certain indexition / index
  removeByIndex(index) {
    let curr = this.head;
    let counter = 1;
    if( index == 0 ) { // special case where we are removing head, therefore need to set it
     this.head = this.head.next;
     this.head.prev = null;
    } else {
     while( curr ) {
      curr = curr.next
      if ( curr == this.tail ) {
       this.tail = this.tail.prev;
       this.tail.next = null;
      } else if( counter == index ) {
       curr.prev.next = curr.next;
       curr.next.prev = curr.prev;
       break;
      }
      counter++;
     }
    }
    this.length = this.length - 1;
  }

}

const list = new DlList(); //initializing list
const backup_list = new DlList(); //initializing list
