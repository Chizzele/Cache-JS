var environment = 'dev'; // set to production to run on the hour when data comes in
////////////////////////////// NOT IMPLEMENTED/////////////////////////////////////

//couldnt get the linke dlist manipulation in time... lots of wasted time there, explain
// why you wanted to do a linked list - insertion preservation

var dllToJson = {};
var positions = {};
var oldest = null;
var tempNode = null;
var foundNode = null;


// helper for date, adding hours for testing purposes
Date.prototype.addHours = function(h) {
   this.setTime(this.getTime() + (h*60*60*1000));
   return this;
}

function minusHours(date, hours){
  date.setHours(date.getHours() - hours);
  return date;
}


// helper for date, adding day for testing purposes
Date.prototype.minusDays = function(days){
    this.setDate(this.getDate() - days);
    return this;
}

function is24HoursOld(date){
  var yesterdayTime = new Date().getHours() - 1
    if (yesterdayTime > date){
        return true;
    }
    else if (yesterdayTime < date){
        return false;
    }
}


// TODO: DO THE DATE TIME MODIFIED LOGIC

// iterates through the list and rips out the oldest one... savage
function removeOldestMain(listItem, final){
  var values = listItem.values;
  if(oldest == null){
    oldest = listItem;
  }else{
    if(values.dateTimeCreated <= oldest.values.dateTimeCreated){
      oldest = listItem
    }
    if(final == true){ // on final call... declare the poor soul BANISHED mwahahah
      list.removeNode(oldest);
      oldest = null;
    }
  }
}

// iterates through the list and rips out the oldest one... savage
// on the test listing though
function removeOldestTest(listItem, final){
  var values = listItem.values;
  if(tempNode == null){
    tempNode = listItem;
    oldest = tempNode;
  }else{
    // created before , and no accesstime, set
    if(values.dateTimeCreated <= oldest.values.dateTimeCreated && values.dateTimeAccessed == undefined){
      console.log('setting');
      oldest = listItem;
    // created before , and access time is more than oldest time created, donts set
    }else if(values.dateTimeAccessed > oldest.values.dateTimeCreated){
      oldest = oldest;
    // accessed is less than date time created
    }else if(values.dateTimeAccessed < oldest.values.dateTimeCreated){
      oldest = listItem;
    }
    if(final == true){ // on final call... declare the poor soul BANISHED mwahahah
      console.log("EXPECTED STRING = T32TQE2\nActual String =  ", oldest.values.data)
      test_list.removeNode(oldest);
      testCache.update();
      oldest = null;
    }
  }
}

function findNode(listItem, final, nodeToFind){
  if(tempNode == null){
    tempNode = listItem;
  }else{
    console.log(listItem, nodeToFind);
    if(tempNode.values.data === listItem.values.data && tempNode.key === listItem.key){
      foundNode = listItem;
      console.log('found', foundNode);
    }else if(foundNode == null && final == true){
      alert('node not found');
    }
  }
}



function prepareForSaveMain(listItem){
  var values = listItem.values;
  dllToJson = {
    "mainKey" : listItem.key,
    "values" : values
  };
  positions = {
    "next" : listItem.next,
    "prev" : listItem.prev
  };

  mainCache.buildUpCache(dllToJson, positions);
}

function prepareForSaveTest(listItem){
  var mainKey = listItem.key;
  var next = listItem.next;
  var prev = listItem.prev;
  var values = listItem.values;
  dllToJson = {
    "mainKey" : listItem.key,
    "values" : values
  };
  positions = {
    "next" : listItem.next,
    "prev" : listItem.prev
  };

  testCache.buildUpCache(dllToJson, positions);
}


var today = new Date();
