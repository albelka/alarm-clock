function Clock(hour, minute){
  this.hour = hour;
  this.minute = minute;
}

Clock.prototype.checkAlarm = function() {
  var currentHour = parseInt(moment().format('H'));
  var currentMinute = parseInt(moment().format('m'));
  if(currentHour === this.hour && currentMinute === this.minute) {
    return true;
  } else {
    return false;
  }
};

exports.clockModule = Clock;
