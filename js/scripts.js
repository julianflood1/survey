$(document).ready(function(){
  $("#blanks form").submit(function(event) {
    var nameInput = $("input#name").val();
    var foodInput = $("#favoriteFood").val();
    var musicInput = $("input:radio[name=music]:checked").val();
    var dobInput = $("input#dateOfBirth").val();
    var colorInput = $("input#favoriteColor").val();

    $(".name").text(nameInput);
    $(".favoriteFood").text(foodInput);
    $(".favoriteMusic").text(musicInput);
    $(".dateOfBirth").text(dobInput);
    $(".favoriteColor").text(colorInput);

    $("#information").show();
    $("#blanks").hide();
    event.preventDefault();

  });
});
