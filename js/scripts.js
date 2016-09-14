$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there</li>")

});
  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye dear user!</li>");

});

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon Me. I meant no offense.</li>");

  });
});

// $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
// $("body").css("background-color" , "white");
// $("ul#webpage").prepend("<li>Goodbye dear user</li>");
// $("body").css("background-color" , "white");

// $("ul#webpage").prepend("<li>Why hello there</li>");
// $("body").css("background-color" , "green");
