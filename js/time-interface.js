function updateTime(){
  $('span#current-time').text(moment().format('H:m:ss'));
}
setInterval(updateTime, 1000);
