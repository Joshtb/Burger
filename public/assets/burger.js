$(function() {
  $(".change-food").on("click", function(event) {
    var id = $(this).data("id");
    var newSleep = $(this).data("newsleep");

    var newFoodState = {
      devoured: 1
    };
   
// STOPPED HERE------------------
    // burgers
    //   burger_name = this.data("burger_name")
    //   devoured = true

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newFoodState
    }).then(
      function() {
        console.log("changed sleep to", newFood);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  })

$(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      burger_name: $("#ca").val(),
      devoured: $("[name=devoured]:checked").val()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
    
        location.reload();
      }
    );
  })


});
