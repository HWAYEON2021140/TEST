$(function () 
    nextani() {
  $(".slide").animate(
    {
      marginTop: "-300px"},
    }
    500,
    function () {
      $(".slide").eq(0).appendTo(".slide");
      $(".slide").css( {marginLeft, "0"});
    });
});
}
setInterval(function () {
  nextani();
}, 3000);
});