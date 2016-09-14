$(document).ready(function() {
  $("button#hello").click(function() {
    $("ul#user").prepend("<li>Hello!</li>");
    $("ul#webpage").prepend("<li>Why hello there</li>");

//then you attach a click handler to the ul tag but we want to attach
//an event handler to the one we just inserted
//so instead of just selecting li and attaching a listener we are selecting child elements
    $("ul#user").children("li").first().click(function() {
      alert("hi");
    });
    $("ul#webpage").children("li").first().click(function() {
      alert("hi");
    });
  });
  $("button#goodbye").click(function() {
    $("ul#user").prepend("<li>Goodbye!</li>");
    $("ul#webpage").prepend("<li>Goodbye dear user!</li>");

    $("ul#user").children("li").first().click(function() {
      alert("hi");
    });
    $("ul#webpage").children("li").first().click(function() {
      alert("hi");
    });
});

  $("button#stop").click(function() {
    $("ul#user").prepend("<li>Stop copying me!</li>");
    $("ul#webpage").prepend("<li>Pardon Me. I meant no offense.</li>");
    $("ul#user").children("li").first().click(function() {
      alert("hi");
    });
    $("ul#webpage").children("li").first().click(function() {
      alert("hi");
    });
  });

});
