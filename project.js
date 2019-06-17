$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500,function(){
    	$(this).remove();
    });
    event.stopPropagation();
});

$("input").keypress(function(event){
	if (event.which === 13) {
        var todoText = $(this).val();
        $("ul").append("<li><span>Del </span> " + todoText + "</li>");
        $(this).val("");
	}

});

$(".far").on("click", function(){
	$("input").fadeToggle();
})