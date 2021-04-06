$(document).ready(function () {
  //   images function
  $(".images-box img").click(function () {
    $(this).hide(500);
  });
  // button function
  $("#restore").click(function () {
    $("img").show(1000);
  });
});
