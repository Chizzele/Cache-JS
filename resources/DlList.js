class DlList {
  constructor(){
    this.head = null;
    this.tail = null;
    this.length = null; // not really needed but its nice to have
  }

  appendNode(nodeKey, data, dateTimeCreated, isExistingNode){ // appends a node to the end of list
    if(this.length == null) this.length = 0;
    let dateTimeAccessed = new Date(); // for testing, today
    if(isExistingNode){
      var node = isExistingNode;
    }else{
      var node = new Node(nodeKey, data, dateTimeCreated, dateTimeAccessed);
    }
    if(!this.head){ //null no need to set node prev/next as there is nothing else in list
      this.head = node;
      this.tail = node;
    }else{ //not null, head is set, will not change
      if(node.key == "TESTNODE"){
        if(test_list.length >= 100){ //test data limit
          console.log('breaker hit');
          test_list.traverseNodes("reverse", removeOldestTest);
        }
        node.prev = this.tail; //linked list so only really need to move the tail
        this.tail.next = node;
        this.tail = node;
      }else{
        node.prev = this.tail; //linked list so only really need to move the tail
        this.tail.next = node;
        this.tail = node;
      }

    }
    this.length = this.length + 1;
  }

  // append (n) amount of nodes to the list
  appendNewNode_n(amount, customData){
    if(customData){
      for(var i = 0; i < customData.length; i++){
        this.appendNode("", "", "", customData[i]);
      }
      console.log('Custom Data Loaded!');
    }else{
      let dateTimeCreated = new Date(); // for testing
      dateTimeCreated  = dateTimeCreated.setDate(dateTimeCreated.getDate()-1);
      for(var x = 0; x < amount; x++){
        this.appendNode("testData_"+amount , x, dateTimeCreated);
      }
      console.log('List Updated! ', amount, "entries added");
      $('#giphy').removeClass('gifyActive');
      $('#giphy').addClass('gifyGone');
    }
    return true;
  }

  logListOfNodes(){ //traverses nodes and logs them out
    var curr = this.head;
    while(curr != null){
      console.log(curr);
      curr = curr.next
    }
  }

  // pass a function to work on the list, you can do the above by passing console.log
  // by passing console.log for instance
  // example ...... list.traverseNodes(console.log)
  traverseNodes(direction, fn, node){
    if(direction == 'forward'){
      let curr = this.head;
      while(curr != null){
        if(curr.next == null){
          fn(curr, true);
        }else{
          fn(curr);
        }
        curr = curr.next
      }
    }else if(direction == 'reverse'){ // for use when finding the oldest
      let curr = this.tail;
      while(curr !== null){
       if(curr.prev == null){
         fn(curr, true);
       }else{
         fn(curr);
       }
       curr = curr.prev;
      }
    }
  }


  reset() { // resets the list back to initialized list (no nodes)
    let curr = this.head;
    while(curr){
      if( curr.data === undefined ){
        if(curr == this.head && curr == this.tail){
          this.head = null;
          this.tail = null;
        }else if( curr == this.head ) {
          this.head = this.head.next
          this.head.prev = null
        }else if( curr == this.tail ) {
          this.tail = this.tail.prev;
          this.tail.next = null;
        }else{
          curr.prev.next = curr.next;
          curr.next.prev = curr.prev;
        }
     }
     curr = curr.next
    }
    this.length = null;
  }

  //  remove an item at a certain indexition / index
  removeByIndex(index) {
    let curr = this.head;
    let counter = 1;
    if( index == 0 ) { // special case where we are removing head, therefore need to set it
     this.head = this.head.next;
     this.head.prev = null;
    }else{
     while(curr) { // while there are nodes, iterate
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

  // removeByKeyVal(key,val) {
  //   let curr = this.head;
  //   let counter = 1;
  //   if( index == 0 ) { // special case where we are removing head, therefore need to set it
  //    this.head = this.head.next;
  //    this.head.prev = null;
  //   }else{
  //    while(curr) { // while there are nodes, iterate
  //     curr = curr.next
  //     if ( curr == this.tail ) {
  //      this.tail = this.tail.prev;
  //      this.tail.next = null;
  //     } else if( counter == index ) {
  //      curr.prev.next = curr.next;
  //      curr.next.prev = curr.prev;
  //      break;
  //     }
  //     counter++;
  //    }
  //   }
  //   this.length = this.length - 1;
  // }

  removeNode(node){
    let curr = this.head; //traverse from head
    while(curr) {
      if(curr.values.data === node.values.data && curr.key === node.key){ //if found
        if(curr == this.head && curr == this.tail){
          this.head = null;
          this.tail = null;
        }else if(curr == this.head){
          this.head = this.head.next
          this.head.prev = null
        }else if(curr == this.tail){
          this.tail = this.tail.prev;
          this.tail.next = null;
        }else{
          curr.prev.next = curr.next;
          curr.next.prev = curr.prev;
        }
        this.length = this.length - 1;
        console.log('deleted', node);
     }
     curr = curr.next
    }
  }

  // findNode(node){
  //   let curr = this.head; //traverse from head
  //   while(curr) {
  //     if(curr.values.data === node.values.data && curr.key === node.key){ //if found
  //       console.log('found', node);
  //    }
  //    curr = curr.next
  //   }
  // }

  replaceByIndex( index, node ) {
    if(index > this.length){
      console.error('Index out of bounds');
      return false;
    }else{
      let curr = this.head;
      let counter = 1;
      if(index == 0){ //if - replace head
       this.head.values = node.values;
       this.head.key = node.key;
     }else if(index == this.length){ // if size, replace tail
       this.tail.values = node.values;
       this.tail.key = node.key;
     }else{
       while(curr){ // while there are nodes, iterate
        curr = curr.next
        if(counter == index){ //if index, replace at index
         curr.values = node.values;
         curr.key = node.key;
         break;
        }
        counter++;
       }
      }
      console.log('list updated');
      return true;
    }
  }
}

const list = new DlList(); //initializing list
const test_list = new DlList(); //initializing list
const backup_list = new DlList(); //initializing list
