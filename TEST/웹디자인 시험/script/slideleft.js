$(function () 
    {nextani() {
  $(".slider").animate(
    {
      marginLeft: "-1200px",}
    }
    500,
    function () {
      $(".slider").eq(0).appendTo(".slide");
      $(".slider").css( {marginLeft, "0"});
    });
});
}
setInterval(function () {
  nextani();
}, 3000);
});