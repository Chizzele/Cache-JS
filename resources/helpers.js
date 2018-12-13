var environment = 'dev'; // set to production to run on the hour when data comes in
////////////////////////////// NOT IMPLEMENTED/////////////////////////////////////

// helper for date, adding hours for testing purposes
Date.prototype.addHours = function(hToAdd) {
   this.setTime(this.getTime() + (h*60*60*1000));
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


let today = new Date();
let tomorrow = today.addDays(1)
let yesterday = today.minusDays(1);
