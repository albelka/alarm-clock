var Clock = require('./../js/alarm-clock.js').clockModule;

$(document).ready(function() {
  $('.alarmTime').submit(function(event) {
    event.preventDefault();
    var hour = parseInt($('#hour').val());
    var minute = parseInt($('#minute').val());
    var newClock = new Clock(hour, minute);
    var compare = function() {
      if(newClock.checkAlarm() === true) {
        alert("Wake up to a happy day!");
      }
    };
    setInterval(compare, 1000);
  });
});
