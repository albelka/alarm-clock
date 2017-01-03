var Clock = require('./../js/alarm-clock.js').clockModule;
var hour = 0;
var minute = 0;
var newClock = new Clock();
$(document).ready(function() {
  $('.alarmTime').submit(function(event) {
    event.preventDefault();
    hour = parseInt($('#hour').val());
    minute = parseInt($('#minute').val());

  });
});
newClock.alarm(hour, minute);
setInterval(newClock.alarm, 1000);
