var environment = 'dev'; // set to production to run on the hour when data comes in
////////////////////////////// NOT IMPLEMENTED/////////////////////////////////////

//couldnt get the linke dlist manipulation in time... lots of wasted time there, explain
// why you wanted to do a linked list - insertion preservation

var dllToJson = {};
var positions = {};


// helper for date, adding hours for testing purposes
Date.prototype.addHours = function(h) {
   this.setTime(this.getTime() + (h*60*60*1000));
   return this;
}

Date.prototype.minusHours = function(h) {
  if(h >= 24){
    this.setDate(this.getDate() - Math.floor(h/24));
    h = h%24;
    this.setTime(this.getTime() - (h*60*60*1000));
  }else{
    this.setTime(this.getTime() - (h*60*60*1000));
  }

   return this;
}

// helper for date, adding day for testing purposes
Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
}

// helper for date, adding day for testing purposes
Date.prototype.minusDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() - days);
    return date;
}




function removeOldest(){

}


function prepareForSave(listItem){
  var mainKey = listItem.key;
  var next = listItem.next;
  var prev = listItem.prev;
  var values = listItem.values;
  dllToJson = {
    "mainKey" : listItem.key,
    // "next" : listItem.next,
    // "prev" : listItem.prev,
    "values" : values
  };
  positions = {
    "next" : listItem.next,
    "prev" : listItem.prev
  };

  mainCache.buildUpCache(dllToJson, positions);
}


let today = new Date();
let tomorrow = today.addDays(1)
let yesterday = today.minusDays(1);
