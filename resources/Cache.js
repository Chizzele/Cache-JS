class Cache {
  // Cache will hold list, getting very tired
  constructor(name){
    this.name = name;
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
    // localStorage.setItem(this.name, JSON.stringify(this.dataList), this.positionList);
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

}

var mainCache = new Cache('mainCache')
