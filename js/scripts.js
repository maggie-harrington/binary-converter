$(document).ready(function() {
  $("form#binary-form").submit(function(event) {
    event.preventDefault();
    $("#output").empty();
    var item = parseInt($("#tbox").val());

    if (item.toString() === "NaN") {
      item = "Please Enter A Number"
    } else if ($("input:radio[name=base]:checked").val() === "binary") {
      item = item.toString(2);
    } else if ($("input:radio[name=base]:checked").val() === "trinary") {
      item = item.toString(3);
    } else if ($("input:radio[name=base]:checked").val() === "hex") {
      item = item.toString(16);
    }

    $("#output").append("<p>" + item + "</p>");
  });
});
