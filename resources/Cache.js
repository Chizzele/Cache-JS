class Cache {
  // Cache will hold list, getting very tired
  constructor(name, limit){
    this.name = name;
    this.limit = limit;
    this.dataList = new Array();
    this.positionList = new Array();
  }

  buildUpCache(jsonObj, positions){
    this.dataList.push(jsonObj)
    this.positionList.push(positions)
  }

  save(){
    localStorage.setItem(this.name, JSON.stringify(this.dataList));
    console.log('Save Success!');
  }

  read(){
    localStorage.getItem(this.name)
    let info = JSON.parse(localStorage.getItem(this.name))
    // const retrievedList = new DlList();
    // retrievedList.appendNewNode_n(info.length)
    for(var x = 0 ; x < info.length; x++){
      console.log(info[x]);
    }
  }

  update(){
    // console.log(this);
  }

}

var mainCache = new Cache('mainCache', 10000);
var testCache = new Cache('testCache', 100);
