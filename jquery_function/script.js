$(document).ready(() => {
  //add class function
  $("#addClass").click(() => {
    $("#addClassP").addClass("addPclass");
  });

  //slide toggle function
  $("#hiddenP").hide();
  $("#slideToBottom").click(() => {
    $("#hiddenP").toggle(500);
  });

  // append p function
  $("#append").click(() => {
    $(".append").append("<p>new pargraph!</p>");
  });

  // slideDown function.
  $("#slideDownP").hide();
  $("#slidDownButton").click(() => {
    $("#slideDownP").slideDown(500);
  });

  //   slideUp function.
  $("#slideupButton").click(() => {
    $("#slideupP").slideUp(500);
  });

  //   before function.
  $("#before").click(() => {
    $("#beforeP").before("<p>this is before p</p>");
  });

  // After funtion
  $("#after").click(() => {
    $("#afterP").before("<p>this is after p</p>");
  });

  // HTML function.
  $("#html").click(() => {
    $("#htmlP").html("I changed your content html!");
  });

  // Text function.
  $("#text").click(() => {
    $("#textP").html("I changed your content by text!");
  });

  // Attr function.
  $("#attr").click(() => {
    $(".box input").attr("placeholder", "I added new placeholder");
  });
});
