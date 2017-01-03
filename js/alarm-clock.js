function Clock(){
}


Clock.prototype.alarm = function(hour, minute) {
  var currentHour = parseInt(moment().format('H'));
  var currentMinute = parseInt(moment().format('m'));

  if(hour === currentHour && minute === currentMinute) {
    return alert("Wake up to a happy day!");
  }
};


exports.clockModule = Clock;
