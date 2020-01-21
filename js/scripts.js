$(document).ready(function(){
  $('#formOne').submit(function(event){
    var dataArr = [$('#thing1').val(),$('#thing2').val(),$('#thing3').val()];

    $('#thing1listI').text(dataArr[0]);
    $('#thing2listI').text(dataArr[1]);
    $('#thing3listI').text(dataArr[2]);

    event.preventDefault();
  });

});