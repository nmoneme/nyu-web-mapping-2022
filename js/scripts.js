
// consolodate the above terms into one terms
$('.term-container').on('click', function() {
	// pull out the data/term/defintion atribute from clicked term
	var termDefinition = $(this).data('term-definition')
	// overwrite the html in the right-half div with a definition of the term
	console.log(termDefinition)
	$(".right-half").text(`${termDefinition}`);

})
