
var characterArray = [];

var gameStart = true;
var enemySelect = false;
var attackPhase = false;
var winCondition = false;
var gameOver = false;

var counter = 1;

var fightersReady = false;

var myHealth = 0;
var myBaseAttack = 0;
var myAttack = 0;
var myCounterAttack = 0;
var myImageUrl = "";
var myName = "";

var nextHealth = 100000;
var prevEnemyHealth = 100000;
var nextEnemyHealth = 100000;

var enemyHealth = 100000;


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
		{
		name: "Toad",
		health: 50,
		attack: 10,
		imageUrl: "assets/images/toad.png",
		counterAttack: 50,
		chosen: false
},

{
		name: "King Boo",
		health: 150,
		attack: 5,
		imageUrl: "assets/images/kingboo.png",
		counterAttack: 20,
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




	//CHARACTER SELECT

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
							if (characters[i].name === chosenChar) {

								myName = characters[i].name;
								myImageUrl = characters[i].imageUrl;
								myHealth = characters[i].health;
      							myAttack = characters[i].attack;
      							myBaseAttack = characters[i].attack;
      							myCounterAttack = characters[i].counterAttack;


							}




					}
						//ENEMY SELECT

						$(".enemy1").on("click", function() {
							if (enemySelect) {
									chosenEnemy = $(this).data('name');
									
									

									for (var i = 0; i < characters.length; i++) {
													

									if (characters[i].name === chosenEnemy) {


									
									if (!fightersReady)	{

									yourCharacter = $("<div id='clickable'>")
									.html("<h4>" + myName + "</h4>")
      								.prepend('<img src=' + myImageUrl +' width="auto" height="125">')
      								.data("chosen",  true)
      								.removeClass("space")
      								.addClass("selection")
      								.data("name", myName)
      								.append("<h5 id ='myHealthHolder'>HP = " + myHealth + "</h5>")
      								.append("<h3>Player</h3>")
      								.appendTo("#blackbox");

      								var vsHolder = $("<div>")
      								.html("<h2>" + "VERSUS" + "</h2>")
      								.addClass("vsIcon")
      								.appendTo("#blackbox");

      							}

									var selectedEnemy = $("<div>")
									.html("<h4>" + characters[i].name + "</h4>")
      								.prepend('<img src=' + characters[i].imageUrl +' width="auto" height="125">')
      								.data("chosen",  false)
      								.removeClass("space")
      								.addClass("yourOpponent")
      								.data("name", characters[i].name)
      								.append("<h5 class = 'no"+ i +" '  id ='enemyHealthHolder'  >HP = " + characters[i].health + "</h5>")
      								.append("<button type='button' class='btn btn-success number" + i + " ' id='attackButton'>Attack</button>")
      								.appendTo("#blackbox");

      								

      								$("#fightHold").html("FIGHT!!");


												$(this).slideUp();
												enemySelect = false;
												attackPhase = true;
												fightersReady = true;
												enemyHealth = characters[i].health;
												nextHealth = myHealth - characters[i].counterAttack;
														console.log("Enemy health is " + characters[i].health);
														console.log("My health is " + myHealth);
														console.log("My next health will be " + nextHealth);
												
												// ATTACK PHASE 1
												// you might be able to reference things outside of functions with their 
												// global variable tags...
												

												$('.number' + i).on("click", function(){
													

												if (nextHealth < 1 && enemyHealth > 0 ){
													
													gameOver = true; };

												
												
											

			
												if (attackPhase)	{
												for (var i = 0; i < characters.length; i++) {

												if (characters[i].name === chosenEnemy){

														nextEnemyHealth = characters[i].health - myAttack;
														characters[i].health = characters[i].health - myAttack;
														
														prevEnemyHealth = nextEnemyHealth + myAttack + myAttack;

														myHealth = myHealth - characters[i].counterAttack;
														nextHealth = myHealth - characters[i].counterAttack;
														

														myAttack = myAttack + myBaseAttack;

														console.log("Enemy health is " + characters[i].health);
														console.log("My health is " + myHealth);
														console.log("My next health will be " + nextHealth);


														if (counter === characters.length - 1 && nextEnemyHealth < 1) {

													winCondition = true;
												}
														

														if (nextEnemyHealth < 1){

														$(selectedEnemy).slideUp();
														attackPhase = false;
														enemySelect = true;
														$("#fightHold").html("You defeated " + chosenEnemy+ "! Select your next opponent!");
														counter ++;
														

															}	

														

														

														if (gameOver) {myHealth = 0;
														}

															
														

														
														$(".no" + i).html("<h5 class = 'no"+ i +" '  id ='enemyHealthHolder'  >HP = " + characters[i].health + "</h5>");

														$("#myHealthHolder").html("<h5 id ='myHealthHolder'>HP = " 
															+ myHealth + "</h5>");

										if (gameOver) {attackPhase = false; 
												yourCharacter.addClass("imageWrapper");
												yourCharacter.append('<img class="overlayImage" src="assets/images/x.png" width="auto" height="125">')
												$("#fightHold").html('<h1 id="gameOver" >Game Over!</h1>')
												


														return;

														}

										if (winCondition) {attackPhase = false;
											enemySelect = false;
											
											$("#fightHold").html('<h1 id="gameOverGood" >You Won! All Opponents Defeated!</h1>');}
															return;

												}
												}
												}
												});
												
												
												}

												}
												}

												});
							



     			
     			$('.char-example').not(this).each(function(){


     				 $(this).slideUp();
     				 	
     				 	
     						});
     				
     				
     				
     	}


     	
				

					
					
				
			


	});







