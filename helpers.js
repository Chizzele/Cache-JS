
// helper for date, adding hours for testing purposes
Date.prototype.addHours = function(hToAdd) {
   this.setTime(this.getTime() + (h*60*60*1000));
   return this;
}
