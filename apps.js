// app.js
$(document).ready(function() {
    // Listen for click event on the search button
    $('#searchButton').click(function() {
        // Make an AJAX call using jQuery's ajax() method
        $.ajax({
            url: 'http://localhost:8081/info2180-lab4/superheroes.php',
            method: 'GET',
            dataType: 'text',
            success: function(data) {
                // Display the list of superheroes in an alert
                alert(data);
            },
            error: function(error) {
                console.error('Error fetching superheroes:', error);
            }
        });
    });
});
