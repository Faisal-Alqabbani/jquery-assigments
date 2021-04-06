$(document).ready(function () {
  $("img").hover(function () {
    let data = $(this).attr("data-alt-src");
    let src = $(this).attr("src");
    if ($(this).attr("src") === data) {
      $(this).attr("src", src);
      $(this).attr("data-alt-src", data);
    } else {
      $(this).attr("src", data);
      $(this).attr("data-alt-src", src);
    }
  });
});
