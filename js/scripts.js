$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul").prepend("<li>Hello!</li>");

});
  $("button#goodbye").click(function() {
    $("ul").prepend("<li>Goodbye!</li>");

});

  $("button#stop").click(function() {
    $("ul").prepend("<li>Stop copying me!</li>");

  });
});

// $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
// $("body").css("background-color" , "white");
// $("ul#webpage").prepend("<li>Goodbye dear user</li>");
// $("body").css("background-color" , "white");

// $("ul#webpage").prepend("<li>Why hello there</li>");
// $("body").css("background-color" , "green");
