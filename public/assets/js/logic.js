
$(".change-state").on("click", function () {
    var burgerId = $(this).attr("data-id");
    var state = $(this).attr("data-state");
    console.log(state);

    var insertState;
    if (state == 1) {
        insertState = 0;
    } else {
        insertState = 1;
    }
    $.ajax({
        method: "PUT",
        url: "/api/burgers/" + burgerId,
        data: { devoured: insertState },
        success: function (response) {
            location.href = "/";
        },
        error: function (error) {
            console.log(error);

        },
    });
});
// Created a post method below but still is unable to insert into database.
$(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
        burger_name: $("#ca").val().trim(),
        devoured: $("[name=devoured]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(
        function () {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
        }
        );
});