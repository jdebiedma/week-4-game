
var characterArray = [];

var gameStart = true;
var enemySelect = false;
var attackPhase = false;

var counter = 0;

var characters = [

	{
		name: "Mario",
		health: 100,
		attack: 10,
		imageUrl: "assets/images/mario.png",
		counterAttack: 10,
		chosen: false

},

	{
		name: "Luigi",
		health: 110,
		attack: 7,
		imageUrl: "assets/images/luigi.png",
		counterAttack: 15,
		chosen: false
},

	{
		name: "Peach",
		health: 80,
		attack: 12,
		imageUrl: "assets/images/peach.png",
		counterAttack: 12,
		chosen: false
},

	{
		name: "Bowser",
		health: 150,
		attack: 20,
		imageUrl: "assets/images/bowser.png",
		counterAttack: 5,
		chosen: false
},



]

	




for (var i = 0; i < characters.length; i++) 
 	
  {
    // skip loop if the property is from prototype
    

    characterArray.push();
    


    var charSelectScreenItem = $("<button>")
      .addClass("space char-example")
      .html("<h4>" + characters[i].name + "</h4>")
      .prepend('<img src=' + characters[i].imageUrl +' width="auto" height="125">')
      .data("chosen",  false)
      .data("name", characters[i].name)
      .append("<h5>HP = " + characters[i].health + "</h5>")
      .appendTo("#bluebox");
      
      

   
}	




	$('.char-example').on("click", function(){
				if (gameStart) {




				chosenChar = $(this).data('name');
				gameStart = false;
				enemySelect = true;
				$(this).removeClass('space').addClass('selection');
				
				for (var i = 0; i < characters.length; i++) 
 	
  					{

						if (characters[i].name != chosenChar) {
									
									var enemySelectScreenItem = $("<button>")
									.addClass("enemy1")
									.addClass("space")
									.addClass("test")
      								.html("<h4>" + characters[i].name + "</h4>")
      								.prepend('<img src=' + characters[i].imageUrl +' width="auto" height="125">')
      								.data("chosen",  false)
      								.data("name", characters[i].name)
      								.append("<h5>HP = " + characters[i].health + "</h5>")
      								.appendTo("#redbox");

							
									
							
						}
					}






     			
     			$('.char-example').not(this).each(function(){


     				 $(this).slideUp();
     				 	
     				 	
     						});
     				
     				
     				
     	}


     	
				

					alert("pick a foe!");
					alert(gameStart);
					alert(enemySelect);
				
			
					

	});



	
$("enemy1").on("click", function() {


alert("we out here");

});





