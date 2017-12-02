//Check off specific todos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//click on X to delete
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//add event listener for input of new to dos
$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		//grabbing text from input
		let todoText = $(this).val()
		//delete input field
		$(this).val("");
		//create a new li and add to ul
		$("ul").append("<li><span><i class='fa fa-trash' aria-hidden='true'></i></span> " + todoText + "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
});