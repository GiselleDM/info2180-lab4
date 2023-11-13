document.addEventListener('DOMContentLoaded', function() {
    $('#searchButton').click(function() {
        var searchQuery = $('#searchInput').val();

        // Make an AJAX call using jQuery ajax() method
        $.ajax({
            url: 'http://localhost:8081/info2180-lab4/superheroes.php',
            method: 'GET',
            data: { query: searchQuery },
            dataType: 'json',
            success: function(response) {
                
                displayResult(response);
            },
            error: function(error) {
                console.error('Error fetching superheroes:', error);
            }
        });
    });
    function displayResult(result) {
        var resultDiv = $('#result');

        // Clear previous content
        resultDiv.empty();

        // Check if a superhero is found
        if (result) {
            
            var aliasHeader = $('<h3>').text(result.alias);
            var nameHeader = $('<h4>').text(result.name);
            var bioParagraph = $('<p>').text(result.biography);

          
            resultDiv.append(aliasHeader, nameHeader, bioParagraph);
        } else {
            
            resultDiv.text('Superhero not found');
        }
    }
});
