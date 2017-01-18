$(document).ready(function() {
  $("form#binary-form").submit(function(event) {
    event.preventDefault();
    $("#output").empty();
    var item = parseInt($("#tbox").val())
    item = item.toString(2);
    $("#output").append("<p>" + item + "</p>");
  });
});
