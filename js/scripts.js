$(document).ready(function() {
  $("button#catButton").click(function() {
    $("ul#user").prepend('<img id="cat" src="img/cat.jpg" />');
    $("ul#user").children("img").first().click(function() {
      alert("Meow");
      $("#cat").remove();
    });
  });
  $("button#dogButton").click(function() {
    $("ul#webpage").prepend('<img id="dog" src="img/dog.jpg" />');
    $("ul#webpage").children("img").first().click(function() {
      alert("bark");
      $("#dog").remove();
    });
  });
});


      // $("ul#user").children("img").first().click(function() {
      //   $("#cat").remove();
//then you attach a click handler to the ul tag but we want to attach
//an event handler to the one we just inserted
//so instead of just selecting li and attaching a listener we are selecting child elements



  //  $("ul#user").children("li").second().click(function() {
    //  $(this).show();



//   $("button#goodbye").click(function() {
//     $("ul#user").prepend("<li>Goodbye!</li>");
//     $("ul#webpage").prepend("<li>Goodbye dear user!</li>");
//
//     $("ul#user").children("li").first().click(function() {
//       $(this).remove();;
//     });
//     $("ul#webpage").children("li").first().click(function() {
//       $(this).remove();
//     });
// });
//
//   $("button#stop").click(function() {
//     $("ul#user").prepend("<li>Stop copying me!</li>");
//     $("ul#webpage").prepend("<li>Pardon Me. I meant no offense.</li>");
//     $("ul#user").children("li").first().click(function() {
//       $(this).remove();;
//     });
//     $("ul#webpage").children("li").first().click(function() {
//       $(this).remove();
//     });
//   });
