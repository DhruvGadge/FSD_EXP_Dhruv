// Change button text using jQuery
$("#jqueryButton").click(function () {
    $(this).text("Text Changed with jQuery");
});

// Set background image using jQuery
$("#changeStyle").click(function () {
    $("body").css("background-image", "url('/A')");
});

// Access form data using jQuery
$("#accessData").click(function () {
    const name = $("#name").val();
    alert("Form Data: " + name);
});

// Add attribute using jQuery
$("#accessData").click(function () {
    $("#name").attr("placeholder", "Name accessed with jQuery");
});
