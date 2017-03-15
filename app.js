
var makeQR = function(){
  var w = $( document ).width();
  var h = $( document ).height();
  var size = (w > h) ? h : w;
  var str = $( "#urlstr" ).val();
  console.log(str);
  $(".code").qrcode({
      render: 'image',
      minVersion: 3,
      ecLevel: 'H',
      size: (size - 100),

      // content
      text: str,

      radius: 0.1,
      quiet: 1,
  });
  $( ".container" ).slideUp( "slow", function() {
    $(".code").fadeIn( "slow" );
  });
}

$('#urlstr').keypress(function (e) {
  if (e.which == 13) {
    makeQR();
  }
});

$( "#make" ).click(function() {
  if($( "#urlstr" ).val().trim() != ''){
    makeQR();
  }
});
